import React from 'react';

class Comment extends React.Component{

  constructor(props){
    super(props);
    this.state = { editing : false , comment : this.props.comment};
    this.handleChange = this.handleChange.bind(this);
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
    this.props.updateCommentText(comment,this.props.pos)
    this.setState({
       editing : false
     });

  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  cancelComment(){
    this.setState({
       editing : false
     });
  }

  deleteComment(){
    this.props.removeCommentText(this.props.pos)
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
                <p> Comentario Nro : {this.props.pos} </p>
            </div>
            <div className = "panel-body text-center">
              <div className = "row">
                <p> {this.props.comment} </p>
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

                  <input onChange = {this.handleChange} className="form-control" ref="newComment" type="text" defaultValue ={this.props.comment}/>
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
