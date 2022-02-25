import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
// import Example from "./hooks";
// import Hooks1 from "./hooks1";
// import Counter from "./hooks";
// import Hooks2 from "./Hooks2";
// import Hooks3 from "./Hooks3";
// import CounterFile from "./CounterFile";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Fetch from "./Fetch";
import Axios from "./Axios";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Example /> */}
      {/* <CounterFile />
      <Counter />
      <Hooks1 />
      <Hooks2 />
      <Hooks3 /> */}
      <Fetch />
      <Axios />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);