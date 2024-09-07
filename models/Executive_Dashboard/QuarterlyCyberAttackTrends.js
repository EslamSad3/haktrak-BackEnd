const mongoose = require("mongoose");

const QuarterlyCyberAttackTrendsSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model(
  "QuarterlyCyberAttackTrends",
  QuarterlyCyberAttackTrendsSchema
);