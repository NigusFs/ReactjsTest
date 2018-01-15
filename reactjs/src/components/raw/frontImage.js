import React from 'react';
import logo from './../../static/img/logo.svg';
import Date from './date.js';
import './../../css/App.css'
class FrontImage extends React.Component {
  render() {
    return (
        <div className="panel panel-primary">
          <div className="panel-body">
            <div className="row text-center">
              <div className="col-lg-6">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title"> Desarrollando con ReactJs. </h1>
              </div>
              <div className="col-lg-6">
                <Date> </Date>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default FrontImage;
