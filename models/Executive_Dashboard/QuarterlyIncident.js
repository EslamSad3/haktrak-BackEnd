const mongoose = require("mongoose");

const Quarterlyincident = new mongoose.Schema(
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
    quarter: { type: Number, required: [true, "quarter required"] },
  },
  { timestamps: true }
);

Quarterlyincident.index({ month: 1 }, { unique: true });

module.exports = mongoose.model("Quarterlyincident", Quarterlyincident);
