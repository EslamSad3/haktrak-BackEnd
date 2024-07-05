const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: [true, "ip address Required"],
    },
    port: {
      type: Number,
      required: [true, "port required"],
    },
    source: {
      type: String,
    },
    description: String,
  },
  { timestamps: true }
);

// create model
module.exports = mongoose.model("ip", ipSchema);
// const ipModel = mongoose.model('ip', ipSchema);
// module.exports = ipModel;
