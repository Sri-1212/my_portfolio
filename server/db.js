const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mysql = require('mysql2/promise');

const DB_HOST = process.env.DB_HOST || process.env.MYSQLHOST || 'localhost';
const DB_USER = process.env.DB_USER || process.env.MYSQLUSER || 'root';
const DB_PASSWORD = (process.env.DB_PASSWORD || process.env.MYSQLPASSWORD || '').trim();
const DB_NAME = process.env.DB_NAME || process.env.MYSQLDATABASE || 'portfolio_db';
const DB_PORT = parseInt(process.env.DB_PORT || process.env.MYSQLPORT || '3306', 10);

let pool = null;

/**
 * Initializes the MySQL connection pool and ensures the portfolio database
 * and contact_messages table exist without affecting any other database.
 */
async function initDB() {
  try {
    // 1. In local environments, attempt to create the database if it doesn't already exist.
    // In cloud environments (like Railway MySQL), the database is pre-created and user permissions
    // may disallow CREATE DATABASE, so we safely catch and proceed.
    try {
      const serverConnection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        port: DB_PORT,
      });

      await serverConnection.query(
        `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
      );
      await serverConnection.end();
    } catch (createDbErr) {
      // In cloud providers, connecting without a database or running CREATE DATABASE may be restricted.
      // We log this note safely and proceed to connect directly to the assigned DB_NAME.
      console.log(`[MySQL] Note: Cloud/pre-existing database mode (Skipped CREATE DATABASE: ${createDbErr.message})`);
    }

    // 2. Create the connection pool scoped strictly to DB_NAME
    const poolConfig = {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    };

    if (process.env.DB_SSL === 'true' || process.env.MYSQL_SSL === 'true') {
      poolConfig.ssl = { rejectUnauthorized: false };
    }

    pool = mysql.createPool(poolConfig);

    // 3. Ensure the contact_messages table exists in the database
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;
    await pool.query(createTableSQL);

    console.log(`[MySQL] Successfully connected to database: "${DB_NAME}"`);
    console.log(`[MySQL] Table "contact_messages" ready.`);
    return pool;
  } catch (error) {
    console.error(`[MySQL] Database initialization error:`, error.message);
    throw error;
  }
}

function getPool() {
  if (!pool) {
    throw new Error('Database pool not initialized. Call initDB() first.');
  }
  return pool;
}

module.exports = {
  initDB,
  getPool,
};

