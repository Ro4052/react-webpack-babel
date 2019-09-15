import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default App;
