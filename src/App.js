import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import DashboardHome from "components/DashboardHome";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
          Welcome to a Weather App
          <Grid>
            <Row>
              <Col xs={12} mdOffset={1} md={10}>
                <DashboardHome />
              </Col>
            </Row>
          </Grid>
        </header>
        <section />
      </div>
    );
  }
}

export default App;
