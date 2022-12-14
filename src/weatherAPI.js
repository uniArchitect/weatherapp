/* eslint-disable import/no-cycle */
import WeatherObjectImperial from "./WeatherObjectImperial";
import WeatherObjectMetric from "./WeatherObjectMetric";
import WeatherUI from "./WeatherUI";

async function fetchGeocode(location) {
  try {
    const geocodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: "cors" }
    );
    const geocode = await geocodeResponse.json();
    const geocodeLat = geocode[0].lat;
    const geocodeLon = geocode[0].lon;

    return {
      latitude: geocodeLat,
      longitude: geocodeLon,
    };
  } catch (err) {
    console.log(err);
  }
}

async function fetchWeather(latitude, longitude, currentUnit) {
  try {
    if (currentUnit == "°F") {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=1228246814ef93d1b972cc316a42abeb`,
        { mode: "cors" }
      );

      const weatherImperial = await weatherResponse.json();

      return weatherImperial;
    } else if (currentUnit == "°C") {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1228246814ef93d1b972cc316a42abeb`,
        { mode: "cors" }
      );

      const weatherMetric = await weatherResponse.json();

      return weatherMetric;
    }
  } catch (err) {
    console.log(err);
  }
}

function defineWeatherInfo(weatherAPI) {
  const weatherLocation = weatherAPI.name;
  const weatherIcon = weatherAPI.weather[0].icon;
  const weatherIconID = weatherAPI.weather[0].id;
  const weatherDescription = weatherAPI.weather[0].description;
  const weatherTemperature = Math.round(weatherAPI.main.temp);
  const weatherFeel = Math.round(weatherAPI.main.feels_like);
  const weatherHumidity = weatherAPI.main.humidity;
  const weatherWindSpeed = Math.round(weatherAPI.wind.speed);

  return {
    location: weatherLocation,
    icon: weatherIcon,
    iconID: weatherIconID,
    description: weatherDescription,
    temperature: weatherTemperature,
    feel: weatherFeel,
    humidity: weatherHumidity,
    windspeed: weatherWindSpeed,
  };

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

function createWeatherObjectImperial(weatherInfo) {
  const weatherLocation = weatherInfo.location;
  const weatherIcon = weatherInfo.icon;
  const weatherIconID = weatherInfo.iconID;
  const weatherDescription = weatherInfo.description;
  const weatherTemperature = weatherInfo.temperature;
  const weatherFeel = weatherInfo.feel;
  const weatherHumidity = weatherInfo.humidity;
  const weatherWindSpeed = weatherInfo.windspeed;

  const cityWeather = new WeatherObjectImperial(
    weatherLocation,
    weatherIcon,
    weatherIconID,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed
  );

  return cityWeather;
}

function createWeatherObjectMetric(weatherInfo) {
  const weatherLocation = weatherInfo.location;
  const weatherIcon = weatherInfo.icon;
  const weatherIconID = weatherInfo.iconID;
  const weatherDescription = weatherInfo.description;
  const weatherTemperature = weatherInfo.temperature;
  const weatherFeel = weatherInfo.feel;
  const weatherHumidity = weatherInfo.humidity;
  const weatherWindSpeed = weatherInfo.windspeed;

  const cityWeather = new WeatherObjectMetric(
    weatherLocation,
    weatherIcon,
    weatherIconID,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed
  );

  return cityWeather;
}

function addWeatherCard(currentUnit, weatherInfo) {
  if (currentUnit == "°F") {
    const cityWeather = createWeatherObjectImperial(weatherInfo);
    WeatherUI.appendWeatherInfo(cityWeather);
    return cityWeather;
  } else if (currentUnit == "°C") {
    const cityWeather = createWeatherObjectMetric(weatherInfo);

    WeatherUI.appendWeatherInfo(cityWeather);
    return cityWeather;
  }
}

// eslint-disable-next-line consistent-return
async function currentWeather(location, currentUnit) {
  try {
    // Defining variable with await still calls the function
    const geocode = await fetchGeocode(location);
    // console.log(geocode);

    // Return Imperial or Metric weatherAPI
    const weatherAPI = await fetchWeather(
      geocode.latitude,
      geocode.longitude,
      currentUnit
    );
    // console.log(weatherAPI);

    // define weatherAPI;
    const weatherInfo = defineWeatherInfo(weatherAPI);
    // console.log(weatherInfo);

    // Add weather card to web page
    addWeatherCard(currentUnit, weatherInfo);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export { currentWeather };
