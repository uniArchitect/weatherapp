import weatherObject from "./localeWeatherObject";

export default async function currentWeather(location) {
  try {
    const geocodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},USA&limit=5&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: "cors" }
    );
    const geocode = await geocodeResponse.json();
    const geocodeLat = geocode[0].lat;
    const geocodeLon = geocode[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geocodeLat}&lon=${geocodeLon}&appid=1228246814ef93d1b972cc316a42abeb`,
      { mode: "cors" }
    );
    const weatherAPI = await weatherResponse.json();
    const weatherLocation = weatherAPI.name;
    const weatherDescription = weatherAPI.weather[0].description;
    const weatherTemperature = weatherAPI.main.temp;
    const weatherFeel = weatherAPI.main.feels_like;
    const weatherHumidity = weatherAPI.main.humidity;
    const weatherWindSpeed = weatherAPI.wind.speed;
    // weatherAPI.clouds
    // console.log(weatherAPI);

    const cityWeather = new weatherObject(
      weatherLocation,
      weatherDescription,
      weatherTemperature,
      weatherFeel,
      weatherHumidity,
      weatherWindSpeed
    );

    weatherObject.appendWeatherInfo(cityWeather);
  } catch (err) {
    console.log(err);
  }
}
