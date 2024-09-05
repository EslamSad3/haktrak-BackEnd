const mongoose = require("mongoose");

const AttackTrendQuarterlySchema = new mongoose.Schema({
  tactic: { type: String, required: true },
  techniqueId: { type: String, required: true },
  count: { type: Number, required: true },
  month: { type: String, required: true }, // Add month field
  year: { type: String }, // Add year field
  quarter: { type: Number, required: true }, // Add quarter field
});

AttackTrendQuarterlySchema.index({ tactic: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "AttackTrendQuarterly",
  AttackTrendQuarterlySchema
);
