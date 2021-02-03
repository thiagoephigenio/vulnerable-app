const User = require("../models/User");

class UserController {
  async create(req, res) {
    console.log(req.body);
    await User.create(
      req.body.user_id,
      req.body.title,
      req.body.description,
      req.body.iscomplete
    );
    res.status(200).send("Create Users works!!");
  }
  async remove(req, res) {
    await User.remove();
    res.status(200).send("Remove Users works!!");
  }
  async getAll(req, res) {
   await User.getAll().then((users) => res.status(200).send(users.rows))      
  }
}

module.exports = new UserController();
