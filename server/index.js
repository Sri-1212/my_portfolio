const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const { initDB } = require('./db');

const contactRouter = require('./routes/contact');
const projectsRouter = require('./routes/projects');
const achievementsRouter = require('./routes/achievements');
const activitiesRouter = require('./routes/activities');

const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);
const HOST = '0.0.0.0';

// Configure CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

if (process.env.FRONTEND_URL) {
  // Support single URL or comma-separated URLs, stripping any trailing slash
  const customOrigins = process.env.FRONTEND_URL
    .split(',')
    .map((url) => url.trim().replace(/\/+$/, ''))
    .filter(Boolean);
  allowedOrigins.push(...customOrigins);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, uptime/health probes, same-origin)
      if (!origin) return callback(null, true);

      const normalizedOrigin = origin.replace(/\/+$/, '');
      if (allowedOrigins.includes(normalizedOrigin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS policy does not allow access from origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/achievements', achievementsRouter);
app.use('/api/activities', activitiesRouter);

// Health check endpoint (Railway & uptime probes)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-backend',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint status
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-backend',
    message: 'Portfolio backend API is running',
  });
});

// Start server and initialize MySQL
async function startServer() {
  try {
    await initDB();
  } catch (err) {
    console.warn('[Server] MySQL initialization warning:', err.message);
  }

  app.listen(PORT, HOST, () => {
    console.log(`[Server] Portfolio backend listening on http://${HOST}:${PORT}`);
  });
}

startServer();

