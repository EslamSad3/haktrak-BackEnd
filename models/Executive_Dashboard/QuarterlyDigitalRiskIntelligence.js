const mongoose = require("mongoose");

const QuarterlyDigitalRiskIntelligence = new mongoose.Schema(
  {
    level: {
      type: String,
      enum: ["no risk", "medium", "high", "critical"],
      required: [true, "Digital Risk Intelligence level required"],
      default: "no risk",
    },
    indicator: {
      type: String,
      enum: [
        "executive protection",
        "situational awareness",
        "impersonations",
        "social media",
      ],
      required: [true, "Digital Risk Intelligence indicator required"],
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
    quarter: { type: Number, required: [true, "quarter required"] },
  },
  { timestamps: true }
);

QuarterlyDigitalRiskIntelligence.index(
  { indicator: 1, level: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "QuarterlyDigitalRiskIntelligence",
  QuarterlyDigitalRiskIntelligence
);
