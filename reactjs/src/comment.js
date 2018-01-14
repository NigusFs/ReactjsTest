import React from 'react';

class Comment extends React.Component{
  render(){
    return (
      <div className = "row">
        <div className = "col-lg-3">
          <br/>
        </div>
        <div className = "col-lg-6">
          <div className = "panel panel-default">
            <div className = "panel-heading text-center">
                <p> Comentario Nro : {this.props.id} </p>
            </div>
            <div className = "panel-body text-center">
              <p> {this.props.children} </p>
              <div className = "row">
                <div className = "col-lg-6">
                  <button type="button" className="btn btn-info"> Editar comentario </button>
                </div>
                <div className = "col-lg-6">
                  <button type="button" className="btn btn-primary"> Responder comentario </button>
                </div>
              </div>
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

export default Comment;
