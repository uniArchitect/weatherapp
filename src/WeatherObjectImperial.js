/* It takes in the weather data from the API and returns it in a format that is easier to use */
export default class WeatherObjectImperial {
  constructor(
    weatherLocation,
    weatherIcon,
    weatherIconID,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed
  ) {
    this.location = weatherLocation;
    this.icon = weatherIcon,
    this.iconID = weatherIconID,
    this.description = weatherDescription;
    this.temperature = `${weatherTemperature} °F`;
    this.feel = `${weatherFeel} °F`;
    this.humidity = weatherHumidity;
    this.wind = `${weatherWindSpeed} MPH`;
  }
}
