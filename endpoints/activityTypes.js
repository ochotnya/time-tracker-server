const express = require("express");
const ActivityType = require("../models/activityTypeModel");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("in GET");
  try {
    const types = await ActivityType.find();
    console.log(types);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const newActivity = new ActivityType({
      name: req.body.name,
      color: req.body.color,
    });

    const exists = await (
      await ActivityType.find({ name: newActivity.name })
    ).length;
    if (exists) {
      return res
        .status(500)
        .json({ message: `Activity ${newActivity.name} already exists!` });
    }
    newActivity.save();
    return res
      .status(200)
      .json({ message: `Activity ${newActivity.name} created successfully!` });
  } catch (error) {
    return res.status(500).json({ message: `Server error` });
  }
});
module.exports = router;
