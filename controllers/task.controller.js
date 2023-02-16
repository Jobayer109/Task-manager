const Task = require("../models/task.models");

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
    res;
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneTask = (req, res) => {
  res.send("One task created");
};

const updateTask = (req, res) => {
  res.send("Task updated");
};

const deleteTask = (req, res) => {
  res.send("Task deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
