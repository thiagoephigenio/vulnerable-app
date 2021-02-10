const Task = require("../models/Task");

class TaskController {
  create(req, res) {
    const { user_id, title, description, is_complete } = req.body;
    console.log("asdasd");
    Task.create({
      user_id: user_id,
      title: title,
      description: description,
      is_complete: is_complete,
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(401).send(error);
      });
  }

  remove(req, res) {
    const { id } = req.body;
    Task.destroy({ where: { id: id } })
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(401).json(error));
  }
  removeAll(req, res) {
    Task.destroy({ where: {}, truncate: true })
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(401).json(error));
  }

  getAll(req, res) {
    Task.findAll().then((tasks) => res.status(200).send(tasks));
  }

  findOne(req, res) {
    const { user_id } = req.body;
    Task.findOne({ where: { user_id: user_id } })
      .then((task) => res.status(200).json(task))
      .catch((error) => res.status(401).json(error));
  }
}

module.exports = new TaskController();
