import "./style.scss";

const api = {
  key: "506cbac2b3ba4e29e7a6542e49fa22bb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const bodyTag = document.querySelector("body");
bodyTag.style.backgroundImage = "url('/assets/weatherscshot.jpeg')";

const tempUnit = document.querySelector(".currentbox-temp-unit");

const setQuery = (event) => {
  if (event.keyCode == 13) {
    getResults(searchBox.value).then(displayResults);
  }
};

const searchBox = document.querySelector(".topbox-search");
searchBox.addEventListener("keypress", setQuery);

const getResults = async (query) => {
  const queryResult = await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  );

  const weatherResponse = await queryResult.json();

  return weatherResponse;
};

const displayResults = (weather) => {
  console.log(weather);
  let city = document.querySelector(".mainbox-location-city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();

  let date = document.querySelector(".mainbox-location-date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".currentbox-temp");
  temp.innerHTML = `${Math.round(
    weather.main.temp
  )}<span class="currentbox-temp-unit">°c</span><span class="currentbox-temp-toggle">Farenheit</span>`;

  let dayStatus = document.querySelector(".currentbox-weather");
  dayStatus.innerText = weather.weather[0].main;

  if (weather.weather[0].main == "Clear") {
    bodyTag.style.backgroundImage = "url('/assets/sunny.jpeg')";
  } else if (weather.weather[0].main == "Clouds") {
    bodyTag.style.backgroundImage = "url('/assets/clouds.jpeg')";
  } else if (weather.weather[0].main == "Rain") {
    bodyTag.style.backgroundImage = "url('/assets/rain.jpeg')";
  } else if (weather.weather[0].main == "Mist") {
    bodyTag.style.backgroundImage = "url('/assets/mist.jpeg')";
  } else if (weather.weather[0].main == "Haze") {
    bodyTag.style.backgroundImage = "url('/assets/haze.jpeg')";
  } else {
    bodyTag.style.backgroundImage = "url('/assets/weatherscshot.jpeg')";
  }

  let hilo = document.querySelector(".currentbox-hilo");
  hilo.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
};

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} - ${year}`;
};
