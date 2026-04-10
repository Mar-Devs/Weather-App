function getHTMLELM(dataGet) {
  const nowTemp = document.querySelector(".now-temp");
  nowTemp.textContent = `${dataGet}\u00B0`;
}

function createContainers(temp, i, iconRetrieved) {
  async function mapSrc(iconRetrieved, htmlElement) {
    const iconName = await iconRetrieved;
    import(`./svg/${iconName}.svg`).then((mod) => {
      htmlElement.src = mod.default;
    });
  }
  const div = document.createElement("div");
  div.className = `hour-divs-dynamic`;
  const hourDivs = document.querySelector(".hour-divs");
  hourDivs.appendChild(div);

  const p = document.createElement("p");
  p.textContent = i;
  div.appendChild(p);

  const img = document.createElement("img");
  img.className = "temps-icon";
  mapSrc(iconRetrieved, img);
  div.appendChild(img);

  const h6 = document.createElement("h6");
  h6.className = "now-temp";
  h6.textContent = `${temp}\u00B0`;
  div.appendChild(h6);
}

function nowDivImgIcon(iconRetrieved) {
  const nowDiv = document.querySelector(".img-div");
  const img = document.createElement("img");
  img.className = 'temps-icon'
  nowDiv.appendChild(img)

  async function getSrcPath(iconRetrieved, htmlElement) {
    const iconName = await iconRetrieved;
    import(`./svg/${iconName}.svg`).then((mod) => {
      htmlElement.src = mod.default;
    });
  }

  getSrcPath(iconRetrieved,img)
}

export async function hourlyData(city) {
  try{
  let retrieve = await fetch(city);
  let data = await retrieve.json();
  console.log(data)

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
      nowDivImgIcon(getIconData)

      for (let j = i+1; j <= 23; j++) {
        let temptemp = data.days[0].hours[j].temp;
        temptemp = Math.round(temptemp);
        let tempicon = data.days[0].hours[j].icon;
        createContainers(temptemp, j, tempicon);
        console.log(
          `The index of the hour is ${j}, the temp is:${temptemp}, and the icon is ${tempicon}`,
        );
      }
    }
  }
  } catch{
    console.log(new Error())
  }
  finally{
    console.log("Done")
  }
}

// async function dailyH2Icon(importedIcon) {
//   const weatherIcon = document.createElement("img");
//   weatherIcon.className = "main-weather-icon";
//   const iconName = await importedIcon;
//   import(`./svg/${iconName}.svg`).then((mod) => {
//     weatherIcon.src = mod.default;
//   });

//   const div = document.querySelector(".daily-display-h2");
//   div.appendChild(weatherIcon);
// }
