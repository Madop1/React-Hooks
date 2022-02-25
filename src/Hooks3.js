import React, { useState, createContext, useContext } from "react";

//Using Hook concept
const UserContext = createContext();
function Hooks3() {
  const [data, setData] = useState("World");
  return (
    <div style={{ textAlign: "center"}}>
      <UserContext.Provider value={data}>
        <h2>{`Hey ${data}`}</h2>
        <Comp2 data={data} />
      </UserContext.Provider>
    </div>
  );
}

function Comp2() {
  return (
    <div style={{ textAlign: "center"}}>
      <h2>Welcome to Component 2</h2>
      <Comp3 />
    </div>
  );
}
function Comp3() {
  return (
    <div style={{ textAlign: "center"}}>
      <h2>Welcome to component 3</h2>
      <Comp4 />
    </div>
  );
}
function Comp4() {
  return (
    <div style={{ textAlign: "center"}}>
      <h2>Hello this is Component 4</h2>
      <Comp5 />
    </div>
  );
}

function Comp5() {
  const data = useContext(UserContext);
  return (
    <div style={{ textAlign: "center"}}>
      <h2>The Prop is passsed in component 5 using useContext HOOK</h2>
      <div>{`Hey ${data} again !!`}</div>
    </div>
  );
}
export default Hooks3;
