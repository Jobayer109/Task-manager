const express = require("express");
const dbConnect = require("./Database/connect");
const tasksRouter = require("./routes/task.routes");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api/v1/tasks", tasksRouter);

// Database connection handle
const port = process.env.port || 5000;
const start = async () => {
  try {
    await dbConnect(process.env.DB_URL);
    app.listen(port, console.log(`server is running on http://localhost:${port}`));
  } catch (error) {
    console.log(error.message);
  }
};
start();
