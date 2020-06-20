import React from "react";

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
    </div>
  );
}

/**
 * interface user {
 *    avatarUrl
 *    name
 * }
 * Component specifies its own interface, which includes names and structures.
 * @param {user} props
 */
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

/**
 *
 * @param {date} props
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  /**
   * any internal state changes should be done via 
   * this.setState API, which signals react framework 
   * to refresh UI.
   */
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  /**
   * Fixed-time interval calling is NOT a react mechanism, its
   * provided by window object?
   * this keep-calling timer should be taken as resource, which needs
   * to be reclaimed right before unmount of this component
   */
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
