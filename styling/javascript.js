

function showTemp(temp) {
    document.querySelector("#current-city").innerHTML = temp.data.name;
    document.querySelector("#current-temperature").innerHTML = Math.round(temp.data.main.temp);
    document.querySelector("#feels-like").innerHTML = Math.round(temp.data.main.feels_like);
    document.querySelector("#humidity").innerHTML = Math.round(temp.data.main.humidity);
    document.querySelector("#windspeed").innerHTML = Math.round(temp.data.wind.speed);
    document.querySelector("#sky-description").innerHTML = temp.data.weather[0].main;

    let icon = document.querySelector("#weather-icon");
    let iconPicture = temp.data.weather[0].icon;
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconPicture}@2x.png`);
    
    baseTemperature = Math.round(temp.data.main.temp);
}

function search(event) {
    event.preventDefault();

let apiKey = "9bcab27e2586a82d6ff0a45c0b3f6c89";
let newCity = document.querySelector("#entered-city");
let city = newCity.value
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


axios.get(apiUrl).then(showTemp);
}

let baseTemperature = null;

function showCelsius (event) {
    event.preventDefault();
    document.querySelector("#current-temperature").innerHTML = Math.round(baseTemperature);
}


function showFarhenheit(event) {
    event.preventDefault();
    document.querySelector("#current-temperature").innerHTML = Math.round(baseTemperature * 1.8 +32);


}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let farhenheitConversion = document.querySelector("#convert-farhenheit")
farhenheitConversion.addEventListener("click", showFarhenheit)

let celsiusConversion = document.querySelector("#convert-celsius")
celsiusConversion.addEventListener("click", showCelsius)