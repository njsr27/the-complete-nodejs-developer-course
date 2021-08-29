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

const {mongoClient} = require("mongodb")
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-app"

// Insert functionality

mongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    console.log(error);
  } else {
    const db = client.db(databaseName);
    db.collection("tasks");
  }
})