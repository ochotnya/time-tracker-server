const express = require("express");
const dbConnect = require("./dbConnect");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = 3000;

dbConnect();
app.use(
  cors({
    methods: ["GET", "POST"],
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const activityTypesRouter = require("./endpoints/activityTypes");

app.use("/types", activityTypesRouter);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
