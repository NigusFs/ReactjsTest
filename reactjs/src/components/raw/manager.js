import React from 'react';
import Comment from './comment';
import ids from 'short-id';
class ManagerComments extends React.Component{
  constructor(props){
    super(props);
    this.state = { comments : [
      'a,,',
      'terminando el producto',
      'cachando como funciona'
    ] }
    this.updateComment = this.updateComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.eachComment = this.eachComment.bind(this);
  }

  updateComment(newText,i){
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments:arr});
  }

  removeComment(i){
    var arr = this.state.comments;
    arr.splice(i,1);
    this.setState({comments:arr});
  }

  addComment(){
    var arr = this.state.comments;
    arr.unshift(this.refs.newText.value);
    this.setState({comments:arr});
  }


  eachComment(text,pos){
    return (
        <Comment removeCommentText = {this.removeComment} updateCommentText = {this.updateComment} pos = {pos} key = {ids.generate()}>
      {text} </Comment>);
  }

  render(){
    return(
    <div>
      <div className="text-center">

        <div className="row" >
            <div className="container-fluid">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <label htmlFor="comment">  Agregar comentarios : </label>
                </div>
                <div className="panel-body">
                  <input id ="comment" ref="newText" className="form-control" type="text"/>
                  <br/>
                  <div className="row">
                  <button type="button" onClick = {this.addComment} className="btn btn-info"> Aceptar </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
      <br/>
      {this.state.comments.map(this.eachComment)}
    </div>
  );

  }
}
export default ManagerComments;
