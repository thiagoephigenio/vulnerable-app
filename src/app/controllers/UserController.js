const User = require("../models/User");

class UserController {
  create(req, res) {
    const { name, email, password } = req.body;
    User.create({ name: name, email: email, password: password })
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(401).send(error));
  }

  remove(req, res) {
    const { id } = req.body;
    User.destroy({ where: { id: id } })
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(401).json(error));
  }

  getAll(req, res) {
    User.findAll()
      .then((users) => res.status(200).json(users))
      .catch((error) => res.status(401).json(error));
  }

  findOne(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email: email, password: password } })
      .then((user) => res.status(200).json(user))
      .catch((error) => res.status(401).json(error));
  }
}

module.exports = new UserController();
