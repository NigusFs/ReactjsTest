import React from 'react';
import HomePage from './components/pages/homepage';
import LoginPage from './components/pages/loginpage';
import{
  BrowserRouter as Router,
  Route
//  Link
} from 'react-router-dom';
import './import_index';
class App extends React.Component {
  render(){
    return (
      <Router>
        <div>

          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/login' component = {LoginPage} />

        </div>
      </Router>
    );
  }
}

export default App;
