const api = {
  key: "506cbac2b3ba4e29e7a6542e49fa22bb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".topbox-search");
searchBox.addEventListener("keypress", setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".mainbox-location-city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".mainbox-location-date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".currentbox-temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let dayStatus = document.querySelector(".currentbox-weather");
  dayStatus.innerText = weather.weather[0].main;

  let hilo = document.querySelector(".currentbox-hilo");
  hilo.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
}
