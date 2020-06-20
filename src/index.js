import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./components/StateDemo";
import Toggle from "./components/EventDemo";
import NumberList from "./components/ListsDemo";
import Reservation from "./components/FormDemo";
import Calculator from "./components/LiftState";
import { AutoFocusTextInput } from "./components/RefDemo";
import { MouseTracker } from "./components/RenderProps";
import { Example } from "./components/HookDemo";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    {/* <Clock /> */}
    {/* <Toggle /> */}
    {/* <NumberList numbers={[1, 2, 3, 4]} /> */}
    {/* <Reservation /> */}
    {/* <Calculator /> */}
    {/* <AutoFocusTextInput /> */}
    {/* <MouseTracker /> */}
    {/* <Example /> */}
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
