const mongoose = require("mongoose");
const leakedcredentialsSchema = new mongoose.Schema({
  userName: String,
  password: {
    type: String,
    required: [true, "password required for leaked user"],
  },
  email: String,
  source: String,
});

module.exports = mongoose.model("leakedcredentials", leakedcredentialsSchema);
