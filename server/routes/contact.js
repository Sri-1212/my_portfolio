const express = require('express');
const router = express.Router();
const { getPool } = require('../db');

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/contact
 * Request body: { name: string, email: string, message: string }
 * Inserts contact form message into portfolio_db.contact_messages table
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    // 1. Validate name
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      });
    }

    if (name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name cannot exceed 100 characters.',
      });
    }

    // 2. Validate email
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      });
    }

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 255) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // 3. Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Message is required.',
      });
    }

    if (message.trim().length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot exceed 5000 characters.',
      });
    }

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    // 4. Parameterized SQL query execution
    const pool = getPool();
    const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    const [result] = await pool.execute(sql, [
      trimmedName,
      trimmedEmail,
      trimmedMessage,
    ]);

    console.log(
      `[Contact API] Received message from "${trimmedName}" <${trimmedEmail}> (ID: ${result.insertId})`
    );

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: {
        id: result.insertId,
      },
    });
  } catch (error) {
    console.error('[Contact API] Error handling contact form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
});

module.exports = router;
