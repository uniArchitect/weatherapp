/* eslint-disable import/no-cycle */
import WeatherObjectMetric from './WeatherObjectMetric';
import WeatherObjectImperial from './WeatherObjectImperial';
import WeatherUI from './WeatherUI';

async function fetchGeocode(location) {
  try {
    const geocodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );
    const geocode = await geocodeResponse.json();
    const geocodeLat = geocode[0].lat;
    const geocodeLon = geocode[0].lon;

    return { 
      'latitude': geocodeLat, 
      'longitude': geocodeLon 
    };
  } catch (err) {
    console.log(err);
  }
}

async function fetchWeather(latitude, longitude) {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );

    const weatherImperial = await weatherResponse.json();

    return weatherImperial;
  } catch (err) {
    console.log(err);
  }
}

function defineWeatherInfo(weatherAPI) {
  
  const weatherLocation = weatherAPI.name;
  const weatherDescription = weatherAPI.weather[0].description;
  const weatherTemperature = weatherAPI.main.temp;
  const weatherFeel = weatherAPI.main.feels_like;
  const weatherHumidity = weatherAPI.main.humidity;
  const weatherWindSpeed = weatherAPI.wind.speed;

  const cityWeather = new WeatherObjectImperial(
    weatherLocation,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed,
  );

  return cityWeather;

  // If statement to choose Fahrenheit or Celsius
  // if (variable == 'F') {
  //   const cityWeather = new WeatherObjectImperial(
  //     weatherLocation,
  //     weatherDescription,
  //     weatherTemperature,
  //     weatherFeelFahrenheit,
  //     weatherHumidity,
  //     weatherWindSpeedMPH,
  //   );

  //   return cityWeather;
  // } else if (unit == 'C') {
  //   const cityWeather = new WeatherObjectMetric(
  //     weatherLocation,
  //     weatherDescription,
  //     weatherTemperature,
  //     weatherFeelFahrenheit,
  //     weatherHumidity,
  //     weatherWindSpeedMPH,
  //   );

  //   return cityWeather;    
  // }
}

// eslint-disable-next-line consistent-return
async function currentWeatherImperial(location) {
  try {

    // Defining variable with await still calls the function
    const geocode = await fetchGeocode(location);
    // console.log(geocode);

    const weatherAPI = await fetchWeather(geocode.latitude, geocode.longitude);
    console.log(weatherAPI);
    
    // define weatherAPI;
    const cityWeather = defineWeatherInfo(weatherAPI);

    WeatherUI.appendWeatherInfo(cityWeather);

    return cityWeather;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

// eslint-disable-next-line consistent-return
async function currentWeatherMetric(location) {
  try {

    // Defining variable with await still calls the function
    const geocode = await fetchGeocode(location);
    // console.log(geocode);

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geocode.latitude}&lon=${geocode.longitude}&units=metric&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );
    const weatherAPI = await weatherResponse.json();
    
    // define weatherAPI;
    const cityWeather = defineWeatherInfo(weatherAPI);

    WeatherUI.appendWeatherInfo(cityWeather);

    return cityWeather;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export { currentWeatherImperial, currentWeatherMetric };
