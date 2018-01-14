import React, { Component } from 'react';
import logo from './logo.svg';
// <!-- App.css -->
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Desarrollando con ReactJs. </h1>
      </div>
    );
  }
}

export default App;
