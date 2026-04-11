import searchIcon from "./resources/search_24dp_B07090_FILL0_wght400_GRAD0_opsz24.svg";
import waterIcon from "./resources/water_drop_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg";
import windIcon from "./resources/air_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg";
import visibilityIcon from "./resources/visibility_24dp_FF85AA_FILL0_wght400_GRAD0_opsz24.svg";

export function objectToString(obj) {
  let obj2 = JSON.stringify(obj);
  return obj2;
}

export function logicToUi(htmlElement, reading) {
  let htmlDOM = htmlElement;
  htmlDOM.textContent = reading;
}

export function displayData() {
  const weatherDataDisplay = document.querySelector(".weather-data-display");
  weatherDataDisplay.style.display = "flex";
}

export function addLoadingIcon() {
  const icon = document.createElement("img");
  icon.className = "search-icon";
  icon.src = searchIcon;
  icon.alt = "search";

  const searchCityDiv = document.querySelector(".search-city-icon");
  searchCityDiv.appendChild(icon);
}

export function waterIconFunc() {
  const waterIconImg = document.createElement("img");
  waterIconImg.className = "water-icon";
  waterIconImg.alt = "humidity";
  waterIconImg.src = waterIcon;

  const humidity = document.querySelector(".humidity");
  humidity.appendChild(waterIconImg);
}

export function windIconFunc() {
  const windIconImg = document.createElement("img");
  windIconImg.className = "wind-icon";
  windIconImg.alt = "wind-speed";
  windIconImg.src = windIcon;

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.appendChild(windIconImg);
}

export function visibilityIconFunc() {
  const visibilityIconImg = document.createElement("img");
  visibilityIconImg.className = "visibility-icon";
  visibilityIconImg.alt = "visibility";
  visibilityIconImg.src = visibilityIcon;

  const visibilityDiv = document.querySelector(".visibility");
  visibilityDiv.appendChild(visibilityIconImg);
}

export async function dailyH2Icon(importedIcon) {
  const weatherIcon = document.createElement("img");
  weatherIcon.className = "main-weather-icon";
  const iconName = await importedIcon;
  import(`./svg/${iconName}.svg`).then((mod) => {
    weatherIcon.src = mod.default;
  });

  const div = document.querySelector(".daily-display-h2");
  div.appendChild(weatherIcon);
}

export function deleteDOM() {
  try {
    const weatherIcon = document.querySelector(".main-weather-icon");
    weatherIcon.remove();
  } catch {
    console.log("Oops, it doesn't exist yet.");
  }
}
