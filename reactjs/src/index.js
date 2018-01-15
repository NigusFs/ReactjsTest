import React from 'react';
import ReactDOM from 'react-dom';
import './import_index.js'
import App from './App';
import Comment from './comment';
import Navigation from './nav';

//import registerServiceWorker from './registerServiceWorker';
const element =
<div>

  <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: '0'}}>
  <Navigation/>
  </nav>
  <div className="page-wrapper">
    <div className="row">
      <App />
    </div>
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

ReactDOM.render(
  element,
  document.getElementById('root')
);


//registerServiceWorker();
