/* eslint-disable no-console */
/* eslint-disable no-undef */
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
async function refreshAPI() {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=New York,USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb",
      { mode: "cors" }
    );
    const geocode = await response.json();
    const geocodeLat = geocode[0].lat;
    const geocodeLon = geocode[0].lon;

    console.log(geocodeLat, geocodeLon);
    
  } catch (err) {
    console.log(err);
  }
}

refreshAPI();

// Current Weather Data
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// currentWeatherAPI = () => {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=1228246814ef93d1b972cc316a42abeb",
//     { mode: "cors" }
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//     })
//     .catch(console.err);
// };

// currentWeatherAPI();
