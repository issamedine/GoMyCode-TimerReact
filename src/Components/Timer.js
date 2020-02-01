import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:false,// it is paused 
      runingTime:0,
      secondes: 0,
      minutes: 0,
      heures: 0
    };
  
    setInterval( () => {
      if(this.state.status){
        if(this.state.secondes < 60) {
          this.setState({secondes:this.state.secondes+1})
        }
        if(this.state.secondes > 59){
          this.setState({minutes:this.state.minutes+1});
          this.setState({secondes:0})
        }
        if(this.state.minutes > 59){
          this.setState({heures:this.state.heures+1});
          this.setState({minutes:0});
          this.setState({secondes:0})
        }
        
      }
    } , 1000)
}
  


  clickSart=()=>{
         this.setState({status:!this.state.status})
  }
  
  clickRest=()=>{
    this.setState({ status:false,// it is paused 
      runingTime:0,
      heures: 0,
      secondes: 0,
      minutes: 0})
  }

  zeroPad(value) {
    return value < 10 ? `0${value}` : value;
  }


//padStart 
  render() {
    return (
      <div className="wrapper-timer">
        <div className="display">
          <div className="state"></div>
          <div className="segments">
            <span className="mins">{this.zeroPad(this.state.heures)}:</span>
            <span className="secs">{this.zeroPad(this.state.minutes)}:</span>
            <span className="millis">{this.zeroPad(this.state.secondes)}</span>
          </div>
        </div>

        <div className="actions">
          <button className="btn-start" onClick={this.clickSart}>{this.state.status?"Paused":"Start"}</button>

        

          <button className="btn-reset"  onClick={this.clickRest}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Timer;
