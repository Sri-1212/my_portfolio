const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// GET /api/activities — all activities sorted by order
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find().sort({ order: 1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
