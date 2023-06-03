export default class Location {
  constructor(
    locationName,
    localTime,
    tempF,
    tempC,
    feelsLikeF,
    feelsLikeC,
    condition,
    conditionIcon,
    windMph,
    windKph,
    humidity,
    rain
  ) {
    this.locationName = locationName;
    this.localTime = localTime;
    this.tempF = tempF;
    this.tempC = tempC;
    this.feelsLikeF = feelsLikeF;
    this.feelsLikeC = feelsLikeF;
    this.condition = condition;
    this.conditionIcon = conditionIcon;
    this.windMph = windMph;
    this.windKph = windKph;
    this.humidity = humidity;
    this.rain = rain;
  }
}
