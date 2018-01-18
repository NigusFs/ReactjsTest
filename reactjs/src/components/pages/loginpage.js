import React from 'react';
import './../../css/App.css'
import FrontImage from './../raw/frontImage';
import LoginForm from './../raw/loginForm'
class LoginPage extends React.Component{
    render(){
      return (
        <div className="background-color">

          <div className="page-wrapper">
            <FrontImage/>
          </div>
          <br/>
          <div className="container">
            <LoginForm/>
	        </div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        </div>
      );
    }
}
export default LoginPage;
