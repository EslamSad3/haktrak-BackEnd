const mongoose = require("mongoose");

const QuarterlyIncident = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Quarterly Incident month required"],
      trim: true,
    },
    score: {
      type: String,
      required: [true, "Quarterly Incident Score required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuarterlyIncident", QuarterlyIncident);
