
const ui = new UI();

const storage = new Storage();

const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.addEventListener("DOMContentLoaded", getWeather)

document.getElementById("w-change-btn").addEventListener("click", (e)=>{
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    console.log(city, state)
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
   console.log(city, state)
   getWeather();
    $('#locModal').modal('hide');
    
})

function getWeather(){
weather.getWeather()
    .then(results=> {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err))
}