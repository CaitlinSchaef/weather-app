/* 
open weather API key: d5dec2820ad3221e7cd366cb8af99291
weather stuff:
The actual weather API:
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={d5dec2820ad3221e7cd366cb8af99291}

Direct Geocoding:
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={d5dec2820ad3221e7cd366cb8af99291}

Coordinates by zip/post code: (just use this) identify zip code as variable?
http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={d5dec2820ad3221e7cd366cb8af99291}
http://api.openweathermap.org/geo/1.0/zip?zip=40508,US&appid=d5dec2820ad3221e7cd366cb8af99291
*/

// leave this import line at the top
import axios from 'axios';

// set constants
const zipCodeInput = document.getElementById('zipCodeInput')
const getWeatherButton = document.getElementById('getWeatherButton')
const cityBox = document.getElementById('cityBox')
const kelvinBox = document.getElementById('kelvinBox')
const fahrenheitBox = document.getElementById('fahrenheitBox')
const celsiusBox = document.getElementById('celsiusBox')
const conditionBox = document.getElementById('conditionBox')
const imageBox = document.getElementById('imageBox')

// this function is async and it is correctly grabbing the weather -a getter
    async function grabWeather (zipCode, countryCode = 'US') {
        try {
            const weather = await 
            axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=d5dec2820ad3221e7cd366cb8af99291`)
            console.log(weather.data.name)
            return weather
        } catch (error) {
        } 
    }
    // let loc = navigator.geolocation.getCurrentPosition()
    // console.log(loc)

    // grabWeather(40508)

// // function to call info from weather API -a getter
// function callWeather () {
    
// }

// function to insert info into the html divs  -setter

async function fillPage(zipCode){
    errorMessage()
    const weatherInfo = await grabWeather(zipCode)
        console.log(weatherInfo)
        cityBox.textContent = weatherInfo.data.name
        kelvinBox.textContent = Math.floor(weatherInfo.data.main.temp) + ' K'
        fahrenheitBox.textContent = Math.floor(((weatherInfo.data.main.temp)-273.15) * 1.8 + 32) + '°F'
        celsiusBox.textContent = Math.floor(weatherInfo.data.main.temp-273.15) + '°C'
        conditionBox.textContent = weatherInfo.data.weather[0].description + '!'
        imageBox.src = `https://openweathermap.org/img/wn/${weatherInfo.data.weather[0].icon}@2x.png`
}


// get weather button function

getWeatherButton.addEventListener('click', (()=>fillPage(zipCodeInput.value)))

// zipcode error message function

function errorMessage() {
    if zipCode length > 5 wrong then do this
    window.alert("Not a zip code!")
}

// if starts with 2 background grey, etc for changing weather 

