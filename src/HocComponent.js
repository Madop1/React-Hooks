import React from "react";

//const Newcomponent = HOC(OriginalComponent)

//Ironman = withsuit(Tonystark);

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
      setCount((count) => count + 1);
    };
    return <OriginalComponent count={count} increment={increment} />;
  }
  return NewComponent;
};

export default UpdatedComponent;
