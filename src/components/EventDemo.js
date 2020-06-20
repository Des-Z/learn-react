import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    /**
     * In Js, class methods are NOT bound by default.
     * you have to bind it explicitly.
     * binding below is necessary to make `this` work in the callback
     */
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log('isToggleOn: ' + this.state.isToggleOn);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      //be careful the meaning of this in callback 
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
