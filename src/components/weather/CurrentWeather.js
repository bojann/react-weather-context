import React from "react";
import { Button } from "react-bootstrap/lib";
import { NO_DATA, WEEKDAY } from "components/enums";

import "./CurrentWeather.scss";

const CurrentWeather = ({ nowWeatherData }) => {
  console.log("%c  BA :********* ", "background: orange;", nowWeatherData);
  const renderList = () => {
    if (
      !nowWeatherData &&
      !nowWeatherData.main &&
      !nowWeatherData.weather &&
      !nowWeatherData.wind &&
      !nowWeatherData.dt_txt
    ) {
      return null;
    }
    const {
      main = null,
      weather = [],
      wind = null,
      dt_txt = NO_DATA
    } = nowWeatherData;
    const { humidity = NO_DATA, temp = NO_DATA, pressure = NO_DATA } = main;
    const { description = NO_DATA, icon } = weather[0];

    const windSpeed = wind && wind["speed"] ? wind["speed"] : NO_DATA;
    const iconURL = icon && `http://openweathermap.org/img/w/${icon}.png`;
    const date = dt_txt
      ? WEEKDAY[new Date(dt_txt).getDay()] + " " + new Date(dt_txt).toLocaleDateString()
      : new Date().toLocaleDateString();

    return (
      <div className="weather-summary">
        <h3>{date}</h3>
        <img src={iconURL} alt={description} />
        <span className="weather-summary__item">
          {Math.round(temp)}
          <span>&#8451;</span>
        </span>
        <span className="weather-summary__item">Humidity: {humidity}</span>
        <span className="weather-summary__item">Pressure: {pressure}</span>
        <span className="weather-summary__item">Wind Speed: {windSpeed}</span>
        <Button
          bsStyle="success"
          className="weather-summary__item weather-summary--btn"
        >
          Hourly
        </Button>
      </div>
    );
  };

  return renderList();
};

export default CurrentWeather;
