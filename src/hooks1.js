import React, { useReducer } from "react";

//PRACTISING USEREDUCER HOOK

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function Hooks1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      
      <div style={{ textAlign: "center" }}>
    
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
        <h2>{count}</h2>
      </div>
    </>
  );
}

export default Hooks1;
