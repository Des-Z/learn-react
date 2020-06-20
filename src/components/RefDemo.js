import React from "react";

/**
 * React will assign the current property with the DOM element
 * when the component mounts, and assign it back to null when it unmounts.
 * ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.
 */
export class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    //ref has current attribute referring the DOM node
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }

  //auto focus to this component after mount.
  componentDidMount() {
    //if current refers to react component, 
    this.textInput.current.focusTextInput();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}
