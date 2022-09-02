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

  // Description string is adjusted to be capitalized
  static capEachWord = (weatherObject) => {
    const description = weatherObject.description.split(" ");
    console.log(description);

    for (let i = 0; i < description.length; i++) {
        description[i] = description[i][0].toUpperCase() + description[i].substr(1);
    }

    let newDescription = description.join(" ");

    return newDescription;
  }

  // Change temperature from Kelvin to Celsius / Fahrenheit
  // Convert to Celsius = K-273.15
  // Convert to Fahrenheit = 1.8(K-273)+32

  static convertCelsius = (weatherObject) => {
    let cTemperature = Math.round(weatherObject.temperature - 273.15);
    let cFeel = Math.round(weatherObject.feel - 273.15);

    let cArray = [cTemperature, cFeel];

    return cArray;
  };

  static convertFahrenheit = (weatherObject) => {
    let fTemperature = Math.round(1.8 * (weatherObject.temperature - 273) + 32);
    let fFeel = Math.round(1.8 * (weatherObject.feel - 273) + 32);

    let fArray = [fTemperature, fFeel];

    return fArray;
  };

  // Event - Toggle between both

  // Wind speed defined as mph or kph?
static convertMPH = (weatherObject) => {
    let mph = Math.round(2.24 * (weatherObject.wind));

    return mph;
}

  static appendWeatherInfo = (weatherObject) => {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    let fahrenheit = this.convertFahrenheit(weatherObject)[0];
    let fahrenheitFeel = this.convertFahrenheit(weatherObject)[1];
    let windSpeedConverted = this.convertMPH(weatherObject);
    let description = this.capEachWord(weatherObject);

    // Define information in weather card
    weatherCard.innerHTML = `
    <p>Location: ${weatherObject.location}</p>
    <p>Description: ${description}</p>
    <p>Temperature: ${fahrenheit}°F</p>
    <p>Feels Like: ${fahrenheitFeel}°F</p>
    <p>Humidity: ${weatherObject.humidity}%</p>
    <p>Wind Speed: ${windSpeedConverted} MPH</p>
    `;

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.appendChild(weatherCard);
  };
}
