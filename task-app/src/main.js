"use strict";

// const express = require("express");
//
// const app = express();
//
// app.get("", (req, res) => {
//   res.send("It works!");
// });
//
// app.listen(3000, () => {
//   console.log("Server up and running on port 3000.");
// });

const mongoose = require("mongoose");
const mongoDbConstants = require("./app/constants/mongodb");
const validator = require("validator");

mongoose.connect(
  mongoDbConstants.CONNECTION_URL + "/task-app",
  {
    useNewUrlParser: true,
    autoIndex: true
  }
);

const User = mongoose.model("User", {
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      default: 0,
      validate: function (value) {
        return value > 0;
      }
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: function (value) {
        return validator.isEmail(value);
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true
    }
  }
)

const Task = mongoose.model("Task", {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  }
)

new User(
  {
    name: "Lein Swaisbrick",
    age: 30,
    email: "njsr27@gmail.com",
    password: "asd123%&/"
  }
).save()
  .then(result => console.log(result))
  .catch(error => console.log(error));