const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, enum: ['client', 'personal', 'hackathon'], default: 'personal' },
  stack: [{ type: String }],
  description: { type: String, required: true },
  images: [{ type: String }],
  liveUrl: { type: String },
  githubUrl: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
