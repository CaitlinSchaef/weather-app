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

import axios from 'axios';


// this function is async and it is correctly grabbing the zip code
    async function grabZipCode () {
        try {
            const weather = await 
            axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=40508,US&appid=d5dec2820ad3221e7cd366cb8af99291')
            console.log(weather)
        } catch (error) {
        } 
    }
    grabZipCode()

// grab lat and lon (and name?) from this function (which is working!) and then run that into the open weather thing through string interpolation?
    




    // function uploadWeather () {
    //     const weather = grabWeather()
    //     console.log('QUOTE: ', quotes)
    //    }
       
       
    //   updloadWeather()
