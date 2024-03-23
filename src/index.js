const api_key = "c4f0c856f0fa8e908861a1c86d03b8c4";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_box = document.querySelector(".searchbox input")
const search_button = document.querySelector(".searchbox button")
const weather_icon = document.querySelector(".weather-icon")

async function check_weather(city) {
        const response = await fetch(api_url + city + `&appid=${api_key}`);
        var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weather_icon.src = "../data/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weather_icon.src = "../data/images/clear.png"  
        }
        else if (data.weather[0].main == "Rain") {
            weather_icon.src = "../data/images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weather_icon.src = "../data/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weather_icon.src = "../data/images/mist.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

search_button.addEventListener("click", ()=> {
    check_weather(search_box.value)
})