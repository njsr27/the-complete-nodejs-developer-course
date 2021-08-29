const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const mongoDbConstants = require("../../constants/mongodb");

// Insert functionality

mongoClient.connect(mongoDbConstants.CONNECTION_URL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    console.log(error);
  } else {
    const db = client.db(mongoDbConstants.DATABASE_NAME);
    db.collection("tasks")
      .insertMany([
        {
          description: "Test task 1",
          completed: true
        },
        {
          description: "Test task 2",
          completed: false
        },
        {
          description: "Test task 3",
          completed: false
        }
      ], (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      })
  }
})

// Read functionality

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