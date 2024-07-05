const mongoose = require("mongoose");

const iocsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Hash", "Ip", "Url", "Domain"],
      required: [true, "ioc type Required"],
    },
    value: {
      type: String,
      required: [true, "ioc Value required"],
    },
    source: {
      type: String,
    },
    description: String,
  },
  { timestamps: true }
);

// create model
module.exports = mongoose.model("iocs", iocsSchema);
// const iocsModel = mongoose.model('iocs', iocsSchema);
// module.exports = iocsModel;
