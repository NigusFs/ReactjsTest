import React from 'react';

class Comment extends React.Component{

  constructor(props){
    super(props);
    this.state = { editing : false};
    this.editComment = this.editComment.bind(this);
    this.answerComment = this.answerComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  editComment(){
    this.setState({
      editing : true
    });
  }

  answerComment(){
    alert("Respondiendo comentario nro : " + this.props.id.toString());
  }

  saveComment(){
    var comment = this.refs.newComment.value;
    this.props.updateCommentText(comment,this.props.index)
    this.setState({
       editing : false
     });

  }

  cancelComment(){
    this.setState({
       editing : false
     });
  }

  deleteComment(){
    this.props.removeCommentText(this.props.index)
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
                <button type="button" onClick = {this.editComment} className="btn btn-info"> Editar </button>
              </div>
              <br/>
              <div className="row">
                <button type="button" onClick = {this.deleteComment} className="btn btn-danger"> borrar</button>
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
                <p> Comentario Nro : {this.props.index} </p>
            </div>

            <div className = "panel-body text-center">
              <div className="row">
                <div className = "col-lg-2">
                </div>
                <div className = "col-lg-8">

                  <input className="form-control" ref="newComment" type="text" defaultValue ={this.props.children}/>
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
