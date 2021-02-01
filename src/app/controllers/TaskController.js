const Task = require("../models/Task");

class TaskController {
  async create(req, res) {
    console.log(req.body)
    await Task.create(req.body.user_id, req.body.title, req.body.description, req.body.iscomplete);
    res.status(200).send("Create tasks works!!");
  }
  async remove(req, res) {
    await Task.remove();
    res.status(200).send("Remove tasks works!!");
  }
  async getAll(req, res) {
    await Task.getAll();
    res.status(200).send("Get all tasks works!!");
  }
}

module.exports = new TaskController();
