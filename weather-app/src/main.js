"use strict";

const request = require("request");
const chalk = require("chalk");
const urls = require("./app/constants/urls");
const keys = require("./app/constants/keys");

// Weather API

// const weatherUrl =
//   urls.WEATHER_APP +
//   "?access_key=" +
//   keys.WEATHER_APP_ACCESS_KEY +
//   "&query=fetch:ip";
//
// const weatherOptions = {
//   json: true,
// };
//
// const weatherCallback = (err, response) => {
//   const data = response.body;
//   console.log(
//     chalk.green("[INFO] ") +
//       data.current.weather_descriptions[0] +
//       ". It is currently " +
//       chalk.magenta(data.current.temperature + "ºC") +
//       " degrees out, with " +
//       chalk.magenta(data.current.precip + "%") +
//       " chance of rain."
//   );
// };
//
// request(weatherUrl, weatherOptions, weatherCallback);

// Geolocation API

const geoUrl =
  urls.GEOLOCATION_APP +
  "/mapbox.places/Los%20Angeles.json?access_token=" +
  keys.GEOLOCATION_ACCESS_TOKEN +
  "&limit=1";

const geoOptions = { json: true };

const geoCallback = (err, response) => {
  const geolocation = response.body.features[0];
  const lat = geolocation.center[1];
  const long = geolocation.center[0];
  console.log(
    chalk.green("[INFO] ") +
      "At the moment, your latitude is " +
      chalk.magenta(lat) +
      " and your longitude " +
      chalk.magenta(long) +
      "."
  );
};

request(geoUrl, geoOptions, geoCallback);