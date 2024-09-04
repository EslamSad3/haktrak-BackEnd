const mongoose = require("mongoose");

const CyberRatingSchema = new mongoose.Schema({
  category: { type: String, required: true },
  current: { type: Number, required: true },
  desired: { type: Number, required: true },
  month: { type: String, required: true }, // Add month field
});

module.exports = mongoose.model("CyberRating", CyberRatingSchema);
