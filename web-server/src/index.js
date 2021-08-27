const express = require("express");
const geocodeAPI = require("./app/services/external/geolocation.js");
const weatherAPI = require("./app/services/external/weather.js");

const app = express();

app.use(express.static(__dirname + "/public/"));

//http://localhost:3000/weather?location=Buenos%20aires

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    res.send({
      error: "You need to provide a location",
    });
  } else {
    geocodeAPI.getLatAndLong(req.query.location, (error, data) => {
      if (error) {
        res.send({
          error: error,
        });
      } else {
        weatherAPI.getWeather(data.lat, data.long, (error, data) => {
          if (error) {
            res.send({
              error: error,
            });
          } else {
            res.send(data);
          }
        });
      }
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/notFound.html");
});

app.listen(3000, () => {
  console.log("Server up and running on port 3000.");
});