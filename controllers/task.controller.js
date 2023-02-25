const asyncWrapper = require("../middleware/async");
const Task = require("../models/task.models");

// Get all task from db
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ status: "success", data: { tasks, Total_tasks: tasks.length } });
  res;
});

// Create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

// Get a single task info
const getOneTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.status(200).json({ task });
});

// Delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.status(200).json({ task });
});

// Update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
