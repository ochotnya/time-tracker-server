const express = require("express");
const dbConnect = require("./dbConnect");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = 3000;

dbConnect();
app.use(
  cors({
    methods: ["GET", "POST", "DELETE"],
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const activityTypesRouter = require("./endpoints/activityTypes");
const activitiesRouter = require("./endpoints/activities");
app.use("/types", activityTypesRouter);
app.use("/activities", activitiesRouter);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
