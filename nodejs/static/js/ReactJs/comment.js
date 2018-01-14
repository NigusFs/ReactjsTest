
      class ImgUser extends React.Component{
        render(){
          return(
            <img className = "img-responsive" src={this.props.src} alt={this.props.name} />
          );
        }
      }

      class Comment extends React.Component{
        render(){
          return (
            <div className = "row">
              <div className = "col-lg-3">
                <ImgUser src="img/profile.jpg" name = "pedro"/>
                <br/>
              </div>
              <div className = "col-lg-6">
                <div className = "panel panel-default">
                  <div className = "panel-heading">
                      <p> Comentario Nro : {this.props.id} </p>
                  </div>
                  <div className = "panel-body">
                    <p> {this.props.children} </p>
                  </div>
                </div>
              </div>
              <div className = "col-lg-3">
              </div>
              <br/>
            </div>
           );
        }
      }

      ReactDOM.render(
        <div>
          <Comment id = "1">Hola</Comment>
          <Comment id = "2"> Como</Comment>
          <Comment id = "3"> Estas</Comment>
          <Comment id = "4"> Marica</Comment>

        </div>,
        document.getElementById('test')
      );
