const mongoose = require("mongoose");

const threatActorsSchema = new mongoose.Schema(
  {
    groupeName: {
      type: String,
      required: [true, "threat Actors groupe Name Required"],
    },
    source: {
      type: String,
      required: [true, "threat Actors source required"],
    },
  },
  { timestamps: true }
);

// create model
module.exports = mongoose.model("threatActors", threatActorsSchema);
// const threatActorsModel = mongoose.model('threatActors', threatActorsSchema);
// module.exports = threatActorsModel;
