"use strict";

const geocodeAPI = require("./app/services/external/geolocation.js");
const weatherAPI = require("./app/services/external/weather.js");

geocodeAPI.getLatAndLong("Buenos aires", (error, data) => {
  if (error) {
    console.log(error)
  } else {
    weatherAPI.getWeather(data.lat, data.long, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});