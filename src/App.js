import React, { Component } from "react";
import Timer from "./Components/Timer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
    <div className="App">
      <Timer/>
    </div>
    )
  }
}

export default App;
