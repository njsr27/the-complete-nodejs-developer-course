const express = require("express");
const User = require("../models/User");
const router = new express.Router();

router.post("/users", (req, res) => {
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

router.get("/users", (req, res) => {
  User.find({})
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

router.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(404);
      res.send(error);
    });
});

router.patch("/users/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

router.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(404);
      res.send(error);
    });
});

module.exports = router;