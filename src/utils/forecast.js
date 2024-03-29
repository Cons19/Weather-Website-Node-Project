const request = require("request");



const forecast = (latitude, longitude, callback) => {

    const url = "https://api.darksky.net/forecast/b2f4623add06500cd0bc531e74d5b9fd/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "?units=si";

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined);
        } else if(body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. The highest temperature today is ${body.daily.data[0].temperatureHigh}. The lowest temperature today is ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;