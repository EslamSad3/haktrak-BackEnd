const mongoose = require("mongoose");

const NonComplianceGapsOverview = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Non Compliance Gaps Overview month required"],
    },
    score: {
      type: String,
      required: [true, "Non Compliance Gaps Overview Score required"],
    },
    compliance: {
      type: String,
      enum: ["MITRE ATT&CK", "ISO 27001", "NIST CSF", "PDPL", "SAMA"],
      required: [true, "Non Compliance Gaps Overview Compliance Type required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "NonComplianceGapsOverview",
  NonComplianceGapsOverview
);
