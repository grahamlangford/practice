require("dotenv").config();
const yargs = require("yargs");

const { geocodeAddress } = require("./geocode/geocode");
const { getWeather } = require("./weather/weather");

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.error(errorMessage);
  } else {
    const { address, latitude, longitude } = results;
    console.log(address);
    getWeather(latitude, longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.error(errorMessage);
      } else {
        const { temperature, apparentTemperature } = weatherResults;
        console.log(
          `It's currently ${temperature}. It feels like ${apparentTemperature}`
        );
      }
    });
  }
});
