const express = require("express");
const Task = require("../models/Task");
const router = new express.Router();

router.post("/tasks", (req, res) => {
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

router.get("/tasks", (req, res) => {
  Task.find({})
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

router.get("/tasks/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(404);
      res.send(error);
    });
});

router.patch("/tasks/:id", (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

router.delete("/tasks/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(404);
      res.send(error);
    });
});

module.exports = router;