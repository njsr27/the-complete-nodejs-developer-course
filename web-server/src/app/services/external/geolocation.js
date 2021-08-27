const urls = require("../../constants/urls");
const keys = require("../../constants/keys");
const request = require("request");

module.exports.getLatAndLong = (address, callback) => {
  request(
    urls.GEOLOCATION_APP +
      "/mapbox.places/" +
      encodeURIComponent(address) +
      ".json?access_token=" +
      keys.GEOLOCATION_ACCESS_TOKEN +
      "&limit=1",
    { json: true },
    (error, response) => {
      if (error) {
        callback(error, undefined);
      } else if (response.body.features.length === 0) {
        callback("Data for that location was not found.", undefined);
      } else {
        const geolocation = response.body.features[0];
        const lat = geolocation.center[1];
        const long = geolocation.center[0];

        callback(undefined, {
          location: response.body.features[0].place_name,
          lat: lat,
          long: long,
        });
      }
    }
  );
};