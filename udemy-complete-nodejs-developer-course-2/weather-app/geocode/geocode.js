const request = require("request");

module.exports = {
  geocodeAddress: (address, callback) => {
    request(
      {
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
          process.env.MQ_API_KEY
        }&location=${encodeURIComponent(address)}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          callback(error);
        } else if (body.info.statuscode === 0) {
          const {
            latLng: { lat, lng },
            street,
            adminArea5,
            adminArea3,
            postalCode,
            adminArea1
          } = body.results[0].locations[0];
          callback(undefined, {
            address: `${street} ${adminArea5} ${adminArea3} ${postalCode} ${adminArea1}`
              .split("  ")
              .join(" ")
              .trim(),
            latitude: lat,
            longitude: lng
          });
        }
      }
    );
  }
};

// 2cac9225d21993db2462c6f7e184854c
