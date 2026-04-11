export function createWeekleyDivs(
  weekDay,
  conditionS,
  highGet,
  lowGet,
  iconRetrieved,
) {
  async function getSrcPath(iconRetrieved, htmlElement) {
    const iconName = await iconRetrieved;
    import(`./svg/${iconName}.svg`).then((mod) => {
      htmlElement.src = mod.default;
    });
  }
  const weekDayDiv = document.querySelector(".week");
  const newDiv = document.createElement("div");
  newDiv.className = "week-day";
  weekDayDiv.appendChild(newDiv);

  const pDiv = document.createElement("div");
  pDiv.className = "weekly-day-of-week";
  newDiv.appendChild(pDiv);

  const p = document.createElement("p");
  p.textContent = weekDay;
  console.log(`THIS IS FROM WEEKLY FUNC ${weekDay}`)
  p.className = "week-in-p";
  pDiv.appendChild(p);

  const iconAndCondition = document.createElement("div");
  newDiv.appendChild(iconAndCondition);
  iconAndCondition.className = "icon-and-condition";

  const iconAppend = document.createElement("div");
  iconAppend.className = "icon-append";
  iconAndCondition.appendChild(iconAppend);

  const img = document.createElement("img");
  img.className = "weekley-icon-get";
  getSrcPath(iconRetrieved, img);
  iconAppend.appendChild(img);

  const condition = document.createElement("div");
  condition.className = "conditionED";
  iconAndCondition.appendChild(condition);

  const pCondition = document.createElement("p");
  pCondition.textContent = conditionS;
  pCondition.className = "p-condition";
  condition.appendChild(pCondition);

  const highAndLowDiv = document.createElement("div");
  highAndLowDiv.className = "high-and-low";
  newDiv.appendChild(highAndLowDiv);

  const high = document.createElement("p");
  high.textContent = `${highGet}\u00B0/`;
  high.className = "week-high";
  highAndLowDiv.appendChild(high);

  const low = document.createElement("p");
  low.textContent = `${lowGet}\u00B0`;
  low.className = "week-low";
  highAndLowDiv.appendChild(low);
}
