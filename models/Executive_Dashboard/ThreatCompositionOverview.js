const mongoose = require("mongoose");

const ThreatCompositionOverview = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Threat Composition Overview month required"],
      trim: true,
    },
    score: {
      type: String,
      required: [true, "Threat Composition Overview Score required"],
    },
    threatType: {
      type: String,
      enum: ["Brute Force Attacks", "Insider Threats", "Malware/other Attacks"],
      required: [true, "Threat Composition Overview Compliance Type required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ThreatCompositionOverview",
  ThreatCompositionOverview
);
