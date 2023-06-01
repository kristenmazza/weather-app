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
  const searchForm = document.createElement("form");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  searchForm.classList.add("search-form");
  searchInput.setAttribute("type", "search");
  searchInput.classList.add("search-input");
  searchInput.setAttribute("placeholder", "Search location...");
  searchButton.setAttribute("type", "submit");
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  return searchForm;
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
  toggleOnLabel.textContent = "F";

  toggleOffInput.setAttribute("id", "toggle-off");
  toggleOffInput.classList.add("toggle", "toggle-right");
  toggleOffInput.setAttribute("name", "toggle");
  toggleOffInput.setAttribute("value", "true");
  toggleOffInput.setAttribute("type", "radio");
  toggleOffLabel.setAttribute("for", "toggle-off");
  toggleOffLabel.textContent = "C";

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

function componentLocationHeader(name, date, time) {
  const locationContainer = document.createElement("div");
  const locationName = document.createElement("h2");
  const timeInfo = document.createElement("div");
  const locationDate = document.createElement("span");
  const divider = document.createElement("span");
  const locationTime = document.createElement("span");

  locationName.classList.add("location-name");
  timeInfo.classList.add("time-info");

  locationName.textContent = name;
  divider.textContent = " | ";
  locationDate.textContent = date;
  locationTime.textContent = time;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(timeInfo);
  timeInfo.appendChild(locationDate);
  timeInfo.appendChild(divider);
  timeInfo.appendChild(locationTime);

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

export default function init() {
  const container = componentContainer();
  const header = componentHeader();
  const title = componentTitle();
  const searchForm = componentSearchForm();
  const conversionToggle = componentConversionToggle();
  const locationInformation = componentLocationInformation();
  const weatherContainer = componentWeatherContainer();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  header.appendChild(searchForm);
  header.appendChild(conversionToggle);
  container.appendChild(locationInformation);
  locationInformation.appendChild(
    componentLocationHeader("City, Country", "date", "time")
  );
  locationInformation.appendChild(weatherContainer);
  weatherContainer.appendChild(
    componentBasicTempDisplay(
      "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "34F",
      "Partly Cloudy",
      "33F"
    )
  );
  weatherContainer.appendChild(componentDetailedDisplay("24mph", "5%", "0%"));
}
