import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
  render(){
    return (
      <header>
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: '0'}}>
          <div className="navbar-header">
              <a className="navbar-brand"> Administración Comentarios v1</a>
          </div>

          <ul className="nav navbar-top-links navbar-right">
              <li className="dropdown">
                  <Link className="dropdown-toggle" to = "/login">
                      Cerrar sesión
                  </Link>
              </li>
              <li className="dropdown">
                  <a className="dropdown-toggle">
                      Perfil
                  </a>
              </li>
          </ul>
        </nav>

      </header>
    );
  }
};
export default Header;
