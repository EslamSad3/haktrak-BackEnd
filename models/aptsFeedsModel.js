const mongoose = require("mongoose");

const aptsFeedsSchema = new mongoose.Schema(
  {
    groupeName: {
      type: String,
      required: [true, "APT groupe Name Required"],
    },
    source: {
      type: String,
      required: [true, "APT Feed source required"],
    },
  },
  { timestamps: true }
);

// create model
module.exports = mongoose.model("aptsFeeds", aptsFeedsSchema);
// const aptsFeedsModel = mongoose.model('aptsFeeds', aptsFeedsSchema);
// module.exports = aptsFeedsModel;
