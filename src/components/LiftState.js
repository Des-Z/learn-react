import React from "react";

/**
 *  When multiple components need to sync on state, we "lift" the state up to their
 *  common ancestors.
 */

function BoilingVerdict(props) {
  if (props.boiled) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(scale, e) {
    let input = parseFloat(e.target.value);
    if (Number.isNaN(input)) {
      this.setState({
        temperature: "",
        scale: "",
      });
    } else {
      if (scale === "c") {
        this.setState({
          temperature: input,
          scale: "c",
        });
      } else {
        this.setState({
          temperature: input,
          scale: "f",
        });
      }
    }
  }

  render() {
    const t = this.state.temperature;
    const scale = this.state.scale;
    let celsius = "";
    let fahrenheit = "";
    if (t !== "") {
      celsius = scale === "c" ? t : toCelsius(t);
      fahrenheit = scale === "f" ? t : toFahrenheit(t);
    }

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          handleChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          handleChange={this.handleChange}
        />
        <BoilingVerdict boiled={t > 100} />
      </div>
    );
  }
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input
        type="number"
        value={props.temperature}
        onChange={props.handleChange.bind(this, props.scale)}
      />
    </fieldset>
  );
}

export default Calculator;
