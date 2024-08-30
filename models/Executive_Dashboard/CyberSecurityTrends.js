const mongoose = require("mongoose");

const CyberSecurityTrends = new mongoose.Schema(
  {
    score: {
      type: String,
      required: [true, "Cyber Security Trends score required"],
    },
    indicator: {
      type: String,
      required: [true, "Cyber Security Trends indicator required"],
    },
    summary: {
      type: String,
      required: [true, "Cyber Security Trends summary required"],
    },
  },
  { timestamps: true }
);

CyberSecurityTrends.index({ indicator: 1, score: 1 }, { unique: true });

module.exports = mongoose.model(
  "CyberSecurityTrends",
  CyberSecurityTrends
);
