import React, { Fragment } from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: "relative", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

export class MouseTracker extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Move the mouse around</h1>
        <Mouse>{(mouse) => <Cat mouse={mouse} />}</Mouse>
      </Fragment>
    );
  }
}

//we need to share mouse position across components

export class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  /**
   * it gains better reusability if we could dynamically render what
   * to do with the mouse position, this is a typical use case of render props.
   *
   * a render prop is a function prop that a component uses to know what to render.
   * in fact, any prop that is a function that a component uses to know what to render
   * is technically a “render prop”
   */
  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}
