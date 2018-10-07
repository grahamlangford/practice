const request = require("request");

module.exports = {
  getWeather: (latitude, longitude, callback) => {
    request(
      {
        url: `https://api.darksky.net/forecast/${
          process.env.FORECAST_API_KEY
        }/${latitude},${longitude}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          callback("Unable to connect to Forecast.io server.");
        } else if (!error && response.statusCode === 200) {
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
        } else {
          callback("Unable to fetch weather");
        }
      }
    );
  }
};
