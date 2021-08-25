"use strict";

const geocodeAPI = require("./app/services/external/geolocation.js");
const weatherAPI = require("./app/services/external/weather.js");

geocodeAPI.getLatAndLong("Buenos aires", (error, data) => {
  console.log(error);
  console.log(data);
});

weatherAPI.getWeather(-34.59972, -58.38194, (error, data) => {
  console.log(error);
  console.log(data);
});