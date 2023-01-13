const button = document.getElementById("search");
const city = document.getElementById("city");

const err = document.getElementById("error");
const locationName = document.getElementById("locationName");
const temp = document.getElementById("temp");
const time = document.getElementById("time");
const humid = document.getElementById("humid");
const press = document.getElementById("press");
const wind = document.getElementById("wind");


async function getData(name, value){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=93e601a061334b91ace113531231301&q=${name}&aqi=yes
    `);
    return await promise.json();
}

button.addEventListener('click', async ()=>{
    const value = city.value;
    
    const result = await getData(value)
    
    locationName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    time.innerText = `Local Time : ${result.location.localtime}`;
    temp.innerHTML = `Temperature : ${result.current.temp_c} <sup>o</sup>C`;
    press.innerText = `Pressure : ${result.current.pressure_mb} mb`;
    humid.innerText = `Humidity : ${result.current.humidity}%`;
    wind.innerText = `Wind : ${result.current.wind_kph} km/h`;
})

//  http://api.weatherapi.com/v1/current.json?key=93e601a061334b91ace113531231301&q=London&aqi=yes
