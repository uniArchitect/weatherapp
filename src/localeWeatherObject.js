/* Importing the WEATHER_CARD_CONTAIN_DIV from the index.js file. */
// eslint-disable-next-line import/no-cycle
import { WEATHER_CARD_CONTAIN_DIV } from './index';

export default class WeatherObject {
  constructor(
    weatherLocation,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed,
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
    const description = weatherObject.description.split(' ');
    // console.log(description);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < description.length; i++) {
      description[i] = description[i][0].toUpperCase() + description[i].substr(1);
    }

    const newDescription = description.join(' ');

    return newDescription;
  };

  // Change temperature from Kelvin to Celsius / Fahrenheit
  // Convert to Celsius = K-273.15
  // Convert to Fahrenheit = 1.8(K-273)+32

  static convertCelsius = (weatherObject) => {
    const cTemperature = `${Math.round(weatherObject.temperature - 273.15)}°C`;
    const cFeel = `${Math.round(weatherObject.feel - 273.15)}°C`;

    const cArray = [cTemperature, cFeel];

    return cArray;
  };

  static convertFahrenheit = (weatherObject) => {
    const fTemperature = `${Math.round(
      1.8 * (weatherObject.temperature - 273) + 32,
    )}°F`;
    const fFeel = `${Math.round(1.8 * (weatherObject.feel - 273) + 32)}°F`;

    const fArray = [fTemperature, fFeel];

    return fArray;
  };

  static switchUnit = () => {
    // eslint-disable-next-line no-use-before-define
    const tempUnit = !tempUnit;
  };

  // Wind speed defined as mph or kph?
  static convertMPH = (weatherObject) => {
    const mph = Math.round(2.24 * weatherObject.wind);

    return mph;
  };

  static appendWeatherInfo = (cityWeather) => {
    const weatherCard = document.createElement('div');
    const weatherLocation = `${cityWeather.location}`.replaceAll(' ', '-');
    weatherCard.classList.add(`weather-card-${weatherLocation}`);
    weatherCard.setAttribute('id', 'weather-card');

    const fahrenheit = this.convertFahrenheit(cityWeather)[0];
    const fahrenheitFeel = this.convertFahrenheit(cityWeather)[1];
    const windSpeedConverted = this.convertMPH(cityWeather);
    const description = this.capEachWord(cityWeather);

    // eslint-disable-next-line prefer-const
    let temperature = fahrenheit;
    // eslint-disable-next-line prefer-const
    let feelsLike = fahrenheitFeel;

    // Define information in weather card
    weatherCard.innerHTML = `
    <p>Location: ${cityWeather.location}</p>
    <p>Description: ${description}</p>
    <p><a class="temp-toggle" href="#">Temperature:</a> ${temperature}</p>
    <p>Feels Like: ${feelsLike}</p>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${windSpeedConverted} MPH</p>
    `;

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.prepend(weatherCard);
  };

  // Event - Toggle between both
  static changeTemperature = (cityWeather) => {
    const tempUnit = false;
    const currentSystem = tempUnit ? 'F' : 'C';
    console.log(currentSystem);

    // function to take in property of tenary operator outcome 'fahrenheit' or 'celsius' arguments
    this.toggleTemperature(currentSystem, cityWeather);

    this.switchUnit();
  };

  // Change weather card function
  static toggleTemperature = (currentSystem, cityWeather) => {
    const weatherCard = document.querySelector(`weather-card-${cityWeather.location}`);

    const fahrenheit = this.convertFahrenheit(cityWeather)[0];
    const fahrenheitFeel = this.convertFahrenheit(cityWeather)[1];
    const celsius = this.convertCelsius(cityWeather)[0];
    const celsiusFeel = this.convertCelsius(cityWeather)[1];

    if (currentSystem === 'F') {
      // eslint-disable-next-line prefer-const
      let temperature = fahrenheit;
      // eslint-disable-next-line prefer-const
      let feelsLike = fahrenheitFeel;

      // Define information in weather card
      weatherCard.innerHTML = `
    <p>Location: ${cityWeather.location}</p>
    <p>Description: ${description}</p>
    <p><a class="temp-toggle" href="#">Temperature:</a> ${temperature}</p>
    <p>Feels Like: ${feelsLike}</p>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${windSpeedConverted} MPH</p>
    `;
    } else if (currentSystem === 'C') {
      // eslint-disable-next-line prefer-const
      let temperature = celsius;
      // eslint-disable-next-line prefer-const
      let feelsLike = celsiusFeel;

      // Define information in weather card
      weatherCard.innerHTML = `
    <p>Location: ${cityWeather.location}</p>
    <p>Description: ${description}</p>
    <p><a class="temp-toggle" href="#">Temperature:</a> ${temperature}</p>
    <p>Feels Like: ${feelsLike}</p>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${windSpeedConverted} MPH</p>
    `;
    }
  };
}
