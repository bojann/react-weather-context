import React from 'react';
import { WEATHER_API } from 'components/enums';
import axios from 'axios';

const fetchWeather = (args) => {
  const { city, countryCode = 'pl' } = args;
  
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${WEATHER_API.KEY}&units=metric`;
  return axios
    .get(URL)
    .then( response => response.data)
    .catch( err => {
      throw new Error(err);
    });
}

export default fetchWeather;