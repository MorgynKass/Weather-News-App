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

    let days = jsObject.days;
    console.log(days);

    // Creating a for loop that will loop through each array and its items.
    for (let i = 0; i < days.length; i++) {
      // console.log(days[i])

      let day = document.createElement("div");
      day.className = "day";
      let date = document.createElement("h2");
      date.className = "date";
      let temp = document.createElement("h1");
      temp.className = "temp";
      let img = document.createElement("img");
      img.className = "day-img";
      let conditions = document.createElement("h2");
      conditions.className = "conditions";
      let rain = document.createElement("h2");
      rain.className = "rain";
      let wind = document.createElement("h2");
      wind.className = "wind";

      date.textContent = days[i].datetime;
      conditions.textContent = days[i].conditions;

      let temps = days[i].temp;
      let tempature = `${temps}°F`;
      temp.textContent = tempature;

      let precip = days[i].precipprob;
      let precipChance = `Rain: ${precip}%`;
      rain.textContent = precipChance;

      let winds = days[i].windspeed;
      let windSpeed = `Wind Speed: ${winds}mph`;
      wind.textContent = windSpeed;

      switch (days[i].conditions) {
        case "Clear":
          img.src = "images/1530392_weather_sun_sunny_temperature_icon.png";
          break;
        case "Partially cloudy":
          img.src = "images/1530391_weather_clouds_sun_sunny_icon.png";
          break;
        case "Rain, Partially cloudy":
          img.src = "images/1530390_weather_clouds_cloudy_rain_sunny_icon.png";
          break;
        case "Rain":
          img.src = "images/1530364_weather_rain_shower_storm_icon.png";
          break;
        default:
          img.src = "images/1530392_weather_sun_sunny_temperature_icon.png";
      }

      day.appendChild(date);
      day.appendChild(temp);
      day.appendChild(img);
      day.appendChild(conditions);
      day.appendChild(rain);
      day.appendChild(wind);

      document.querySelector(".days").appendChild(day);
    }
  })
  .catch((err) => {
    console.error(err);
  });
