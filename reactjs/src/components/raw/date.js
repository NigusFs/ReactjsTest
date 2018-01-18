import React from 'react';

class Datetime extends React.Component{
  constructor(props) {
      super(props);
      this.state = { date: new Date()};
  }

  componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }

  componentWillDismount(){
    clearInterval(this.timerID);
  }

  tick(){
    if(this.refs.myRef){
      this.setState({
        date: new Date()
      });
    }
  }

  render(){
    return (
      <div className="row" ref="myRef">
        <h1> La hora de hoy es !</h1>
        <h2>{ this.state.date.toLocaleTimeString()}.</h2>
      </div>
     );
  }
}



export default Datetime;
