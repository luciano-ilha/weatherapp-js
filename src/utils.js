const api = {
  key: "506cbac2b3ba4e29e7a6542e49fa22bb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const bodyTag = document.querySelector("body");
const temp = document.querySelector(".currentbox-temp-value");
const displayUnit = document.querySelector(".currentbox-temp-unit");
const tempUnit = document.querySelector(".currentbox-temp-toggle");
const hiloLovalue = document.querySelector(".currentbox-hilo-lovalue");
const hiloLounit = document.querySelector(".currentbox-hilo-lounit");
const hiloHivalue = document.querySelector(".currentbox-hilo-hivalue");
const hiloHiunit = document.querySelector(".currentbox-hilo-hiunit");
const searchBox = document.querySelector(".topbox-search");
const errMsg = document.querySelector(".mainbox-location-city");
const errDate = document.querySelector(".mainbox-location-date");
const errSky = document.querySelector(".currentbox-weather");
const city = document.querySelector(".mainbox-location-city");
const now = new Date();
const date = document.querySelector(".mainbox-location-date");
const dayStatus = document.querySelector(".currentbox-weather");

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
  errMsg,
  errDate,
  errSky,
  city,
  now,
  date,
  dayStatus,
};
