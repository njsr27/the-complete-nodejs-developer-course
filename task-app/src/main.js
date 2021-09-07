"use strict";

const express = require("express");
const app = express();
require("./app/repository/mongodb/taskApp")
const User = require("./app/models/User")
const Task = require("./app/models/Task")

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(result => {
      res.status(201)
      res.send(result);
    })
    .catch(error => {
      res.status(400);
      res.send(error);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task.save()
    .then(result => {
      res.status(201)
      res.send(result);
    })
    .catch(error => {
      res.status(400);
      res.send(error);
    });
});

app.listen(3000, () => {
  console.log("Server up and running on port 3000.");
});