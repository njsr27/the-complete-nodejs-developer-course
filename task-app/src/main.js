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

mongoose.connect(
  mongoDbConstants.CONNECTION_URL + "/task-app",
  {
    useNewUrlParser: true,
    autoIndex: true
  }
);

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const me = new User({name: "Lein", age: "30"});

me.save()
  .then(result => console.log(result))
  .catch(error => console.log(error));