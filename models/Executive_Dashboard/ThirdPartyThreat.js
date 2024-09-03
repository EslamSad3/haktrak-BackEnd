const mongoose = require("mongoose");

const ThirdPartyThreat = new mongoose.Schema(
  {
    thirdParty: {
      type: String,
      required: [true, "Third Party required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "Third Party Threat severity required"],
    },
  },
  { timestamps: true }
);

ThirdPartyThreat.index({ thirdParty: 1, severity: 1 }, { unique: true });

module.exports = mongoose.model("ThirdPartyThreat", ThirdPartyThreat);
