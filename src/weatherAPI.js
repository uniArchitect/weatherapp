/* eslint-disable import/no-cycle */
import WeatherObjectMetric from './WeatherObjectMetric';
import WeatherObjectImperial from './WeatherObjectImperial';

// eslint-disable-next-line consistent-return
export default async function currentWeatherFahrenheit(location) {
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
    const weatherLocation = weatherAPI.name;
    const weatherDescription = weatherAPI.weather[0].description;
    const weatherTemperatureFahrenheit = weatherAPI.main.temp;
    const weatherFeelFahrenheit = weatherAPI.main.feels_like;
    const weatherHumidity = weatherAPI.main.humidity;
    const weatherWindSpeed = weatherAPI.wind.speed;
    // weatherAPI.clouds
    // console.log(weatherAPI);

    const cityWeather = new WeatherObjectImperial(
      weatherLocation,
      weatherDescription,
      weatherTemperatureFahrenheit,
      weatherFeelFahrenheit,
      weatherHumidity,
      weatherWindSpeed,
    );

    WeatherObject.appendWeatherInfo(cityWeather);

    return cityWeather;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

async function currentWeatherCelsius(location) {
  try {
    const geocodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );
    const geocode = await geocodeResponse.json();
    const geocodeLat = geocode[0].lat;
    const geocodeLon = geocode[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geocodeLat}&lon=${geocodeLon}&units=metric&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: 'cors' },
    );
    const weatherAPI = await weatherResponse.json();
    const weatherLocation = weatherAPI.name;
    const weatherDescription = weatherAPI.weather[0].description;
    const weatherTemperatureCelsius = weatherAPI.main.temp;
    const weatherFeelCelsius = weatherAPI.main.feels_like;
    const weatherHumidity = weatherAPI.main.humidity;
    const weatherWindSpeed = weatherAPI.wind.speed;
    // weatherAPI.clouds
    // console.log(weatherAPI);

    const cityWeather = new WeatherObjectMetric(
      weatherLocation,
      weatherDescription,
      weatherTemperatureCelsius,
      weatherFeelCelsius,
      weatherHumidity,
      weatherWindSpeed,
    );

    WeatherObject.appendWeatherInfo(cityWeather);

    return cityWeather;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export { currentWeatherCelsius };
