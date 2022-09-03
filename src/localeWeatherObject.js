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
    // console.log(description);

    for (let i = 0; i < description.length; i++) {
      description[i] =
        description[i][0].toUpperCase() + description[i].substr(1);
    }

    let newDescription = description.join(" ");

    return newDescription;
  };

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
  static changeTemperature = (cityWeather) => {
    let tempUnit = false;
    const currentSystem = tempUnit ? F : C;

    // function to take in property of tenary operator outcome 'fahrenheit' or 'celsius' arguments
    this.toggleTemperature(currentSystem, cityWeather);

    this.switchUnit();
  };

  // Change weather card function
  static toggleTemperature = (currentSystem, cityWeather) => {
    let fahrenheit = this.convertFahrenheit(cityWeather)[0];
    let fahrenheitFeel = this.convertFahrenheit(cityWeather)[1];
    let celsius = this.convertCelsius(cityWeather)[0];
    let celsiusFeel = this.convertCelsius(cityWeather)[1];
    let windSpeedConverted = this.convertMPH(cityWeather);
    let description = this.capEachWord(cityWeather);

    // function to take in property of tenary operator outcome 'fahrenheit' or 'celsius' arguments
    if (currentSystem == F) {
      weatherCard.innerHTML = `
        <p>Location: ${cityWeather.location}</p>
        <p>Description: ${description}</p>
        <p><a class="temp-toggle" href="#">Temperature:</a> ${fahrenheit}°F</p>
        <p>Feels Like: ${fahrenheitFeel}°F</p>
        <p>Humidity: ${cityWeather.humidity}%</p>
        <p>Wind Speed: ${windSpeedConverted} MPH</p>
        `;
    } else if (currentSystem == C) {
      weatherCard.innerHTML = `
        <p>Location: ${cityWeather.location}</p>
        <p>Description: ${description}</p>
        <p><a class="temp-toggle" href="#">Temperature:</a> ${celsius}°F</p>
        <p>Feels Like: ${celsiusFeel}°C</p>
        <p>Humidity: ${cityWeather.humidity}%</p>
        <p>Wind Speed: ${windSpeedConverted} MPH</p>
        `;
    }
  };

  static switchUnit = () => {
    let tempUnit = !tempUnit;
  };

  // Wind speed defined as mph or kph?
  static convertMPH = (weatherObject) => {
    let mph = Math.round(2.24 * weatherObject.wind);

    return mph;
  };

  static appendWeatherInfo = (cityWeather) => {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    let fahrenheit = this.convertFahrenheit(cityWeather)[0];
    let fahrenheitFeel = this.convertFahrenheit(cityWeather)[1];
    let windSpeedConverted = this.convertMPH(cityWeather);
    let description = this.capEachWord(cityWeather);

    // Define information in weather card
    weatherCard.innerHTML = `
    <p>Location: ${cityWeather.location}</p>
    <p>Description: ${description}</p>
    <p><a class="temp-toggle" href="#">Temperature:</a> ${fahrenheit}°F</p>
    <p>Feels Like: ${fahrenheitFeel}°F</p>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${windSpeedConverted} MPH</p>
    `;

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.prepend(weatherCard);
  };
}
