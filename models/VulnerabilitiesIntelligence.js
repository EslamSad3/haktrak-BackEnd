const mongoose = require("mongoose");

const VulnerabilitiesIntelligenceSchema = new mongoose.Schema(
  {
    vulnerabilityID: {
      type: String,
      required: [true, "Vulnerabilities Intelligence vulnerabilityID required"],
    },
    description: {
      type: String,
      required: [true, "Vulnerabilities Intelligence description required"],
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      required: [true, "Vulnerabilities Intelligence severity required"],
    },
    affectedSystems: {
      type: String,
      required: [true, "Vulnerabilities Intelligence affectedSystems required"],
    },
    impact: {
      type: String,
      required: [true, "Vulnerabilities Intelligence impact required"],
    },
    cvsScore: {
      type: Number,
      required: [true, "Vulnerabilities Intelligence cvsScore required"],
    },
    exploitAvailability: {
      type: String,
      required: [
        true,
        "Vulnerabilities Intelligence exploitAvailability required",
      ],
    },
    patchAvailability: {
      type: String,
      required: [
        true,
        "Vulnerabilities Intelligence patchAvailability required",
      ],
    },
    vendor: {
      type: String,
      required: [true, "Vulnerabilities Intelligence vendor required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Vulnerabilities Intelligence mitigationSteps required"],
    },
    status: {
      type: String,
      required: [true, "Vulnerabilities Intelligence status required"],
    },
    references: {
      type: String,
      required: [true, "Vulnerabilities Intelligence references required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "VulnerabilitiesIntelligence",
  VulnerabilitiesIntelligenceSchema
);