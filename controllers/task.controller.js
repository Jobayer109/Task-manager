const getAllTasks = (req, res) => {
  res.send("Here are all tasks");
};

const createTask = (req, res) => {
  res.send(req.body);
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
