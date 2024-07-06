const mongoose = require("mongoose");

const APTFeedsSchema = new mongoose.Schema(
  {
    aptGroupName: {
      type: String,
      required: [true, "IP aptGroupName required"],
    },
    threatType: { type: String, required: [true, "IP threatType required"] },
    ttps: { type: String, required: [true, "IP ttps required"] },
    targetSectors: {
      type: String,
      required: [true, "IP targetSectors required"],
    },
    geographicFocus: {
      type: String,
      required: [true, "IP geographicFocus required"],
    },
    iocs: { type: String, required: [true, "IP iocs required"] },
    source: { type: String, required: [true, "IP source required"] },
    description: {
      type: String,
      required: [true, "APTFeed description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("APTFeeds", APTFeedsSchema);
