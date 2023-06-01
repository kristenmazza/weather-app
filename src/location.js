export default class Location {
  constructor(
    locationName,
    locationCountry,
    tempF,
    feelsLikeF,
    condition,
    conditionIcon,
    windMph,
    humidity,
    rain
  ) {
    this.locationName = locationName;
    this.locationCountry = locationCountry;
    this.temp = tempF;
    this.feelsLike = feelsLikeF;
    this.condition = condition;
    this.conditionIcon = conditionIcon;
    this.windMph = windMph;
    this.humidity = humidity;
    this.rain = rain;
  }
}
