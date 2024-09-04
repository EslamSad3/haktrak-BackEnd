const mongoose = require("mongoose");

const AttackTrendSchema = new mongoose.Schema({
  tactic: { type: String, required: true },
  techniqueId: { type: String, required: true },
  count: { type: Number, required: true },
  month: { type: String, required: true }, // Add month field
});

module.exports = mongoose.model("AttackTrend", AttackTrendSchema);
