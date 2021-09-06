const mongoose = require("mongoose");
const validator = require("validator");

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
        return value >= 0;
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

module.exports = User;