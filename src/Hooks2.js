import React, { useState } from "react";

//Normal way of passing a prop to nested components
function Hooks2() {
  const [user, setUser] = useState("HELLO ");

  return (
    <div style={{ textAlign: "center"}}>
      <h1>{`${user} World`}</h1>
      <CompA user={user} />
    </div>
  );
}

function CompA({ user }) {
  return (
    <div style={{ textAlign: "center"}}>
      <h3>CompA</h3>
      <CompB user={user} />
    </div>
  );
}

function CompB({ user }) {
  return (
    <div style={{ textAlign: "center"}}>
      <h3>CompB</h3>
      <CompC user={user} />
    </div>
  );
}

function CompC({ user }) {
  return (
    <div style={{ textAlign: "center"}}>
      <h3>CompC</h3>
      <CompD user={user} />
    </div>
  );
}
function CompD({ user }) {
  return (
    <div style={{ textAlign: "center"}}>
      <h3>CompD</h3>
      <div>{`${user} world again !!`}</div>
    </div>
  );
}

export default Hooks2;
