function showTemp(temp) {
    document.querySelector("#current-city").innerHTML = temp.data.name;
    document.querySelector("#current-temperature").innerHTML = Math.round(temp.data.main.temp)
    document.querySelector("#feels-like").innerHTML = Math.round(temp.data.main.feels_like)
    document.querySelector("#humidity").innerHTML = Math.round(temp.data.main.humidity)
    document.querySelector("#windspeed").innerHTML = Math.round(temp.data.wind.speed)
    document.querySelector("#sky-description").innerHTML = temp.data.weather[0].main
    console.log(temp);
}

let apiKey = "9bcab27e2586a82d6ff0a45c0b3f6c89";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${apiKey}`;


axios.get(apiUrl).then(showTemp);