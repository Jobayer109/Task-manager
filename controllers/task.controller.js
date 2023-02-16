const Task = require("../models/task.models");

// Get all task from db
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
    res;
  } catch (error) {
    res.status(500).send(error.message);
  }
};

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
const getOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `There is no data of id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update task
const updateTask = (req, res) => {
  res.send("Task updated");
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `There is no data of id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
