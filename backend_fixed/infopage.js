const mongoose = require('mongoose');

const InfoPageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InfoPage', InfoPageSchema);
