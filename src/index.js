import { getCity } from "./user-input.js";
import { getCurrentWeather } from "./to-days-weather.js";
import "./search-bar.css";
import { tenDayForevast } from "./ten-day-forecast.js";
import "./media-queries.css";
import "./daily-display.css";
import {
  waterIconFunc,
  windIconFunc,
  addLoadingIcon,
  objectToString,
  visibilityIconFunc,
  dailyH2Icon,
  deleteDOM,
} from "./small-functions.js";
import { hourlyData } from "./hourly-data.js";
import "./hourly.css";
import "./weekly-and-conditions.css";
import favIcon from "./resources/cloud_24dp_9B5278_FILL0_wght400_GRAD0_opsz24.svg";

function addFavIcon() {
  const linkElem = document.createElement("link");
  document.head.appendChild(linkElem);
  linkElem.rel = "icon";
  linkElem.type = "image/x-icon";
  linkElem.href = favIcon;
}

addFavIcon();
addLoadingIcon();
waterIconFunc();
windIconFunc();
visibilityIconFunc();
async function execute(element) {
  try {
    let city = await getCity();
    hourlyData(city);
    let tenday = await tenDayForevast(city);
    let [
      cityTemp,
      cityConditions,
      cityUV,
      apiDescription,
      cityHigh,
      cityLow,
      cityAddress,
      feelsLike,
      humidityToday,
      windSpeed,
      visibilityToday,
      nowIcon,
    ] = await getCurrentWeather(city);

    dailyH2Icon(nowIcon);

    let loc = objectToString(cityAddress);
    loc = loc.slice(1, -1);
    loc = loc.toUpperCase();
    console.log(loc);

    let cityNameElm = document.querySelector(".city-name");
    cityNameElm.textContent = `${loc}`;

    let temp = objectToString(cityTemp);
    console.log(`The temp is: ${temp}`);
    const cityTempElm = document.querySelector(".city-temp");
    cityTempElm.textContent = `${cityTemp}\u00B0`;

    let feel = objectToString(feelsLike);
    console.log(`Feels like: ${feel}`);
    const feelsLikeElm = document.querySelector(".feels-like");
    feelsLikeElm.textContent = `Feels like ${feel}\u00B0`;

    let humid = objectToString(humidityToday);
    const humidityElm = document.querySelector(".humidityElm");
    humidityElm.textContent = `${humid}%`;

    let windspeed = objectToString(windSpeed);
    const windSpeedElm = document.querySelector(".wind-speed-elem");
    windSpeedElm.textContent = `${windspeed}km/h`;

    let visibility = objectToString(visibilityToday);
    const visibilityElm = document.querySelector(".visibility-today");
    visibilityElm.textContent = `${visibility}km`;

    let date = new Date();
    let newDate = date.toDateString();
    const dateDisplay = document.querySelector(".date-display");
    dateDisplay.textContent = `${newDate}`;

    console.log(`The conditions are: ${cityConditions}`);
    const conditionsElm = document.querySelector(".condition");
    conditionsElm.textContent = cityConditions;

    let uv = objectToString(cityUV);
    console.log(`The UV index is: ${uv}`);
    const getUvElem = document.querySelector(".dynamic-uv");
    getUvElem.textContent = uv;

    console.log(`The description is: ${apiDescription}`);

    let h = objectToString(cityHigh);
    console.log(`The high is: ${h}`);

    let l = objectToString(cityLow);
    console.log(`The low is: ${l}`);
  } catch {
    new Error(console.log("Something went wrong at 'index.js'..."));
  }
}

const userCity = document.querySelector(".search-city-input");
userCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") execute(userCity);
  deleteDOM();
});
