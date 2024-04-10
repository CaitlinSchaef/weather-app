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

// this function is async and it is correctly grabbing the weather
    async function grabWeather (zipCode, countryCode = 'US') {
        try {
            const weather = await 
            axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=d5dec2820ad3221e7cd366cb8af99291`)
            console.log(weather)
        } catch (error) {
        } 
    }
    let loc = navigator.geolocation.getCurrentPosition()
    console.log(loc)
    grabWeather(40508)



// function to call info from weather API

// function to insert info into the html divs - can this be combined with above?

