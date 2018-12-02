import React from "react";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import uuidv1 from "uuid/v1";

import CurrentWeather from "components/weather/CurrentWeather";
import WeatherChart from "components/shared/chart/WeatherChart";
import { WEEKDAY } from "components/enums";

import "./WeatherResult.scss";

const MIDDLE_TIME = "12:00:00";
const CURRENT_DATE_FORMATED = new Date().toLocaleDateString();

const WeatherResult = ({ weatherData, cityName }) => {
  const weatherList = weatherData.list;
  const nowWeatherData = weatherList[0];
  const getAllDays = weatherList
    .map(item => {
      const itemDateConverted = new Date(item.dt_txt).toLocaleDateString();
      if (itemDateConverted.indexOf(CURRENT_DATE_FORMATED) === -1) {
        return itemDateConverted;
      }
    })
    .filter(Boolean);
  const filterDays = new Set(getAllDays);
  const filterDaysArr = [...filterDays];
  const filterMinMaxTemp = () => {
    return weatherList.filter(item => {
      const itemDateConverted = new Date(item.dt_txt).toLocaleString();
      if (
        itemDateConverted.indexOf(MIDDLE_TIME) !== -1 &&
        itemDateConverted.indexOf(CURRENT_DATE_FORMATED) === -1
      ) {
        return item;
      }
    });
  };

  const renderedDaysList = () => {
    if (!filterDaysArr.length) {
      return null;
    }
    const maxMinFiveDays = filterMinMaxTemp();

    return filterDaysArr.map((dt_txt, i) => {
      const UNIQ_ID = uuidv1();

      const weatherIcon = `http://openweathermap.org/img/w/${
        maxMinFiveDays[i].weather[0].icon
      }.png`;
      const weatehrDesc = maxMinFiveDays[i].weather[0].description;
      const min = Math.round(maxMinFiveDays[i].main.temp_min);
      const max = Math.round(maxMinFiveDays[i].main.temp_max);
      const date = dt_txt
        ? WEEKDAY[new Date(dt_txt).getDay()] + " " + dt_txt
        : false;

      return (
        date
          ? <Col key={UNIQ_ID} xs={12} md={2}>
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
          : null 
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
        <Row>
          <Col xs={12} md={3}>
            <div className="">
              <CurrentWeather nowWeatherData={nowWeatherData} />
            </div>
          </Col>
          <Col xs={12} md={9}>
            <div className="">
              <WeatherChart weatherList={weatherList} />
            </div>
          </Col>
        </Row>
      </Panel.Body>
    </Panel>
  );
};

export default WeatherResult;
