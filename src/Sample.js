import React, { useState } from "react";
import "./App.css"

function Sample() {
  const [textMessage, setTextMessage] = useState(false);
  const [textMsg, setTextMsg] = useState(false);
  const changeHandler = () => {
    setTextMessage(true);
    setTextMsg(true);
  };
  return (
    <div>
      <p>Hello world!!!</p>
      {!textMessage && <p>madophere</p>}
      {!textMessage && <p>madophere</p>}
      {textMessage && <p>Changed!!</p>}
      <button data-testid="btn1" onClick={changeHandler}>Click to change</button>

      {/* {!textMsg && <p>oldschool</p>} */}
      {textMsg && <p>Changed!!</p>}
      <button data-testid="btn" id="btn2" onClick={changeHandler}>Click to change</button>
    </div>
  );
}

export default Sample;
