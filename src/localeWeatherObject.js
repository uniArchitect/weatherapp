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
    // Temperature output is Kelvin
    this.temperature = weatherTemperature;
    this.feel = weatherFeel;
    this.humidity = weatherHumidity;
    this.wind = weatherWindSpeed;
  }

  // Change temperature from Kelvin to Celsius / Fahrenheit
  // Convert to Celsius = K-273.15
  // Convert to Fahrenheit = 1.8(K-273)+32

  static convertCelsius = (weatherObject) => {
    let cTemperature = weatherObject.description - 273.15;
    let cFeel = weatherObject.feel - 273.15;
    return cTemperature, cFeel;
  };

  static convertFahrenheit = (weatherObject) => {
    let fTemperature = 1.8(weatherObject.description - 273) + 32;
    let fFeel = 1.8(weatherObject.feel - 273) + 32;
    return fTemperature, fFeel;
  };

  // Event - Toggle between both

  // Humidity display as percentage

  // Wind speed defined as mph or kph?

  // Description string is adjusted to be capitalized

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

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.appendChild(weatherCard);
  };
}
