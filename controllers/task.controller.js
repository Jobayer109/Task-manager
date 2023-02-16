const { createCustomError } = require("../errors/custom-error");
const asyncWrapper = require("../middleware/async");
const Task = require("../models/task.models");

// Get all task from db
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ status: "success", data: { tasks, nbHits: tasks.length } });
  res;
});

// Create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a single task info
const getOneTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError({ msg: `There is no data of id: ${taskID}` }, 404));
  }
  res.status(200).json({ task });
});

// Delete task
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError({ msg: `There is no data of id: ${taskID}` }, 404));
  }
  res.status(200).json({ task });
});

// Update task
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError({ msg: `There is no data of id: ${taskID}` }, 404));
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
