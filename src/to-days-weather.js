import { loadingIcon } from "./small-functions.js";
import { displayData } from "./small-functions.js";

export async function getCurrentWeather(city) {
  // let loadIcon = loadingIcon();
  try {
    console.log(city);
    let response = await fetch(city);
    let data = await response.json();
    console.log(data);

    let cityAddress = data.address;

    let cityTemp = data.currentConditions.temp;
    cityTemp = Math.round(cityTemp);

    let feelsLike = data.currentConditions.feelslike;
    feelsLike = Math.round(feelsLike);

    let windSpeed = data.currentConditions.windspeed;

    let visibilityToday = data.currentConditions.visibility;

    let cityConditions = data.currentConditions.conditions;

    let nowIcon = data.currentConditions.icon

    let cityUV = data.currentConditions.uvindex;

    let apiDescription = data.description;

    let humidityToday = data.currentConditions.humidity;

    let high = data.days[0].tempmax;
    high = Math.round(high);

    let low = data.days[0].tempmin;
    low = Math.round(low);

    return [
      cityTemp,
      cityConditions,
      cityUV,
      apiDescription,
      high,
      low,
      cityAddress,
      feelsLike,
      humidityToday,
      windSpeed,
      visibilityToday,
      nowIcon
    ];
  } catch {
    new Error("Something went wrong...");
  } // finally {
  //   loadIcon.style.display = "none";
  //   displayData();
  // }
}
