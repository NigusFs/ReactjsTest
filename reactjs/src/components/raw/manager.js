import React from 'react';
import Comment from './comment';
import ids from 'short-id';
class ManagerComments extends React.Component{
  constructor(props){
    super(props);
    this.state = { comments : [
      'a',
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
    let arr = this.state.comments;
    let comment = this.refs.newText.value;
    if( comment.toString().length > 0){
      arr.unshift(comment);
      this.setState({comments:arr});
    }
    else {
      alert(" ingrese un texto ")
    }
  }


  eachComment(text,pos){
    console.log(text.toString());
    return (
        <Comment comment = {text} removeCommentText = {this.removeComment} updateCommentText = {this.updateComment} pos = {pos} key = {ids.generate()}>
       </Comment>);
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
