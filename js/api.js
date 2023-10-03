const APIKey = '55da088a845aed3b372924d653695337'; // clave de la API
const urlBase = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

// con la siguiente linea de código puedo acceder a la geolocalización del usuario, esto si el usuario acepta.
// navigator.geolocation.getCurrentPosition((position) => console.log(position.coords))

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//         let lon = position.coords.longitude;
//         let lat = position.coords.latitude;
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
//         fetch(`${url}`)
//         .then((response) => response.json())
//         .then((data) => data)
//     })
// }

const checkWeather = (city) => {
    fetch(urlBase + city + `&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) => updateWeather(data))
}
