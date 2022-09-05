/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import './styles.css';
import { currentWeatherImperial, currentWeatherMetric, weatherImperialObject, captureAPI } from './weatherAPI';
import WeatherUI from './WeatherUI';

/* This is creating the elements that will be used in the app. */
const BODY = document.querySelector('body');
const CONTAINER_DIV = document.createElement('div');
const USER_INPUT_CONTAIN_DIV = document.createElement('div');
const WEATHER_CARD_CONTAIN_DIV = document.createElement('div');
const LOCATION_INPUT = document.createElement('input');
const LOCATION_UPDATE_BTN = document.createElement('button');

// SET UP - WEB APP ELEMENTS
CONTAINER_DIV.classList.add('main-container');
USER_INPUT_CONTAIN_DIV.classList.add('input-container');
LOCATION_INPUT.classList.add('location-input');
LOCATION_UPDATE_BTN.classList.add('location-submit');
LOCATION_UPDATE_BTN.innerHTML = 'Update';

WEATHER_CARD_CONTAIN_DIV.classList.add('weather-container');

BODY.appendChild(CONTAINER_DIV);
CONTAINER_DIV.append(USER_INPUT_CONTAIN_DIV, WEATHER_CARD_CONTAIN_DIV);
USER_INPUT_CONTAIN_DIV.append(LOCATION_INPUT, LOCATION_UPDATE_BTN);

// Event - Update location
LOCATION_UPDATE_BTN.addEventListener('click', () => {
  // Function - Modify location string to be consistent
  const location = LOCATION_INPUT.value;

  // Define - City Weather API
  const cityWeatherImperialAPI = captureAPI(currentWeatherImperial(location));
  console.log(cityWeatherImperialAPI);

  // Event - Append information to weather container
  weatherImperialObject(cityWeatherImperialAPI)
  console.log(cityWeatherImperialAPI);

  // Event - Clear input field after click
  document.querySelector('.location-input').value = '';

  return cityWeatherImperialAPI;
});

// Event - Toggle Fahrenheit / Celsius
WEATHER_CARD_CONTAIN_DIV.addEventListener('click', (e) => {
  console.log(e.target);

  WeatherUI.changeWeatherUnit(e.target);
});

// eslint-disable-next-line import/prefer-default-export
export { WEATHER_CARD_CONTAIN_DIV };
