const express = require("express");
const dbConnect = require("./Database/connect");
const router = require("./routes/task.routes");
const app = express();
const port = process.env.port || 5000;
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task server is running");
});

app.use("/api/v1/tasks", router);

const start = async () => {
  try {
    await dbConnect(process.env.DB_URL);
    console.log(`Task server is running on http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
};

start();
