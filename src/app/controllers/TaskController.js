const Task = require("../models/Task");

class TaskController {
  create(req, res) {
    Task.create(
      req.body.user_id,
      req.body.title,
      req.body.description,
      req.body.isComplete
    )
      .then((task) => {
        res.status(200).send(`${task.rowCount}`);
      })
      .catch((error) => {});
  }
  async remove(req, res) {
    await Task.remove();
    res.status(200).send("Remove tasks works!!");
  }
  getAll(req, res) {
    Task.getAll().then((tasks) => res.status(200).send(tasks.rows));
  }
}

module.exports = new TaskController();
