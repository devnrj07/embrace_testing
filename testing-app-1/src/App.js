import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isError: false,
    };
  }

  incrementCounter = () => {
    if (this.state.isError) {
      this.setState({ isError: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    if (this.state.counter === 0) {
      this.setState({ counter: 0, isError: true });
    } else if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    return (
      <div className="App" data-test="component-app">
        <div className="title" data-test="component-title">
          {" "}
          {this.state.counter >= 0 ? `Counter : ${this.state.counter}` : 0}
        </div>
        <div className="error-msg">
          {this.state.isError
            ? `Error : counter cannot be less than zero.`
            : ""}
        </div>
        <div className="btn-wrapper">
          <button
            className="btn increase"
            data-test="component-btn-inc"
            onClick={() => this.incrementCounter()}
          >
            {" "}
            +1{" "}
          </button>
          <button
            className="btn decrease"
            data-test="component-btn-dec"
            onClick={() => this.decrementCounter()}
          >
            {" "}
            -1{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
