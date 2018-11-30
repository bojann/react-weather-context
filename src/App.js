import React, { Component } from 'react';

import DashboardHome from "components/DashboardHome";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to 5 days weather App
          <br />
          <DashboardHome />
        </header>
        <section>
        </section>
      </div>
    );
  }
}

export default App;
