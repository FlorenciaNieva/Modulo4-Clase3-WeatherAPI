const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const updateWeather = (data) => {
        $('#name-city').innerHTML = data.name;
        $('#temp').innerHTML = data.main.temp + "°C";
        $('#wind').innerHTML = data.wind.speed + "km/h";
        $('#humidity').innerHTML = data.main.humidity + "%";
        $('#temp-max').innerHTML = data.main.temp_max + "°C";
        $('#temp-min').innerHTML = data.main.temp_min + "°C";
        if (data.weather[0].main === "Clouds") {
            $('#weather-icon').innerHTML = '<i class="fa-solid fa-cloud"></i>';
            $('#weather-name').innerText = 'Clouds';
        } else if (data.weather[0].main === "Rain") {
            $('#weather-icon').innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
            $('#weather-name').innerText = 'Rain';
        } else if (data.weather[0].main === "Drizzle") {
            $('#weather-icon').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
            $('#weather-name').innerText = 'Drizzle';
        } else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Haze") {
            $('#weather-icon').innerHTML = '<i class="fa-solid fa-smog"></i>';
            if (data.weather[0].main === "Mist") {
                $('#weather-name').innerText = 'Mist';
            } else if (data.weather[0].main === "Fog") {
                $('#weather-name').innerText = 'Fog';
            } else if (data.weather[0].main === "Haze") {
                $('#weather-name').innerText = 'Haze';
            }
        } else if (data.weather[0].main === "Clear") {
            $('#weather-icon').innerHTML = '<i class="fa-regular fa-sun"></i>';
            $('#weather-name').innerText = 'Clear';
        } else if (data.weather[0].main === "Snow") {
            $('#weather-icon').innerHTML = '<i class="fa-regular fa-snowflake"></i>';
            $('#weather-name').innerText = 'Snow';
        } else if (data.weather[0].main === "Thunderstorm") {
            $('#weather-icon').innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
            $('#weather-name').innerText = 'Thunderstorm';
        }
}

$('#search').addEventListener('click', () => {
    checkWeather($('#city-select').value);
})
