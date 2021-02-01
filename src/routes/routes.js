const routes = require("express").Router();
const TaskController = require("../app/controllers/TaskController");

routes.post("/create-task", (req, res) => {
	TaskController.create(req, res)//.then().catch(error => console.error(error));
});

routes.get("/tasks", (req, res) => {
	TaskController.getAll(req, res).then().catch(error => console.error(error));
});

module.exports = routes;
