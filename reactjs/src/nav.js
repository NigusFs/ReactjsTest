import React from 'react';
class Navigation extends React.Component{
  render(){
    return (
      <div>
        <div className="navbar-header">
            <a className="navbar-brand"> Administración Comentarios v1</a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
                <a className="dropdown-toggle">
                    Cerrar sesión
                </a>
            </li>
            <li className="dropdown">
                <a className="dropdown-toggle">
                    Perfil
                </a>
            </li>
        </ul>
      </div>
    );
  }
};
export default Navigation;
