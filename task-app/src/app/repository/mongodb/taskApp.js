const mongoose = require("mongoose");
const mongoDbConstants = require("../../constants/mongodb");

mongoose.connect(
  mongoDbConstants.CONNECTION_URL + "/task-app",
  {
    useNewUrlParser: true,
    autoIndex: true
  }
);