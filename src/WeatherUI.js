// eslint-disable-next-line import/no-cycle
import { WEATHER_CARD_CONTAIN_DIV } from './index';

export default class WeatherUI {
  // Description string is adjusted to be capitalized
  static capEachWord = (cityWeather) => {
    const description = cityWeather.description.split(' ');
    // console.log(description);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < description.length; i++) {
      description[i] = description[i][0].toUpperCase() + description[i].substr(1);
    }

    const newDescription = description.join(' ');

    return newDescription;
  };

  // Wind speed defined as mph or kph?
  static convertMPH = (cityWeather) => {
    const mph = Math.round(2.24 * cityWeather.wind);

    return mph;
  };

  static appendWeatherInfo = (cityWeather) => {
    const weatherCard = document.createElement('div');
    const weatherLocation = `${cityWeather.location}`.replaceAll(' ', '-');
    weatherCard.classList.add(`weather-card-${weatherLocation}`);
    weatherCard.setAttribute('id', 'weather-card');

    // const windSpeedConverted = this.convertMPH(cityWeather);
    const description = this.capEachWord(cityWeather);

    // Define information in weather card
    weatherCard.innerHTML = `
    <div class='location'>Location: <span class='location-name'>${cityWeather.location}</span></div>
    <p>Description: ${description}</p>
    <div class='temperature-${weatherLocation}' id='temperature'><a class="temp-toggle" href="#">Temperature:</a> <span>${cityWeather.temperature}</span></div>
    <div class='feels-like-${weatherLocation}' id='feels-like'>Feels Like: <span>${cityWeather.feel}</span></div>
    <p>Humidity: ${cityWeather.humidity}%</p>
    <p>Wind Speed: ${cityWeather.wind}</p>
    `;

    // Change background image based on temperature ranges (<=32, snowy, 33=<, sunny)

    WEATHER_CARD_CONTAIN_DIV.prepend(weatherCard);
  };
}