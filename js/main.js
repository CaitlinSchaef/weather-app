/* 

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
    if (errorMessage(zipCode)) {
        console.log("error")
    } else {

    const weatherInfo = await grabWeather(zipCode)
        console.log(weatherInfo)
        cityBox.textContent = weatherInfo.data.name
        kelvinBox.textContent = Math.floor(weatherInfo.data.main.temp) + ' K'
        fahrenheitBox.textContent = Math.floor(((weatherInfo.data.main.temp)-273.15) * 1.8 + 32) + '°F'
        celsiusBox.textContent = Math.floor(weatherInfo.data.main.temp-273.15) + '°C'
        conditionBox.textContent = weatherInfo.data.weather[0].description + '!'
        imageBox.src = `https://openweathermap.org/img/wn/${weatherInfo.data.weather[0].icon}@2x.png`
        changeColor(weatherInfo.data.weather[0].id)
    }
}


// get weather button function

getWeatherButton.addEventListener('click', (()=>fillPage(zipCodeInput.value)))
// getWeatherButton.className.setAttribute('disabled')
// zipCodeInput.addEventListener("change",(getWeatherButton.classList.add(`${zipCodeInput.value.length !== 5 && 'disabled'}`)))

function changeColor(color) {
        // thunderstorms
   if (color >= 200 && color <= 250) {
       document.body.style.backgroundColor = "#444b59"
       // cloudy
    } else if (color >= 801 && color <= 850) {
        document.body.style.backgroundColor = "#b4b3b9"
        // drizzle
     } else if (color >= 300 && color <= 350) {
        document.body.style.backgroundColor = "#afc3cc"
        // rain
     } else if (color >= 500 && color <= 550) {
        document.body.style.backgroundColor = "#98abc6"
        // snow
     } else if (color >= 600 && color <= 650) {
        document.body.style.backgroundColor = "#fffafa"
      // atmosphere and haze
    } else if (color >= 600 && color <= 650) {
       document.body.style.backgroundColor = "#cad7d9"
        // CLEAR DAY
    } else if (color == 800) {
            document.body.style.backgroundColor = "#c3eefa"
        }
        console.log(color)
    }


function errorMessage(zipCode) {
    console.log(zipCode)
    console.log(typeof(zipCode))
    if (zipCode.length > 5 || zipCode.length < 5) {
        window.alert('Not a valid zip code!')
        return true
    }
}

// if you wanted to do changing background weather 
// if starts with 2 background grey, etc for changing weather 

// function changeBackground(imageBox) {
//     value of icon from imageBox
// weatherInfo.data.weather[0].id
// 7 colors

// }