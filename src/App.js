// import logo from './logo.svg';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Portal() {
  // Creating portal
  return ReactDOM.createPortal(
    <button>Click</button>,
    document.getElementById("portal")
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>  
      <div onClick={increment}>
        <p>you have clicked me {count} times</p>
        <Portal />
      </div>
    </>
  );
}
export default App;
