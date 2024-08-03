const mongoose = require("mongoose");

const SecurityPostureScore = new mongoose.Schema(
  {
    percentage: {
      type: String,
      required: [true, "Security Posture Percentage required"],
    },
    score: {
      type: String,
      required: [true, "Security Posture Score required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SecurityPostureScore", SecurityPostureScore);
