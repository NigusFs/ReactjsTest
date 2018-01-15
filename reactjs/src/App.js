import React, { Component } from 'react';
import logo from './logo.svg';
import Date from './date.js';
// <!-- App.css -->
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="panel text-center">
          <div className="row">
            <div className="col-lg-6">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title"> Desarrollando con ReactJs. </h1>
            </div>
            <div className="col-lg-6">
              <Date> </Date>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
