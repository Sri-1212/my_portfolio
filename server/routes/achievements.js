const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// GET /api/achievements — all achievements sorted by order
router.get('/', async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ order: 1 });
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
