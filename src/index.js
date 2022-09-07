/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import './styles.css';
import { currentWeather } from './weatherAPI';
import WeatherUI from './WeatherUI';

/* This is creating the elements that will be used in the app. */
const BODY = document.querySelector('body');
const CONTAINER_DIV = document.createElement('div');
const USER_INPUT_CONTAIN_DIV = document.createElement('div');
const WEATHER_CARD_CONTAIN_DIV = document.createElement('div');
const LOCATION_INPUT = document.createElement('input');
const LOCATION_UPDATE_BTN = document.createElement('button');
const UNIT_TOGGLE_BUTTON = document.createElement('button');

// SET UP - WEB APP ELEMENTS
CONTAINER_DIV.classList.add('main-container');
USER_INPUT_CONTAIN_DIV.classList.add('input-container');
LOCATION_INPUT.classList.add('location-input');
LOCATION_UPDATE_BTN.classList.add('location-submit');
LOCATION_UPDATE_BTN.innerHTML = 'Search';
UNIT_TOGGLE_BUTTON.classList.add('unit-button');
UNIT_TOGGLE_BUTTON.innerHTML = '°F';

WEATHER_CARD_CONTAIN_DIV.classList.add('weather-container');

BODY.appendChild(CONTAINER_DIV);
CONTAINER_DIV.append(USER_INPUT_CONTAIN_DIV, WEATHER_CARD_CONTAIN_DIV);
USER_INPUT_CONTAIN_DIV.append(LOCATION_INPUT, LOCATION_UPDATE_BTN, UNIT_TOGGLE_BUTTON);

// Event - Update location
LOCATION_UPDATE_BTN.addEventListener('click', () => {
  // Function - Modify location string to be consistent
  const location = LOCATION_INPUT.value;
  const currentUnit = UNIT_TOGGLE_BUTTON.innerHTML;
  console.log(currentUnit);

  // Define - City Weather API, return within another async function
  currentWeather(location, currentUnit);

  // Event - Clear input field after click
  document.querySelector('.location-input').value = '';
});

// Event - Toggle Fahrenheit / Celsius
WEATHER_CARD_CONTAIN_DIV.addEventListener('click', (e) => {
  console.log(e.target);

  WeatherUI.changeWeatherUnit(e.target);
});

// Event: Change Has Read Status
UNIT_TOGGLE_BUTTON.addEventListener('click', (e) => {
  let currentUnit = e.target;

  // Specify if statement to target elements with class 'book-status'
  if(currentUnit.textContent.includes('°F')) {
    currentUnit.innerHTML = '°C';
  } else if(currentUnit.textContent.includes('°C')){
    currentUnit.textContent = '°F';
  }
})

// eslint-disable-next-line import/prefer-default-export
export { WEATHER_CARD_CONTAIN_DIV };
