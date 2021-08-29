const {mongoClient} = require("mongodb")
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-app"

// Insert functionality

mongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    console.log(error);
  } else {
    const db = client.db(databaseName);
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