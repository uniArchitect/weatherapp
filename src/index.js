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
const INPUT_DIV = document.createElement('div');

// SET UP - WEB APP ELEMENTS
CONTAINER_DIV.classList.add('main-container');
USER_INPUT_CONTAIN_DIV.classList.add('input-container');
LOCATION_INPUT.classList.add('location-input');
LOCATION_UPDATE_BTN.classList.add('location-submit');
LOCATION_UPDATE_BTN.innerHTML = `
<svg style="width:20px;height:20px" viewBox="0 0 24 24">
    <path fill="#F9F7F7" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M22,13A3,3 0 0,0 19,10H17.5V9.5A5.5,5.5 0 0,0 12,4C9.5,4 7.37,5.69 6.71,8H6A4,4 0 0,0 2,12A4,4 0 0,0 6,16H9V16.5C9,17 9.06,17.5 9.17,18H6A6,6 0 0,1 0,12C0,8.9 2.34,6.36 5.35,6.04C6.6,3.64 9.11,2 12,2C15.64,2 18.67,4.59 19.36,8.04C21.95,8.22 24,10.36 24,13C24,14.65 23.21,16.1 22,17V16.5C22,15.77 21.88,15.06 21.65,14.4C21.87,14 22,13.5 22,13Z" />
</svg>
`;
UNIT_TOGGLE_BUTTON.classList.add('unit-button');
UNIT_TOGGLE_BUTTON.innerHTML = '°F';
INPUT_DIV.classList.add('location-input-div');

WEATHER_CARD_CONTAIN_DIV.classList.add('weather-container');

BODY.appendChild(CONTAINER_DIV);
CONTAINER_DIV.append(USER_INPUT_CONTAIN_DIV, WEATHER_CARD_CONTAIN_DIV);
INPUT_DIV.append(LOCATION_INPUT, LOCATION_UPDATE_BTN, UNIT_TOGGLE_BUTTON);
USER_INPUT_CONTAIN_DIV.append(INPUT_DIV);

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
// WEATHER_CARD_CONTAIN_DIV.addEventListener('click', (e) => {
//   console.log(e.target);

//   WeatherUI.changeWeatherUnit(e.target);
// });

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
