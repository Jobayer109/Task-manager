const express = require("express");
const router = require("./routes/task.routes");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Task server is running");
});

app.use("/api/v1/tasks", router);

app.listen(port, () => {
  console.log(`Task server is running on http://localhost:${port}`);
});
