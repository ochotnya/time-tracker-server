const express = require("express");
const ActivityType = require("../models/activityTypeModel");
const router = express.Router();

//read all activity types
router.get("/", async (req, res) => {
  try {
    const types = await ActivityType.find();
    res.status(200).json({ types });
  } catch (error) {}
});

//create new activity type
router.post("/", async (req, res) => {
  try {
    //create new object
    const newActivity = new ActivityType({
      name: req.body.name,
      color: req.body.color,
      desc: req.body.desc,
    });

    //check if activity with this name already exists
    const exists = await (
      await ActivityType.find({ name: newActivity.name })
    ).length;
    if (exists) {
      return res
        .status(200)
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

router.delete("/:id", async (req, res) => {
  await ActivityType.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Type deleted!" });
});
module.exports = router;
