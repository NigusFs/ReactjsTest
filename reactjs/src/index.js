import React from 'react';
import ReactDOM from 'react-dom';
import './import_index.js'
import App from './App';
import Comment from './comment';
import Navigation from './nav';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

ReactDOM.render(
  <div>
    <Comment id = "1"> Hola </Comment>
    <Comment id = "2"> Como </Comment>
    <Comment id = "3"> Estas </Comment>
    <Comment id = "4"> Marica </Comment>
  </div>,
  document.getElementById('comment')
);


ReactDOM.render(
  <Navigation />,
  document.getElementById('nav')
);

//registerServiceWorker();
