import React from 'react';
import Comment from './comment';
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


  eachComment(text,i){
    return (
        <Comment removeCommentText = {this.removeComment} updateCommentText = {this.updateComment} index = {i} >
      {text} </Comment>);
  }

  render(){
    return(
    <div>
      <div className="text-center">

        <div className="row text-center" >
            <div className="container-fluid">
              <label for="comment">  Ingrese texto del comentario : </label>
              <input id ="comment" ref="newText" className="form-control" type="text"/>
            </div>
        </div>
        <br/>
        <div className="row">
          <button type="button" onClick = {this.addComment} className="btn btn-info"> Agregar comentario</button>
        </div>

      </div>
      <br/>
      {this.state.comments.map(this.eachComment)}
    </div>
  );

  }
}

export default ManagerComments;
