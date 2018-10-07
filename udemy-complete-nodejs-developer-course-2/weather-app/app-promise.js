require("dotenv").config();
const yargs = require("yargs");
const axios = require("axios");

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

axios
  .get(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${
      process.env.MQ_API_KEY
    }&location=${encodeURIComponent(argv.address)}`
  )
  .then(response => {
    if (response.data.results.length === 0) {
      throw new Error("Unable to find that address.");
    }

    const {
      latLng: { lat, lng },
      street,
      adminArea5,
      adminArea3,
      postalCode,
      adminArea1
    } = response.data.results[0].locations[0];

    console.log(
      `${street} ${adminArea5} ${adminArea3} ${postalCode} ${adminArea1}`
        .split("  ")
        .join(" ")
        .trim()
    );

    return axios.get(
      `https://api.darksky.net/forecast/${
        process.env.FORECAST_API_KEY
      }/${lat},${lng}`
    );
  })
  .then(response => {
    const { temperature, apparentTemperature } = response.data.currently;

    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}`
    );
  })
  .catch(error => {
    console.error(error.message);
  });
