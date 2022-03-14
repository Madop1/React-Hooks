import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/CounterSlice";

function CounterFile() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>The Coint is: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </>
  );
}

export default CounterFile;

