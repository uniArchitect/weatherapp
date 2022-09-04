import { WEATHER_CARD_CONTAIN_DIV } from './index';

export default class WeatherObjectImperial {
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
    this.temperature = `${weatherTemperature} °F`;
    this.feel = `${weatherFeel} °F`;
    this.humidity = weatherHumidity;
    this.wind = weatherWindSpeed;
  }
}
