import "./style.css";
import Location from "./location";
import {
  init,
  displayWeatherInfo,
  showError,
  clearWeatherInfo,
  displayLoading,
  hideLoading,
  clearError,
} from "./dom";

let selectedMeasurement = "fahrenheit";
let searchInput = "queensland";

init();

async function getWeatherData(name) {
  clearError();
  clearWeatherInfo();
  displayLoading();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=623e5f2a87014dff886202016231405&q=${name}&aqi=no`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    let locationName;
    if (
      weatherData.location.country === "United States of America" ||
      weatherData.location.country === "USA United States of America" ||
      weatherData.location.country === "USA"
    ) {
      locationName = `${weatherData.location.name}, ${weatherData.location.region}`;
    } else {
      locationName = `${weatherData.location.name}, ${weatherData.location.country}`;
    }

    const localTime = weatherData.location.localtime;
    const tempF = weatherData.current.temp_f;
    const tempC = weatherData.current.temp_c;
    const feelsLikeF = weatherData.current.feelslike_f;
    const feelsLikeC = weatherData.current.feelslike_c;
    const condition = weatherData.current.condition.text;
    const conditionIcon = weatherData.current.condition.icon;
    const windMph = weatherData.current.wind_mph;
    const windKph = weatherData.current.wind_kph;
    const { humidity } = weatherData.current;
    const rain = weatherData.forecast.forecastday[0].hour[0].chance_of_rain;

    const location = new Location(
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
    );

    displayWeatherInfo(location, selectedMeasurement);

    hideLoading();
  } catch (err) {
    showError();
    clearWeatherInfo();
    hideLoading();
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  searchInput = document.querySelector(".search-input").value;
  getWeatherData(searchInput);
  form.reset();
});

const F = document.getElementById("toggle-on");
const C = document.getElementById("toggle-off");

F.addEventListener("change", () => {
  if (F.checked) selectedMeasurement = "fahrenheit";
  getWeatherData(searchInput);
});

C.addEventListener("change", () => {
  if (C.checked) selectedMeasurement = "celsius";
  getWeatherData(searchInput);
});

getWeatherData("queensland");
