import "./style.css";
import Location from "./location";
import init from "./dom";

async function getWeatherData(name) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=623e5f2a87014dff886202016231405&q=${name}&aqi=no`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  const locationName = weatherData.location.name;
  const locationCountry = weatherData.location.country;
  const tempF = weatherData.current.temp_f;
  const feelsLikeF = weatherData.current.feelslike_f;
  const condition = weatherData.current.condition.text;
  const conditionIcon = weatherData.current.condition.icon;
  const windMph = weatherData.current.wind_mph;
  const { humidity } = weatherData.current;
  const rain = weatherData.forecast.forecastday[0].hour[0].chance_of_rain;

  const location = new Location(
    locationName,
    locationCountry,
    tempF,
    feelsLikeF,
    condition,
    conditionIcon,
    windMph,
    humidity,
    rain
  );

  console.log(location);
}

getWeatherData("seoul");

init();
