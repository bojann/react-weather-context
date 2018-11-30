import React from 'react';
import Chart from 'chart.js';

const WeatherChart = ({weatherData = []}) => {
  const getChartCoordinates = () => {
    const cityTemp = weatherData.list.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.temp;
      return obj;
    });
    const cityPressure = weatherData.list.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.pressure;
      return obj;
    });
    const cityHumidity = weatherData.list.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.humidity;
      return obj;
    });

    return {
      cityTemp: cityTemp,
      cityPressure: cityPressure,
      cityHumidity: cityHumidity,
    }
  }
  
  const { cityTemp, cityPressure, cityHumidity } = getChartCoordinates();
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      "datasets":[
        {"label":"Temperature in C",
          "data": cityTemp,
          "borderColor":"#f25e1b"},
        {"label":"Pressure",
          "data": cityPressure,
          "borderColor":"#3e8e29"},
        {"label":"Humidity",
          "data": cityHumidity,
          "borderColor":"#175074"},
      ]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM DD'
            }
          }
        }]
      }
    }
  });

  return (
    <canvas id="myChart" width="400" height="400"></canvas>
  )
}

export default WeatherChart;