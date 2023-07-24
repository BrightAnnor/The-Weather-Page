// fetching data from the Weather api

// apiKey
const apiKey = 'f24f08cc39bf03b73b5c266fef60d1b9';

// creating a function to get the weather data

async function getWeather(city){
    const {data}  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    //
    // const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(res => res.json())

      
    // console.log(data)
    document.getElementById('weatherIcon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    document.getElementById('degrees').innerHTML = Math.floor(data.main.temp)
    document.getElementById('city').innerHTML = data.name
    document.getElementById('humidity').innerHTML = `${data.main.humidity}<span style="font-size:1rem; line-height:0px;"> %</span>`
    document.getElementById('wind').innerHTML = `${data.wind.speed}<span style="font-size:1rem; line-height:0px;">Km/hr</span>`
// console.log(data)
    
}
getWeather('london')

// add the search functionalities
const cityName = document.getElementById('inputCity')

const submitCity = document.getElementById('inputSubmit')


submitCity.addEventListener('click',()=>{
    if(cityName.value.trim().length <1 ){
        alert('its empty')
    }
    else{getWeather(cityName.value)}
})


