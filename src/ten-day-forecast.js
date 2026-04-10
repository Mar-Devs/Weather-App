import { createWeekleyDivs } from "./weekly-and-conditions.js";

function dayIndexToDayOfWeek(dayIndex) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfTheWeek = daysOfWeek[dayIndex];

  return dayOfTheWeek;
}

export async function tenDayForevast(city) {
  console.log("This is running")
  try {
    let response = await fetch(city);
    let data = await response.json();

    for (let i = 1; i <= 10; i++) {
      let condition = data.days[i].conditions;

      let high = data.days[i].tempmax;
      high = Math.round(high);
      high = JSON.stringify(high);

      let low = data.days[i].tempmin;
      low = Math.round(low);
      low = JSON.stringify(low);

      let icon = data.days[i].icon;

      let day = data.days[i].datetime;
      let date = new Date(day);
      let dayIndex = date.getDay();
      let dayOfWeek = dayIndexToDayOfWeek(dayIndex);

      console.log(`Is it: ${dayOfWeek}, the condition is: ${condition}, the high and low are: ${high} and ${low}`)

      createWeekleyDivs(dayOfWeek, condition, high, low, icon);
    }
  } catch {
    new Error("Something went wrong while fetching the ten day forecast :(");
  }
}
