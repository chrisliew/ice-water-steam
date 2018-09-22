import React, { Component } from 'react';
import './App.css';

class TempForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: undefined,
      fahrenheit: ''
    }
    this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
    this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
  }

  handleChangeCelsius(event) {
    this.setState({
      celsius: event.target.value,
      fahrenheit: Math.round(this.convertCelsiusToFahrenheit(event.target.value))
    })
  }

  convertCelsiusToFahrenheit(degrees) {
    return ((degrees * 1.8) + 32);

  }

  handleChangeFahrenheit(event) {
    this.setState({
      fahrenheit: event.target.value,
      celsius: Math.round(this.convertFahrenheitToCelsius(event.target.value))
    })
  }

  convertFahrenheitToCelsius(degrees) {
    return ((degrees - 32) * (5 / 9));
  }

  render() {
    console.log("FFF", this.state.fahrenheit)
    return (
      <div>
        <form className="temp-input">
          Celsius:
          <input
            type="number"
            placeholder="Enter °C"
            value={this.state.celsius}
            onChange={this.handleChangeCelsius}
          />
          Fahrenheit:
          <input
            type="number"
            placeholder="Enter °F"
            value={this.state.fahrenheit}
            onChange={this.handleChangeFahrenheit}
          />
        </form>
        {this.state.celsius < 100 && this.state.celsius >= 0 &&
          <div className="state-output">
            <h2>Water!!</h2>
            <i className="fas fa-tint"></i>
          </div>
        }
        {this.state.celsius >= 100 &&
          <div className="state-output">
            <h2>Steam!!</h2>
            <i className="fab fa-cloudversify"></i>
          </div>
        }
        {this.state.celsius < 0 &&
          <div className="state-output">
            <h2>Ice!!</h2>
            <i className="fas fa-cube"></i>
          </div>
        }
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <h1>Water, Ice, or Steam Calculator</h1>
          <div className="main-content">
            <TempForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
