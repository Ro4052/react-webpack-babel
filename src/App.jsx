import React, { Component } from "react";

import jsLogo from "./js-logo.svg";
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
        <img src={jsLogo} />
        <p className={styles.count}>{this.state.count}</p>
        <button className={styles.button} onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default App;
