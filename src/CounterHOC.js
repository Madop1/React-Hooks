import React from "react";
import "./App.css";
import UpdatedComponent from "./HocComponent";

function CounterHOC(props) {
  const { count, increment } = props;
  return (
    <div className="App">
      <button onClick={increment}>You clicked {count} times</button>
    </div>
  );
}

export default UpdatedComponent(CounterHOC);
