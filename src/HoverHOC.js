import React from "react";
import "./App.css";
import UpdatedComponent from "./HocComponent";

function HoverHOC(props) {
  const { count, increment } = props;
  return (
    <div className="App" onMouseOver={increment}>
     You Hovered {count} times
    </div>
  );
}

export default UpdatedComponent(HoverHOC);
