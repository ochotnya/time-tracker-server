const express = require("express");
const Activity = require("../models/activityModel");

const router = express.Router();

//read all activities
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    console.log(activities);
    res.status(200).json({ activities });
  } catch (error) {}
});

//create new activity
router.post("/", async (req, res) => {
  console.log("Creating new entry");
  const newActivity = new Activity({
    type: req.body.type,
    desc: req.body.desc,
    start: req.body.start,
    end: req.body.end,
  });
  console.log(newActivity);
  newActivity.save();
  res.status(200).json({ message: `Activity ${newActivity.name} created!` });
});
module.exports = router;
