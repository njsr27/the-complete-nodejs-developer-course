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

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const mongoDbConstants = require("./app/constants/mongodb");

mongoClient.connect(mongoDbConstants.CONNECTION_URL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    console.log(error);
  } else {
    const db = client.db(mongoDbConstants.DATABASE_NAME);
    db.collection("tasks")
      .find({completed: false})
      .toArray((error, response) => {
          if (error) {
            console.log(error);
          } else {
            console.log(response);
          }
        }
      )
  }
})