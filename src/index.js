import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import CounterHOC from "./CounterHOC";
// import HoverHOC from "./HoverHOC";
// import RouterDom from "./RouterDom";
// import App from "./App.js";
// import Example from "./hooks";
// import Hooks1 from "./hooks1";
// import Counter from "./hooks";
// import Hooks2 from "./Hooks2";
// import Hooks3 from "./Hooks3";
// import CounterFile from "./CounterFile";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import Fetch from "./Fetch";
// import Axios from "./Axios";
import "./index.css";
import Loader from "./Loader";

const Fetch = React.lazy(() => import("./Fetch"));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <Suspense fallback={<Loader/>}>
        {/* <App /> */}
        {/* <Example /> */}
        {/* <CounterFile /> */}
        {/* <Counter /> */}
        {/* <Hooks1 /> */}
        {/* <Hooks2 />
      <Hooks3 /> */}
      {/* <Loader /> */}
        <Fetch />
        {/* <Axios /> */}
        {/* <RouterDom /> */}
        {/* <CounterHOC /> */}
        {/* <HoverHOC /> */}
    </Suspense>
      </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
