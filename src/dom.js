import format from "date-fns/format";

function componentContainer() {
  const container = document.createElement("div");
  container.classList.add("container");
  return container;
}

function componentHeader() {
  const header = document.createElement("header");
  return header;
}

function componentTitle() {
  const title = document.createElement("h1");
  title.textContent = "WeatherApp";
  title.classList.add("title");
  return title;
}

function componentSearchForm() {
  const searchFormContainer = document.createElement("div");
  const searchForm = document.createElement("form");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  const spanError = document.createElement("span");
  searchFormContainer.classList.add("search-form-container");
  searchForm.setAttribute("id", "form");
  searchForm.classList.add("search-form");
  searchInput.setAttribute("type", "search");
  searchInput.classList.add("search-input");
  searchInput.setAttribute("placeholder", "Search location...");
  searchButton.setAttribute("type", "submit");
  spanError.classList.add("error");
  spanError.setAttribute("aria-live", "polite");
  searchFormContainer.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  searchFormContainer.appendChild(spanError);
  return searchFormContainer;
}

function componentConversionToggle() {
  const toggleContainer = document.createElement("div");
  const toggleOnInput = document.createElement("input");
  const toggleOnLabel = document.createElement("label");
  const toggleOffInput = document.createElement("input");
  const toggleOffLabel = document.createElement("label");
  toggleContainer.classList.add("toggle-container");
  toggleOnInput.classList.add("toggle", "toggle-left");
  toggleOnInput.setAttribute("id", "toggle-on");
  toggleOnInput.setAttribute("name", "toggle");
  toggleOnInput.setAttribute("value", "false");
  toggleOnInput.setAttribute("type", "radio");
  toggleOnInput.checked = true;
  toggleOnLabel.setAttribute("for", "toggle-on");
  toggleOnLabel.classList.add("btn");
  toggleOnLabel.textContent = "°F";

  toggleOffInput.setAttribute("id", "toggle-off");
  toggleOffInput.classList.add("toggle", "toggle-right");
  toggleOffInput.setAttribute("name", "toggle");
  toggleOffInput.setAttribute("value", "true");
  toggleOffInput.setAttribute("type", "radio");
  toggleOffLabel.setAttribute("for", "toggle-off");
  toggleOffLabel.textContent = "°C";

  toggleContainer.appendChild(toggleOnInput);
  toggleContainer.appendChild(toggleOnLabel);
  toggleContainer.appendChild(toggleOffInput);
  toggleContainer.appendChild(toggleOffLabel);

  return toggleContainer;
}

function componentLocationInformation() {
  const locationInformation = document.createElement("div");
  locationInformation.classList.add("location-information");
  return locationInformation;
}

function componentLocationHeader(name, date) {
  const locationContainer = document.createElement("div");
  const locationName = document.createElement("h2");
  const timeInfo = document.createElement("div");
  const locationDate = document.createElement("span");

  locationContainer.classList.add("location-container");
  locationName.classList.add("location-name");
  timeInfo.classList.add("time-info");

  locationName.textContent = name;
  locationDate.textContent = date;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(timeInfo);
  timeInfo.appendChild(locationDate);

  return locationContainer;
}

function componentWeatherContainer() {
  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");

  return weatherContainer;
}

function componentBasicTempDisplay(conditionIcon, temp, condition, feelsLike) {
  const basicConditionsContainer = document.createElement("div");
  const currentTempDisplay = document.createElement("div");
  const currentTemp = document.createElement("div");
  const currentCondition = document.createElement("p");
  const currentFeelsLike = document.createElement("p");
  const currentTempIcon = new Image();
  basicConditionsContainer.classList.add("basic-conditions-container");
  currentCondition.classList.add("current-condition");
  currentFeelsLike.classList.add("current-feels-like");
  currentTempDisplay.classList.add("current-temp-display");
  currentTemp.textContent = temp;
  currentTempIcon.src = conditionIcon;
  currentCondition.textContent = condition;
  currentFeelsLike.textContent = `Feels like ${feelsLike}`;

  basicConditionsContainer.appendChild(currentTempDisplay);
  currentTempDisplay.appendChild(currentTempIcon);
  currentTempDisplay.appendChild(currentTemp);
  basicConditionsContainer.appendChild(currentCondition);
  basicConditionsContainer.appendChild(currentFeelsLike);

  return basicConditionsContainer;
}

function componentDetailedDisplay(wind, humidity, rain) {
  const detailedConditionsContainer = document.createElement("div");
  const currentWind = document.createElement("div");
  const windHeader = document.createElement("h3");
  const windInfo = document.createElement("p");

  const currentHumidity = document.createElement("p");
  const humidityHeader = document.createElement("h3");
  const humidityInfo = document.createElement("p");

  const chanceOfRain = document.createElement("p");
  const chanceOfRainHeader = document.createElement("h3");
  const chanceOfRainInfo = document.createElement("p");

  detailedConditionsContainer.classList.add("detailed-conditions-container");
  windHeader.classList.add("details-header");
  chanceOfRainHeader.classList.add("details-header");
  humidityHeader.classList.add("details-header");

  windInfo.classList.add("p-info");
  humidityInfo.classList.add("p-info");
  chanceOfRainInfo.classList.add("p-info");

  windHeader.textContent = "Wind";
  windInfo.textContent = wind;

  humidityHeader.textContent = "Humidity";
  humidityInfo.textContent = humidity;

  chanceOfRainHeader.textContent = "Chance of Rain";
  chanceOfRainInfo.textContent = rain;

  detailedConditionsContainer.appendChild(currentWind);
  currentWind.appendChild(windHeader);
  currentWind.appendChild(windInfo);
  detailedConditionsContainer.appendChild(currentHumidity);
  currentHumidity.appendChild(humidityHeader);
  currentHumidity.appendChild(humidityInfo);
  detailedConditionsContainer.appendChild(chanceOfRain);
  chanceOfRain.appendChild(chanceOfRainHeader);
  chanceOfRain.appendChild(chanceOfRainInfo);

  return detailedConditionsContainer;
}

function componentLoading() {
  const loading = document.createElement("div");
  loading.setAttribute("id", "loading");

  return loading;
}

export function displayLoading() {
  const loader = document.querySelector("#loading");
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 5000);
}

export function hideLoading() {
  const loader = document.querySelector("#loading");
  loader.classList.remove("display");
}

export function clearWeatherInfo() {
  const locationInformation = document.querySelector(".location-information");

  while (locationInformation.firstChild) {
    locationInformation.removeChild(locationInformation.firstChild);
  }
}

export function showError() {
  const inputError = document.querySelector("span.error");
  inputError.textContent = "City not found";
  inputError.className = "error active";
}

export function clearError() {
  const inputError = document.querySelector("span.error");

  inputError.className = "error";
  inputError.textContent = "";
}

export function displayWeatherInfo(location, selectedMeasurement) {
  const locationInformation = document.querySelector(".location-information");
  const weatherContainer = componentWeatherContainer();

  clearError();

  locationInformation.appendChild(
    componentLocationHeader(
      location.locationName,
      format(new Date(location.localTime), "eeee, MMMM dd, yyyy  |  p")
    )
  );
  locationInformation.appendChild(weatherContainer);

  if (selectedMeasurement === "fahrenheit") {
    weatherContainer.appendChild(
      componentBasicTempDisplay(
        location.conditionIcon,
        `${location.tempF}°F`,
        location.condition,
        `${location.feelsLikeF}°F`
      )
    );
    weatherContainer.appendChild(
      componentDetailedDisplay(
        `${location.windMph} mph`,
        `${location.humidity}%`,
        `${location.rain}%`
      )
    );
  }

  if (selectedMeasurement === "celsius") {
    weatherContainer.appendChild(
      componentBasicTempDisplay(
        location.conditionIcon,
        `${location.tempC}°C`,
        location.condition,
        `${location.feelsLikeC}°C`
      )
    );
    weatherContainer.appendChild(
      componentDetailedDisplay(
        `${location.windKph} kph`,
        `${location.humidity}%`,
        `${location.rain}%`
      )
    );
  }
}

export function init() {
  const container = componentContainer();
  const header = componentHeader();
  const title = componentTitle();
  const searchForm = componentSearchForm();
  const conversionToggle = componentConversionToggle();
  const locationInformation = componentLocationInformation();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  header.appendChild(searchForm);
  header.appendChild(conversionToggle);
  container.appendChild(componentLoading());
  container.appendChild(locationInformation);
}
