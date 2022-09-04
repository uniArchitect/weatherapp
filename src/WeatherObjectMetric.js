/* Class that takes in the weather data from the API and returns a new object with the data */
export default class WeatherObjectMetric {
  constructor(
    weatherLocation,
    weatherDescription,
    weatherTemperature,
    weatherFeel,
    weatherHumidity,
    weatherWindSpeed,
  ) {
    this.location = weatherLocation;
    this.description = weatherDescription;
    this.temperature = `${weatherTemperature} °C`;
    this.feel = `${weatherFeel} °C`;
    this.humidity = weatherHumidity;
    this.wind = `${weatherWindSpeed} KPH`;
  }
}
