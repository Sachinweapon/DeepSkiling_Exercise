import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;

    if (currency.toLowerCase() === 'euro') {
      const converted = amount * 80; // Example conversion rate
      alert(`Converting to Euro Amount is ${converted}`);
    } else {
      alert('Only Euro conversion supported in this example.');
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Currency:</label>
            <input
              type="text"
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
