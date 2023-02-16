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

const getOneTask = async (req, res) => {
  try {
    const id = req.params.id;
    const filteredTask = (await Task.find({})).filter((task) => task.id === id);
    res.status(200).json({ filteredTask });
  } catch (error) {
    res.status(500).send(error.message);
  }
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
