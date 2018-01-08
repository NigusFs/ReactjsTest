class Navigation extends React.Component{
  render(){
    return (
      <div>
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href=""> Administración Comentarios v1</a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#"><i className="fa fa-user fa-fw"></i> Usuario </a>
                    </li>
                    <li><a href="#"><i className="fa fa-gear fa-fw"></i> Configuración </a>
                    </li>
                    <li className="divider"></li>
                    <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Cerrar sesión </a>
                    </li>
                </ul>
            </li>
        </ul>

        <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                    <li>
                      <a href="/index"> <i className="fa fa-tasks"></i> Página Principal </a>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <Navigation/>,
  document.getElementById('nav')
)
