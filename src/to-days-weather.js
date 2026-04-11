import logo from "./resources/progress_activity_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

function loadingIconFunction() {
  const loadingIconDiv = document.createElement("div");
  loadingIconDiv.className = "loading-icon-div";
  const loadingIconImg = document.createElement("img");
  const mainContainer = document.querySelector(".daily-container");
  mainContainer.style.overflow = "hidden";

  mainContainer.appendChild(loadingIconDiv);
  loadingIconDiv.appendChild(loadingIconImg);
  loadingIconDiv.style.display = "flex";
  loadingIconImg.style.display = "block";
  loadingIconImg.className = "loading-icon";
  loadingIconImg.src = logo;

  return loadingIconDiv;
}

export async function getCurrentWeather(city) {
  // let ee = loadingIconFunction();

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

    let nowIcon = data.currentConditions.icon;

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
      nowIcon,
    ];
  } catch {
    new Error("Something went wrong at 'to-days-weather.js'...");
  } 
  // finally {
  //   ee.style.display = "none";
  //   const rr = document.querySelector(".daily-container");
  //   rr.style.padding = "2rem";
  //   rr.style.overflow = "auto";
  // }
}
