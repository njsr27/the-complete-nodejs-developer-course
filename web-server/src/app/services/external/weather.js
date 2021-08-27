const urls = require("../../constants/urls");
const keys = require("../../constants/keys");
const request = require("request");

module.exports.getWeather = (lat, long, callback) => {
  request(
    urls.WEATHER_APP +
      "?access_key=" +
      keys.WEATHER_APP_ACCESS_KEY +
      "&query=" +
      lat +
      "," +
      long,
    {
      json: true,
    },
    (error, response) => {
      if (error) {
        callback(error, undefined);
      } else {
        const data = response.body;

        callback(undefined, {
          location: data.location.country + ". " + data.location.region,
          weather: data.current.weather_descriptions[0],
          temperature: data.current.temperature + "ºC",
          rain: data.current.precip + "%",
        });
      }
    }
  );
};