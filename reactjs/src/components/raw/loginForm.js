import React from 'react';
import {Link} from 'react-router-dom';
class loginForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username : 'Juanito',
        password : '123'
      }
    }

    render(){
      return (
        <div>
        <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-login">
            <div className="panel-heading">
              <div className="row text-center">
                <strong> Login </strong>
              </div>
              <hr/>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <form id="login-form" action="" method="post" role="form" style={{display: 'block'}}>
                    <div className="form-group">
                      <input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder = {this.state.username} />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" id="password" tabIndex="2" className="form-control" defaultValue={this.state.password}/>
                    </div>
                    <div className="form-group text-center">
                      <input type="checkbox" tabIndex="3" className="" name="remember" id="remember"/>
                      <label htmlFor="remember"> Recordar  </label>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                          <Link to = "/" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-success">
                            Ingresar
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="/login" tabIndex="5" className="forgot-password">Forgot Password?</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      );
    }
}
export default loginForm;
