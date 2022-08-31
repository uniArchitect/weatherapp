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
    let cTemperature = weatherObject.temperature - 273.15;
    let cFeel = weatherObject.feel - 273.15;

    let cArray = [cTemperature, cFeel];

    return cArray;
  };

  static convertFahrenheit = (weatherObject) => {
    let fTemperature = 1.8 * (weatherObject.temperature - 273) + 32;
    let fFeel = 1.8 * (weatherObject.feel - 273) + 32;

    let fArray = [fTemperature, fFeel];

    return fArray;
  };

  // Event - Toggle between both

  // Wind speed defined as mph or kph?
static convertMPH = (weatherObject) => {
    let mph = 2.24 * (weatherObject.wind);

    return mph;
}

  // Description string is adjusted to be capitalized

  static appendWeatherInfo = (weatherObject) => {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    let fahrenheit = this.convertFahrenheit(weatherObject)[0];
    let fahrenheitFeel = this.convertFahrenheit(weatherObject)[1];
    let windSpeedConverted = this.convertMPH(weatherObject);

    // Define information in weather card
    weatherCard.innerHTML = `
    <p>Location: ${weatherObject.location}</p>
    <p>Description: ${weatherObject.description}</p>
    <p>Temperature: ${fahrenheit}</p>
    <p>Feels like: ${fahrenheitFeel}</p>
    <p>Humidity: ${weatherObject.humidity}%</p>
    <p>Wind speed: ${windSpeedConverted}</p>
    `;

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.appendChild(weatherCard);
  };
}
