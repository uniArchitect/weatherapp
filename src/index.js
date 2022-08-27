/* eslint-disable no-console */
/* eslint-disable no-undef */
// Geocoding API
// Promise Version
refreshAPI = () => {
  fetch(
    'http://api.openweathermap.org/geo/1.0/direct?q=New York,USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb',
    { mode: 'cors' },
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(response[0].lat);
      console.log(response[0].lon);
    })
    .catch(console.err);
};

refreshAPI();
