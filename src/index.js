/* eslint-disable no-console */
/* eslint-disable no-undef */
import "./styles.css";
import currentWeather from "./weatherAPI";

// GLOBAL VARIABLE
const BODY = document.querySelector("body");
const CONTAINER_DIV = document.createElement("div");
const USER_INPUT_CONTAIN_DIV = document.createElement("div");
const LOCATION_INPUT = document.createElement("input");
const LOCATION_UPDATE_BTN = document.createElement("button");

CONTAINER_DIV.classList.add("main-container");
USER_INPUT_CONTAIN_DIV.classList.add("input-container");
LOCATION_INPUT.classList.add("location-input");
LOCATION_UPDATE_BTN.classList.add("location-submit");
LOCATION_UPDATE_BTN.innerHTML = "Update";

BODY.appendChild(CONTAINER_DIV);
CONTAINER_DIV.appendChild(USER_INPUT_CONTAIN_DIV);
USER_INPUT_CONTAIN_DIV.appendChild(LOCATION_INPUT);
USER_INPUT_CONTAIN_DIV.appendChild(LOCATION_UPDATE_BTN);

LOCATION_UPDATE_BTN.addEventListener("click", () => {
  let location = LOCATION_INPUT.value;
  currentWeather(location);
});
