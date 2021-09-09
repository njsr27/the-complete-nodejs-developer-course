"use strict";

const express = require("express");
const app = express();
require("./app/repository/mongodb/taskApp")
const usersController = require("./app/controller/usersController")
const tasksController = require("./app/controller/tasksController")

app.use(express.json());
app.use(usersController);
app.use(tasksController);

app.listen(3000, () => {
  console.log("Server up and running on port 3000.");
});