const mongoose = require("mongoose");

const CyberAttackTrendsSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CyberAttackTrends", CyberAttackTrendsSchema);
