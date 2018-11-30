import React, { Component } from 'react'

import Search from "components/weather/search/Search";
import WeatherResult from "components/weather/WeatherResult";
import fetchWeather from "services/fetchWeather"

import './DashboardHome.scss'

class DashboardHome extends Component {
  state = {
    city: '',
    countryCode: 'pl',
    weatherData: []
  }
  
  handleChangeSearch = (ev) => {
    ev.persist();
    
    this.setState(() => {
      return {
        city: ev.target.value
      }
    })
  }

  handleSubmitForm = (ev) => {
    ev.preventDefault();

    fetchWeather(this.state.city, this.state.countryCode)
      .then(weatherResp => {
        this.setState(() => {
          return {
            weatherData: weatherResp
          }
        })
      })
  }
  
  render() {
    return(
      <>
        <Search 
          city={this.state.city}
          handleChangeSearch={this.handleChangeSearch}
          handleSubmitForm={this.handleSubmitForm}
        />
        {this.state.weatherData.list && this.state.weatherData.list.length
          ? <WeatherResult weatherData={this.state.weatherData} />
          : null
        }
      </>
    )
  }
}

export default DashboardHome;