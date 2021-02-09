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

routes.get("/users", async (req, res) => {
  await UserController.getAll(req, res);
});

routes.post("/create-task", async (req, res) => {
  await TaskController.create(req, res); 
});

routes.get("/logout", function (req, res) {
  SessionController.logout(req, res);
});
module.exports = routes;
