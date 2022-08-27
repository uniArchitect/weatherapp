/* eslint-disable no-console */
/* eslint-disable no-undef */
// GLOBAL VARIABLE
const BODY = document.querySelector('body');
const CONTAINER = document.createElement('div');
const LOCATION_INPUT = document.createElement('input');
const LOCATION_UPDATE_BTN = document.createElement('button');

LOCATION_UPDATE_BTN.innerHTML = 'Update';

BODY.appendChild(CONTAINER);
CONTAINER.appendChild(LOCATION_INPUT);
CONTAINER.appendChild(LOCATION_UPDATE_BTN);
// Geocoding API
// Promise Version
// refreshAPI = () => {
//   fetch(
//     "http://api.openweathermap.org/geo/1.0/direct?q=New York,USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb",
//     { mode: "cors" }
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       console.log(response[0].lat);
//       console.log(response[0].lon);
//     })
//     .catch(console.err);
// };

// Async Version
async function currentWeather(location) {
  try {
    const geocodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );
    const geocode = await geocodeResponse.json();
    const geocodeLat = geocode[0].lat;
    const geocodeLon = geocode[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geocodeLat}&lon=${geocodeLon}&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );
    const weatherAPI = await weatherResponse.json();
    console.log(weatherAPI);
  } catch (err) {
    console.log(err);
  }
}

LOCATION_UPDATE_BTN.addEventListener('click', () => {
  let location = LOCATION_INPUT.value;
  currentWeather(location);
})
