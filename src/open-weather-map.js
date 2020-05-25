const WEATHER_API_KEY = "5e8acdf474fc7285dff2f94dc188ebec";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";
function zipUrl(zip){
    return `${API_STEM}q=${zip},br&units=metric&APPID=${WEATHER_API_KEY}&lang=pt_br` ;
}

function fetchForecast(zip){
    
    return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON =>{
        console.log(responseJSON);

        return{
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp  
               
        };
    })
    .catch(error =>{
        console.log(error);
    });
}
export default {fetchForecast: fetchForecast};
