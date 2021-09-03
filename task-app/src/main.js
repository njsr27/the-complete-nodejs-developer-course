"use strict";

const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("It works!");
});

app.listen(3000, () => {
  console.log("Server up and running on port 3000.");
});