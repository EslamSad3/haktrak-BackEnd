const mongoose = require("mongoose");

const SecurityEventSchema = new mongoose.Schema({
  bu: { type: String },
  alertVolume: { type: String },
  securityEvent: { type: String },
  incident: { type: String },
  atoDarkWebASM: { type: String },
  month: { type: Date },
});

module.exports = mongoose.model("SecurityEvent", SecurityEventSchema);
