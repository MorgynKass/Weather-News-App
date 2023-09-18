//Fetching info from a weather site that gives me diffrent information for the next few days. This is the website : https://www.visualcrossing.com/weather-data.
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/preston%2C%20ID?unitGroup=us&key=CXPWCPXES2QBV869LLH3QN5FA&contentType=json",
  {
    method: "GET",
    headers: {},
  }
)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    //displays conditions
    let currentWeather = jsObject.currentConditions;
    console.log(currentWeather);

    //displays date and time
    let currentDate = new Date().toDateString();
    let currentTime = new Date().toLocaleTimeString();
    let timeDate = `${currentDate}, ${currentTime}`;
    document.querySelector(".date-time").textContent = timeDate;

    //displays temp
    let currentTemp = currentWeather.temp;
    document.querySelector(".temp-conditions").textContent = currentTemp;

    //determins what the img for the current conditions will be
    switch (currentWeather.conditions) {
      case "Clear":
        document.querySelector(".weather-img").src =
          "images/1530392_weather_sun_sunny_temperature_icon.png";
        break;
      case "Partially cloudy":
        document.querySelector(".weather-img").src =
          "images/1530391_weather_clouds_sun_sunny_icon.png";
        break;
      case "Rain, Partially cloudy":
        document.querySelector(".weather-img").src =
          "images/1530390_weather_clouds_cloudy_rain_sunny_icon.png";
        break;
      case "Rain":
        document.querySelector(".weather-img").src =
          "images/1530364_weather_rain_shower_storm_icon.png";
        break;
      default:
        document.querySelector(".weather-img").src =
          "images/1530392_weather_sun_sunny_temperature_icon.png";
    }

    //displays "feels like temp"
    let feel = currentWeather.feelslike;
    let feelsLike = `${feel}°F`;
    document.querySelector(".feel").textContent = feelsLike;

    //displays the current conditons
    document.querySelector(".conditions").textContent =
      currentWeather.conditions;

    //displays dew point
    let dew = currentWeather.dew;
    let dewPoint = `${dew}°F`;
    document.querySelector(".dew").textContent = dewPoint;

    //displays humidity
    let humid = currentWeather.humidity;
    let humidity = `${humid}%`;
    document.querySelector(".humid").textContent = humidity;

    //displays wind speed
    let wind = currentWeather.windspeed;
    let windSpeed = `${wind}mph`;
    document.querySelector(".wind").textContent = windSpeed;

    //displays precipitation
    let prec = currentWeather.precip;
    let precipitation = `${prec}"`;
    document.querySelector(".prec").textContent = precipitation;

    //displays sunrise
    let rise = currentWeather.sunrise;
    let sunrise = `${rise} AM`;
    document.querySelector(".rise").textContent = sunrise;

    //displays sunset
    let set = currentWeather.sunset;
    let sunset = `${set} PM`;
    document.querySelector(".set").textContent = sunset;

    //displays UV index
    let index = currentWeather.uvindex;
    let UV = `${index}`;
    document.querySelector(".index").textContent = UV;
})
.catch((err) => {
    console.error(err);
});
