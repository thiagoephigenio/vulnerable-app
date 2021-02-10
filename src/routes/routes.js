const routes = require("express").Router();
const TaskController = require("../app/controllers/TaskController");
const UserController = require("../app/controllers/UserController");
const SessionController = require("../app/controllers/SessionController");
const authMiddleware = require("../app/middlewares/auth");
const cors = require("cors");

routes.use(cors());

routes.post("/signup", (req, res) => {
  SessionController.signup(req, res);
});

routes.get("/login", async (req, res) => {
  await SessionController.login(req, res);
});

routes.use(authMiddleware);

routes.get("/tasks", async (req, res) => {
  await TaskController.getAll(req, res);
});

routes.get("/task", (req, res) => {
  TaskController.findOne(req, res);
});

routes.post("/create-task", (req, res) => {
  TaskController.create(req, res);
});

routes.post("/remove-task", (req, res) => {
  TaskController.remove(req, res);
});
routes.get("/remove-all-tasks", (req, res) => {
  TaskController.removeAll(req, res);
});

routes.get("/users", (req, res) => {
  UserController.getAll(req, res);
});

routes.get("/user", (req, res) => {
  UserController.findOne(req, res);
});

routes.post("/create-user", (req, res) => {
  UserController.create(req, res);
});

routes.post("/remove-user", (req, res) => {
  UserController.remove(req, res);
});

routes.get("/logout", function (req, res) {
  SessionController.logout(req, res);
});

module.exports = routes;
