import React from "react";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import uuidv1 from "uuid/v1";

import WeatherItem from "components/weather/WeatherItem";
import WeatherChart from "components/shared/chart/WeatherChart";
import "./WeatherResult.scss";

const WeatherResult = ({ weatherData, cityName }) => {
  const weatherList = weatherData.list;
  const nowWeatherData = weatherList[0];

  const getAllDays = weatherList.map(item =>
    new Date(item.dt_txt).toLocaleDateString()
  );
  const filterDays = new Set(getAllDays);
  const filterDaysArr = [...filterDays];

  const filterMinMaxTemp = () => {
    const MIDDLE_TIME = "12:00:00";

    return weatherList.filter(item => {
      if (item.dt_txt.indexOf(MIDDLE_TIME) !== -1) {
        return item;
      }
    });
  };

  const renderedDaysList = () => {
    if (!filterDaysArr.length) {
      return null;
    }

    const maxMinFiveDays = filterMinMaxTemp();
    console.log("maxMinFiveDays   ", maxMinFiveDays);

    return filterDaysArr.map((dt_txt, i) => {
      const UNIQ_ID = uuidv1();
      const weatherIcon = `http://openweathermap.org/img/w/${
        maxMinFiveDays[i].weather[0].icon
      }.png`;
      const weatehrDesc = maxMinFiveDays[i].weather[0].description;
      const min = Math.round(Number(maxMinFiveDays[i].main.temp_min));
      const max = Math.round(Number(maxMinFiveDays[i].main.temp_max));
      const date = dt_txt
        ? new Date(dt_txt).toLocaleDateString()
        : new Date().toLocaleDateString();

      return (
        <Col key={UNIQ_ID} xs={12} md={2}>
          <Panel className="day-panel">
            <Panel.Heading>
              <span>{date}</span>
            </Panel.Heading>
            <Panel.Body>
              <img src={weatherIcon} alt={weatehrDesc} />
              <span>Min:{min}&#x2103;</span>
              <span>Max:{max}&#x2103;</span>
            </Panel.Body>
          </Panel>
        </Col>
      );
    });
  };

  return (
    <Panel>
      <Panel.Heading>
        City: {cityName.toUpperCase()}
        <Grid>
          <Row>{renderedDaysList()}</Row>
        </Grid>
      </Panel.Heading>
      <Panel.Body>
        <div className="">
          <WeatherChart weatherList={weatherList} />
        </div>
        <div className="">
          <WeatherItem nowWeatherData={nowWeatherData} />
        </div>
      </Panel.Body>
    </Panel>
  );
};
//<WeatherChart weatherData={weatherData}/>
//<CurrentWeather />

export default WeatherResult;
