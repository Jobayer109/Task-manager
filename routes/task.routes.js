const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getOneTask).put(updateTask).delete(deleteTask);

module.exports = router;
