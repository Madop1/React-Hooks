import React, { useState, useEffect } from "react";

//USEEFFECT HOOK PRACTISE

// export default function Example() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div style={{textAlign : 'center'}}>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const s = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => clearInterval(s);
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
// import React, { useState, useEffect } from 'react';

// const useDocumentTitle = title => {
//   useEffect(() => {
//     document.title = title;
//   }, [title])
// }

// function CustomCounter() {
//   const [count, setCount] = useState(0);
//   const incrementCount = () => setCount(count + 1);
//   useDocumentTitle(`You clicked ${count} times`);
//   // useEffect(() => {
//   //   document.title = `You clicked ${count} times`
//   // });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={incrementCount}>Click me</button>
//     </div>
//   )
// }
// export default CustomCounter;
