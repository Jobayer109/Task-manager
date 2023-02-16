const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required"],
    trim: true,
    maxLength: [20, "Task name can't be more than 20 characters"],
    unique: [true, "Task name should be unique"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
