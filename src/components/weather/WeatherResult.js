import React from 'react'
import { Panel } from "react-bootstrap/lib";
import uuidv1 from  'uuid/v1';

import WeatherItem from "components/weather/WeatherItem";
import WeatherChart from "components/shared/chart/WeatherChart";
import './WeatherResult.scss'

const WeatherResult = ({weatherData}) => {
  const weatherList = weatherData.list;
  const nowWeatherData = weatherList[0];
  const cityName = weatherData.city.name;
  
  const getAllDays = weatherList.map( item => item.dt_txt);
  const filterDays = new Set(getAllDays);
  
  const renderedDaysList = () => {
    if(!filterDays.length) {
      return null;
    }
    
    return filterDays.map((dt_txt) => {
      const UNIQ_ID = uuidv1();
      const date = dt_txt ? new Date(dt_txt).toLocaleDateString() : new Date().toLocaleDateString();
      
      return (
        <li key={UNIQ_ID}>
          <span>{date}</span>
        </li>
      )
    })
  }
  
  return (
    <Panel>
      <Panel.Heading>
        City: {cityName}
        <WeatherItem nowWeatherData={nowWeatherData} />
      </Panel.Heading>
      <Panel.Body>
        <div className="">
          Detail:
          <ul>
            {renderedDaysList()}
          </ul>
        </div>
      </Panel.Body>
    </Panel>
  )
}
//<WeatherChart weatherData={weatherData}/>
//<CurrentWeather />

export default WeatherResult;