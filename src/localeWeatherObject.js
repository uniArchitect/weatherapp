import { WEATHER_CARD_CONTAIN_DIV } from "./index";

export default class weatherObject {
  constructor(
    weatherLocation,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed
  ) {
    this.location = weatherLocation;
    this.description = weatherDescription;
    this.temperature = weatherTemperature;
    this.feel = weatherFeel;
    this.humidity = weatherHumidity;
    this.wind = weatherWindSpeed;
  }

  static appendWeatherInfo = (weatherObject) => {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    // Define information in weather card
    weatherCard.innerHTML = `
    <p>Location: ${weatherObject.location}</p>
    <p>Description: ${weatherObject.description}</p>
    <p>Temperature: ${weatherObject.temperature}</p>
    <p>Feels like: ${weatherObject.feel}</p>
    <p>Humidity: ${weatherObject.humidity}</p>
    <p>Wind speed: ${weatherObject.wind}</p>
    `;

    WEATHER_CARD_CONTAIN_DIV.appendChild(weatherCard);
  };
}
