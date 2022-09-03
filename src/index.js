/* eslint-disable no-console */
/* eslint-disable no-undef */
import "./styles.css";
import currentWeather from "./weatherAPI";
import weatherObject from "./localeWeatherObject";

// GLOBAL VARIABLE
const BODY = document.querySelector("body");
const CONTAINER_DIV = document.createElement("div");
const USER_INPUT_CONTAIN_DIV = document.createElement("div");
const WEATHER_CARD_CONTAIN_DIV = document.createElement("div");
const LOCATION_INPUT = document.createElement("input");
const LOCATION_UPDATE_BTN = document.createElement("button");

// SET UP - WEB APP ELEMENTS
CONTAINER_DIV.classList.add("main-container");
USER_INPUT_CONTAIN_DIV.classList.add("input-container");
LOCATION_INPUT.classList.add("location-input");
LOCATION_UPDATE_BTN.classList.add("location-submit");
LOCATION_UPDATE_BTN.innerHTML = "Update";

WEATHER_CARD_CONTAIN_DIV.classList.add("weather-container");

BODY.appendChild(CONTAINER_DIV);
CONTAINER_DIV.append(USER_INPUT_CONTAIN_DIV, WEATHER_CARD_CONTAIN_DIV);
USER_INPUT_CONTAIN_DIV.append(LOCATION_INPUT, LOCATION_UPDATE_BTN);

// Event - Update location
LOCATION_UPDATE_BTN.addEventListener("click", () => {
  // Function - Modify location string to be consistent
  let location = LOCATION_INPUT.value;

  // Event - Append information to weather container
  currentWeather(location);

  // Event - Clear input field after click
  document.querySelector(".location-input").value = "";

});

// Event - Toggle Fahrenheit / Celsius

// WEATHER_CARD_CONTAIN_DIV.addEventListener("click", () => {
//   weatherObject.changeTemperature();
// });

export { WEATHER_CARD_CONTAIN_DIV };
