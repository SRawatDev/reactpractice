import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter app please enter the button {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;