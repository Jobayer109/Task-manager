const express = require("express");
const dbConnect = require("./config/db");
const tasksRouter = require("./routes/task.routes");
const port = process.env.port || 5000;
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base routes
app.use("/api/v1/tasks", tasksRouter);

// Database connection handle
const start = async () => {
  try {
    await dbConnect(process.env.DB_URL);
    app.listen(port, console.log(`server is running on http://localhost:${port}`));
  } catch (error) {
    console.log(error.message);
  }
};
start();
