const mongoose = require("mongoose");

const BrandReputationSchema = new mongoose.Schema(
  {
    domainName: {
      type: String,
      required: [true, "Brand Reputation domainName required"],
    },
    brandName: {
      type: String,
      required: [true, "Brand Reputation brandName required"],
    },
    incidentDescription: {
      type: String,
      required: [true, "Brand Reputation incidentDescription required"],
    },
    status: {
      type: String,
      enum: ["Taking Down", "In progress", "False Positive", "Resolving"],
      required: [true, "Brand Reputation status required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Brand Reputation mitigationSteps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BrandReputation", BrandReputationSchema);
