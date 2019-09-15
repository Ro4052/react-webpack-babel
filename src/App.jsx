import React, { Component } from "react";

import styles from "./App.css";

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
        <p className={styles.count}>{this.state.count}</p>
        <button className={styles.incrementButton} onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default App;
