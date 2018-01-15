import React from 'react';
import Comment from './../raw/comment';
import FrontImage from './../raw/frontImage';
import Header from './../header/nav.js';
class HomePage extends React.Component{
    render(){
      return (
        <div>
          <Header/>
          <div className="page-wrapper">
            <FrontImage/>
            <div className="container-fluid">
              <br/>
              <div className="panel panel-primary">
                <div className="panel-heading text-center">
                  Comentarios:
                </div>
                <div className="panel-body">
                  <Comment id = "1"> Hola </Comment>
                  <Comment id = "2"> Como  </Comment>
                  <Comment id = "3"> Estas </Comment>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default HomePage;
