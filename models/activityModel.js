const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: "none",
  },
  desc: {
    type: String,
    required: true,
    default: "",
  },
  start: {
    type: String,
    required: true,
    default: Date.now().toString(),
  },
  end: {
    type: String,
    required: true,
    default: Date.now().toString(),
  },
});

module.exports =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);
