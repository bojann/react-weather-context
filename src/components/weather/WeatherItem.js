import React from 'react'
import { Button } from "react-bootstrap/lib";
import { NO_DATA } from 'components/enums';

// import WeatherChart from 'components/shared/chart/WeatherChart'
// import WeatherDetails from "components/weather/WeatherDetails";

import './WeatherItem.scss'

const WeatherItem = ({nowWeatherData}) => {
  console.log("%c  BA :********* ","background: orange;", nowWeatherData);
  if(
    nowWeatherData &&
    nowWeatherData.main &&
    nowWeatherData.weather &&
    nowWeatherData.wind &&
    nowWeatherData.dt_txt
  ) {
    return null;
  }
  const {
    main = null,
    weather = [],
    wind = null,
    dt_txt = NO_DATA,
  } = nowWeatherData;
  const {
    humidity = NO_DATA,
    temp = NO_DATA,
    pressure = NO_DATA,
  } = main;
  const {
    description = NO_DATA,
    icon
  } = weather[0];

  const windSpeed= (wind && wind['speed']) ? wind['speed'] : NO_DATA;
  const iconURL = icon && `http://openweathermap.org/img/w/${icon}.png`;
  const date = dt_txt ? new Date(dt_txt).toLocaleDateString() : new Date().toLocaleDateString();
  
  return(
    <div className="weather-summary">
      <h3>{date}</h3>
      <img src={iconURL} alt={description}/>
      <span className="city-temp">{temp}<span>&#8451;</span></span>
      <Button handleClickWeather />
    </div>
  )
}

export default WeatherItem;