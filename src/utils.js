const api = {
  key: "506cbac2b3ba4e29e7a6542e49fa22bb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const bodyTag = document.querySelector("body");
bodyTag.style.backgroundImage = "url('/assets/weatherscshot.jpeg')";

const temp = document.querySelector(".currentbox-temp-value");
const displayUnit = document.querySelector(".currentbox-temp-unit");
const tempUnit = document.querySelector(".currentbox-temp-toggle");
const hiloLovalue = document.querySelector(".currentbox-hilo-lovalue");
const hiloLounit = document.querySelector(".currentbox-hilo-lounit");
const hiloHivalue = document.querySelector(".currentbox-hilo-hivalue");
const hiloHiunit = document.querySelector(".currentbox-hilo-hiunit");
const searchBox = document.querySelector(".topbox-search");
const city = document.querySelector(".mainbox-location-city");
const now = new Date();
const date = document.querySelector(".mainbox-location-date");
let dayStatus = document.querySelector(".currentbox-weather");

export {
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
};
