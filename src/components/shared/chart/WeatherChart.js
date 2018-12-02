import React, { PureComponent } from "react";
import Chart from "chart.js";

class WeatherChart extends PureComponent {
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  renderChart = () => {
    const { cityTemp, cityPressure, cityHumidity } = this.getChartCoordinates();
    const ctx = document.getElementById("myChart");
    //eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Temperature in \u2103",
            data: cityTemp,
            borderColor: "#f25e1b"
          },
          { label: "Pressure", data: cityPressure, borderColor: "#3e8e29" },
          { label: "Humidity", data: cityHumidity, borderColor: "#175074" }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day",
                displayFormats: {
                  day: "MMM DD"
                }
              }
            }
          ]
        }
      }
    });
  };

  getChartCoordinates = () => {
    const { weatherList } = this.props;
    const cityTemp = weatherList.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.temp;
      return obj;
    });
    const cityPressure = weatherList.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.pressure;
      return obj;
    });
    const cityHumidity = weatherList.map(weather => {
      const obj = {};
      obj.x = new Date(weather.dt_txt);
      obj.y = weather.main.humidity;
      return obj;
    });

    return {
      cityTemp: cityTemp,
      cityPressure: cityPressure,
      cityHumidity: cityHumidity
    };
  };

  render() {
    return <canvas id="myChart" width="400" height="400" />;
  }
}

export default WeatherChart;
