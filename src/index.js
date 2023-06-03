import "./style.css";
import Location from "./location";
import { init, displayWeatherInfo, showError, clearWeatherInfo } from "./dom";

init();

async function getWeatherData(name) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=623e5f2a87014dff886202016231405&q=${name}&aqi=no`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    let locationName;
    if (weatherData.location.country === "United States of America") {
      locationName = `${weatherData.location.name}, ${weatherData.location.region}`;
    } else {
      locationName = `${weatherData.location.name}, ${weatherData.location.country}`;
    }

    const localTime = weatherData.location.localtime;
    const tempF = weatherData.current.temp_f;
    const feelsLikeF = weatherData.current.feelslike_f;
    const condition = weatherData.current.condition.text;
    const conditionIcon = weatherData.current.condition.icon;
    const windMph = weatherData.current.wind_mph;
    const { humidity } = weatherData.current;
    const rain = weatherData.forecast.forecastday[0].hour[0].chance_of_rain;

    const location = new Location(
      locationName,
      localTime,
      tempF,
      feelsLikeF,
      condition,
      conditionIcon,
      windMph,
      humidity,
      rain
    );

    displayWeatherInfo(location);
  } catch (err) {
    console.log("try again");
    showError();
    clearWeatherInfo();
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchInput = document.querySelector(".search-input").value;
  getWeatherData(searchInput);
  form.reset();
});

getWeatherData("queensland");
