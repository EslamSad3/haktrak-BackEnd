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

MonthlyVolumeSchema.index(
  {
    securityEvents: 1,
    alertVolume: 1,
    incidents: 1,
    darkWeb: 1,
    attackSurface: 1,
    ato: 1,
    thirdPartyLeaks: 1,
    month: 1,
  },
  { unique: true }
);

module.exports = mongoose.model("MonthlyVolume", MonthlyVolumeSchema);
