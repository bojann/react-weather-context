// eslint-disable-next-line
import React from "react";
import { WEATHER_API } from "components/enums";
import axios from "axios";

const fetchWeather = (city = "warsaw", countryCode = "pl") => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${
    WEATHER_API.KEY
  }&units=metric`;
  return axios
    .get(URL)
    .then(response => response.data)
    .catch(err => {
      console.error(err);
    });
};

export default fetchWeather;
