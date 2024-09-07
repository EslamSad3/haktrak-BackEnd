const mongoose = require("mongoose");

const ReportQuarterlyIncident = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Quarterly Incident month required"],
      trim: true,
      unique: true, // Ensure the month field is unique
    },
    score: {
      type: String,
      required: [true, "Quarterly Incident Score required"],
    },
    year: { type: String }, // Add year field
  },
  { timestamps: true }
);

ReportQuarterlyIncident.index({ month: 1 }, { unique: true });

module.exports = mongoose.model(
  "ReportQuarterlyIncident",
  ReportQuarterlyIncident
);
