function getHTMLELM(dataGet) {
  const nowTemp = document.querySelector(".now-temp");
  nowTemp.textContent = `${dataGet}\u00B0`;
}

export async function hourlyData(city) {
  let retrieve = await fetch(city);
  let data = await retrieve.json();

  let currentTime = data.currentConditions.datetime;

  for (let i = 0; i <= 23; i++) {
    let futureTime = data.days[0].hours[i].datetime;
    if (currentTime === futureTime) {
      console.log(`It is currently hour ${i}`);
      let getData = data.days[0].hours[i].temp;
      getData = Math.round(getData);
      console.log(`Temp at hour ${i} is: ${getData}`);
      getHTMLELM(getData);
      let getIconData = data.days[0].hours[i].icon;
      console.log(`Icon-name is: ${getIconData}`);

      for (let j = i; j <= 23; j++) {
        let temptemp = data.days[0].hours[j].temp;
        let tempicon = data.days[0].hours[j].icon
        console.log(
          `The index of the hour is ${j}, the temp is:${temptemp}, and the icon is ${tempicon}`,
        );
      }
    }
  }
}
