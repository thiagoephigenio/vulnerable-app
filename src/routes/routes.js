const routes = require("express").Router();
const TaskController = require("../app/controllers/TaskController");
const UserController = require("../app/controllers/UserController");
const SessionController = require("../app/controllers/SessionController");

const authMiddleware = require("../app/middlewares/auth");

routes.post("/create-task", (req, res) => {
  TaskController.create(req, res); //.then().catch(error => console.error(error));
});

routes.post("/signup", (req, res) => {
  SessionController.signup(req, res);
});

routes.post("/teste", (req, res) => {
  console.log(req.body);
  res.status(200).send()
});

routes.get("/login", async (req, res) => {
  console.log(req.headers.authorization);
  if (typeof req.headers.authorization !== "string") {
    res.sendStatus(400);
    return;
  }
  await SessionController.login(req, res);
});

routes.use(authMiddleware);

routes.get("/tasks", async (req, res) => {
  await TaskController.getAll(req, res);
});

routes.get("/users", async (req, res) => {
  await UserController.getAll(req, res);
});

routes.get("/logout", function (req, res) {
  SessionController.logout(req, res);
});
module.exports = routes;
