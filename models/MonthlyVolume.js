const mongoose = require("mongoose");

const MonthlyVolumeSchema = new mongoose.Schema({
  month: { type: String },
  securityEvents: { type: String },
  alertVolume: { type: String },
  incidents: { type: String },
  darkWeb: { type: String },
  attackSurface: { type: String },
  ato: { type: String },
  thirdPartyLeaks: { type: String },
});

module.exports = mongoose.model("MonthlyVolume", MonthlyVolumeSchema);
