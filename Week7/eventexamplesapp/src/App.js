import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConverter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();  
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello = () => {
    alert("Hello! Member1");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event object:", event);
  };

  render() {
    return (
      <div className="App">
        <h2>{this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button><br /><br />

        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button><br /><br />

        <button onClick={this.handleSyntheticClick}>Click on me</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
