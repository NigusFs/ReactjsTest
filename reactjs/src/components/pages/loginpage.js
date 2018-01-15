import React from 'react';
import Comment from './../raw/comment';
import FrontImage from './../raw/frontImage';
import Header from './../header/nav';
import {Link} from 'react-router-dom';
class LoginPage extends React.Component{
    render(){
      return (
        <div>
          <div className="page-wrapper">
            <FrontImage/>
          </div>
          <br/>
          <div className="container">
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
										<input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value=""/>
									</div>
									<div className="form-group">
										<input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
									</div>
									<div className="form-group text-center">
										<input type="checkbox" tabindex="3" className="" name="remember" id="remember"/>
										<label for="remember"> Remember Me</label>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<Link to = "/" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-success">
                          Ingresar
                        </Link>
											</div>
										</div>
									</div>
									<div className="text-center">
										<a href="" tabindex="5" className="forgot-password">Forgot Password?</a>
									</div>
								</form>
							</div>
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
export default LoginPage;
