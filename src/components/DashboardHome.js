import React, { Component } from "react";

import Search from "components/weather/search/Search";
import WeatherResult from "components/weather/WeatherResult";
import fetchWeather from "services/fetchWeather";

import "./DashboardHome.scss";

const DEFAULT_CITY = "warsaw";

class DashboardHome extends Component {
  state = {
    city: "",
    countryCode: "pl",
    weatherData: []
  };

  handleChangeSearch = ev => {
    ev.persist();

    this.setState(() => {
      return {
        city: ev.target.value
      };
    });
  };

  handleSubmitForm = ev => {
    ev.preventDefault();

    this.setState(
      currentState => {
        return {
          city: !!currentState.city.trim() ? currentState.city : DEFAULT_CITY
        };
      },
      () => {
        fetchWeather(this.state.city.trim(), this.state.countryCode).then(
          weatherResp => {
            this.setState(() => {
              return {
                weatherData: weatherResp
              };
            });
          }
        );
      }
    );
  };

  render() {
    return (
      <>
        <Search
          city={this.state.city}
          handleChangeSearch={this.handleChangeSearch}
          handleSubmitForm={this.handleSubmitForm}
        />
        {this.state.weatherData &&
        this.state.weatherData.list &&
        this.state.weatherData.list.length ? (
          <WeatherResult
            cityName={this.state.city}
            weatherData={this.state.weatherData}
          />
        ) : null}
      </>
    );
  }
}

export default DashboardHome;
