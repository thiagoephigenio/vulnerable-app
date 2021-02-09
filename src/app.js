const express = require("express");
const app = express(require("./routes/routes"));

app.use(express.json());
app.use(require("./routes/routes"));

module.exports = app;
