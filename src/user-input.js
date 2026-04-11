const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=NJ2PF5Y4ZXAQT3W4RX22TQGF5&contentType=json";
// const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=EFGZH9ZWYHZX947MWJGTLD5T8&contentType=json"
export async function getCity() {
  try {
    const userCity = document.querySelector(".search-city-input");
    let city = url.replace("London", userCity.value);
    console.log(city);

    // const userUnit = document.querySelector(".user-unit");
    // const unit = city.replace("us", userUnit.value);

    return city;
  } catch {
    return url;
  }
}
