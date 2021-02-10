require('dotenv').config()
const express = require("express");
const app = express(require("./routes/routes"));
const cookieParser = require("cookie-parser");
require("./database")
app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/routes"));

module.exports = app;
