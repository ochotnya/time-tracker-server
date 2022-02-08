const mongoose = require("mongoose");

const activityTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    default: "red",
  },
  desc: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports =
  mongoose.models.ActivityType ||
  mongoose.model("ActivityType", activityTypeSchema);
