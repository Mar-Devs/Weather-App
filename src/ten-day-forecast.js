function dayIndexToDayOfWeek(dayIndex){
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const dayOfTheWeek = daysOfWeek[dayIndex]

  return dayOfTheWeek
}


export async function tenDayForevast(city) {
  try {
    let response = await fetch(city);
    let data = await response.json();

    function dataNeeded(i){
        let high = data.days[i].tempmax
        let low = data.days[i].tempmin

        let day = data.days[i].datetime
        let date = new Date(day)
        let dayIndex = date.getDay()
        let dayOfWeek = dayIndexToDayOfWeek(dayIndex)


        console.log(`On ${dayOfWeek} the high is: ${high}, and the low is ${low}`)
        return high, low, dayIndex
    }

    for(let i = 1; i <= 10; i++){
        dataNeeded(i)
    }
    
  } catch {
    new Error("Something went wrong while fetching the ten day forecast :(");
  }
}
