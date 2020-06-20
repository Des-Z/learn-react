import React from "react";

/**
 * Form always keeps its internal state, we use react state as
 * the "single source of truth", which reflects the current input data.
 */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      sValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSelectChange(event) {
    this.setState({ sValue: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted : " + this.state.value);
    alert("A select value was submit : " + this.state.sValue);
    event.preventDefault();
  }

  /**
   * selected value in select form in JSX are set as value attribute of select tag
   * Now input / textarea / select behaves similarly, they all have attribute "value"
   * to reflect user input.
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Copy of Name:
            <textarea value={this.state.value} />
          </label>
        </div>
        <div>
          <label>
            <select
              multiple={true}
              value={this.state.sValue}
              onChange={this.handleSelectChange}
            >
              <option value="grape">Grape</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
              <option value={["B", "C", "A"]}>A,B,C</option>
            </select>
          </label>
        </div>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let name;
    let value;
    //use event.target.name to identify what has changed.
    switch (target.name) {
      case "isGoing":
        //this.setState((state) => ({ isGoing: !this.state.isGoing }));
        name = "isGoing";
        value = !this.state.isGoing;
        break;
      case "numberOfGuests":
        //this.setState({ numberOfGuests: target.value });
        name = "numberOfGuests";
        value = target.value;
        break;
      default:
        break;
    }
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going?
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            name="numberOfGuests"
            type="number"
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Reservation;
