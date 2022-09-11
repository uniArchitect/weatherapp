// eslint-disable-next-line import/no-cycle
import { WEATHER_CARD_CONTAIN_DIV } from "./index";
import { currentWeather } from "./weatherAPI";

export default class WeatherUI {
  // Description string is adjusted to be capitalized
  static capEachWord = (cityWeather) => {
    const description = cityWeather.description.split(" ");
    // console.log(description);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < description.length; i++) {
      description[i] =
        description[i][0].toUpperCase() + description[i].substr(1);
    }

    const newDescription = description.join(" ");

    return newDescription;
  };

  static appendWeatherInfo = (cityWeather) => {
    // Set weather div element and class and id
    const weatherCard = document.createElement("div");
    const weatherLocation = `${cityWeather.location}`.replaceAll(" ", "-");
    weatherCard.classList.add(`weather-card-${weatherLocation}`);
    weatherCard.setAttribute("id", "weather-card");

    // const windSpeedConverted = this.convertMPH(cityWeather);
    const description = this.capEachWord(cityWeather);

    // Weather icon URL = http://openweathermap.org/img/wn/${cityWeather.icon}@2x.png
    console.log(cityWeather.icon)
    // Define information in weather card
    weatherCard.innerHTML = `
    <div class='location'><span class='location-name'>${cityWeather.location}</span></div>
    <img src="http://openweathermap.org/img/wn/${cityWeather.icon}@2x.png" class='weather-icon'></img>
    <p class='description'>${description}</p>
    <div class='temperature-${weatherLocation}' id='temperature'><span>${cityWeather.temperature}</span></div>
    <div class='feels-like-${weatherLocation}' id='feels-like'>Feels Like: <span>${cityWeather.feel}</span></div>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${cityWeather.wind}</p>
    `;

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.prepend(weatherCard);
  };

  static changeWeatherUnit = (target) => {
    console.log(target.nextElementSibling);

    const weatherCard = `${target.classList}`;
    const locationName = weatherCard.replaceAll("-", " ");
    // Gives us the city name for API (e.g. New York)

    // If nextElementSibling includes F or C then execute Metric / Imperial weather functions
    if (target.nextElementSibling.innerText.includes("°F") == true) {
      // Function - Replace Imperial units with Metric
      return currentWeather(locationName, currentUnit);
    } else {
      // Function - Replace Metric units with Imperial
      return currentWeather(locationName, currentUnit);
    }
  };
}
