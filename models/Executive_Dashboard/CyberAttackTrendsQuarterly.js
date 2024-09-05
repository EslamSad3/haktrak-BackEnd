const mongoose = require("mongoose");

const CyberAttackTrendsQuarterlySchema = new mongoose.Schema({
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
  year: { type: String }, // Add year field
  quarter: { type: Number, required: true }, // Add quarter field
});

module.exports = mongoose.model(
  "CyberAttackTrendsQuarterly",
  CyberAttackTrendsQuarterlySchema
);
