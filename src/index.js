import "./style.scss";
import {
  api,
  bodyTag,
  temp,
  displayUnit,
  tempUnit,
  hiloLovalue,
  hiloLounit,
  hiloHivalue,
  hiloHiunit,
  searchBox,
  city,
  now,
  date,
  dayStatus,
} from "./utils";

const setQuery = (event) => {
  if (event.keyCode == 13) {
    getResults(searchBox.value)
      .then(displayResults)
      .catch((err) => {
        let errMsg = document.querySelector(".mainbox-location-city");
        errMsg.innerText = `${err}`;
        let errDate = document.querySelector(".mainbox-location-date");
        errDate.innerText = "";
        temp.innerText = "";
        let errSky = document.querySelector(".currentbox-weather");
        errSky.innerText = "";
        hiloLovalue.innerText = "";
        hiloHivalue.innerText = "";
        searchBox.value = "";
      });
  }
};

searchBox.addEventListener("keypress", setQuery);

const getResults = async (query) => {
  const queryResult = await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  );

  if (queryResult.status !== 200) {
    throw new Error("Oooops! Sorry, city not found! Please try again.");
  }

  const weatherResponse = await queryResult.json();

  return weatherResponse;
};

const displayResults = (weather) => {
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  date.innerText = dateBuilder(now);

  if (displayUnit.innerText == "°c") {
    temp.innerText = `${Math.round(weather.main.temp)}`;
    hiloLovalue.innerText = `${Math.round(weather.main.temp_min)}`;
    hiloHivalue.innerText = `${Math.round(weather.main.temp_max)}`;
  } else {
    temp.innerText = `${Math.round((weather.main.temp * 9) / 5 + 32)}`;
    hiloLovalue.innerText = `${Math.round(
      (weather.main.temp_min * 9) / 5 + 32
    )}`;
    hiloHivalue.innerText = `${Math.round(
      (weather.main.temp_max * 9) / 5 + 32
    )}`;
  }

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

  searchBox.value = "";
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

const tempUnitChanger = () => {
  if (displayUnit.innerText == "°c") {
    temp.innerText = `${(temp.innerText * 9) / 5 + 32}`;
    displayUnit.innerText = "°f";
    tempUnit.innerText = "Celsius";
    hiloLovalue.innerText = `${Math.round(
      (hiloLovalue.innerText * 9) / 5 + 32
    )}`;
    hiloLounit.innerText = "°f /";
    hiloHivalue.innerText = `${Math.round(
      (hiloHivalue.innerText * 9) / 5 + 32
    )}`;
    hiloHiunit.innerText = "°f";
  } else {
    temp.innerHTML = `${Math.round(((temp.innerText - 32) * 5) / 9)}`;
    displayUnit.innerText = "°c";
    tempUnit.innerText = "Farenheit";
    hiloLovalue.innerText = `${Math.round(
      ((hiloLovalue.innerText - 32) * 5) / 9
    )}`;
    hiloLounit.innerText = "°c /";
    hiloHivalue.innerText = `${Math.round(
      ((hiloHivalue.innerText - 32) * 5) / 9
    )}`;
    hiloHiunit.innerText = "°c";
  }
};

tempUnit.addEventListener("click", tempUnitChanger);
