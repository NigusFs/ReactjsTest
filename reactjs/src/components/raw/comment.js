import React from 'react';

class Comment extends React.Component{

  constructor(props){
    super(props);
    this.state = { editing : false};
  }

  editComment = () => {
    this.setState({
      editing : true
    });
  }

  answerComment = () =>{
    alert("Respondiendo comentario nro : " + this.props.id.toString());
  }

  saveComment = () => {
    this.setState({
       editing : false
     });
  }

  cancelComment = () => {
    this.setState({
       editing : false
     });
  }

  renderNormal(){
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
              <div className = "row">
                <p> {this.props.children} </p>
              </div>
              <div className = "row">
                <button type="button" onClick = {this.editComment} className="btn btn-info"> Editar comentario </button>
              </div>
              <br/>
              <div className="row">
                <button type="button" onClick = {this.answerComment} className="btn btn-primary"> Responder comentario </button>
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

  renderForm(){
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
              <div className="row">
                <div className = "col-lg-2">
                </div>
                <div className = "col-lg-8">
                  <input className="form-control" type="text" value={this.props.children}/>
                  <br/>
                </div>
                <div className = "col-lg-2">
                </div>
              </div>
              <div className="row">
                <button type="button" onClick = {this.saveComment} className="btn btn-success"> Guardar </button>
              </div>
              <br/>
              <div className="row">
                <button type="button" onClick = {this.cancelComment} className="btn btn-danger"> Cancelar </button>
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

  render(){
    if(this.state.editing){
      return this.renderForm();
    }
    else{
      return this.renderNormal();
    }
  }
}

export default Comment;
