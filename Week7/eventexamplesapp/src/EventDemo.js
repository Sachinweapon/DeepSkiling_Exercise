import React, { Component } from 'react';

class EventDemo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sayHello = () => {
    alert("Hello! You clicked Increment.");
  };

  handleClick() {
    this.increment();
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (event) => {
    event.preventDefault(); // Synthetic event
    alert("I was clicked (synthetic event)");
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleClick}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>{" "}
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>{" "}
        <button onClick={this.handleSyntheticEvent}>Synthetic Event</button>
      </div>
    );
  }
}

export default EventDemo;
