import React, { useState } from "react";

const MyUseMemo = () => {
  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);
  const doubleNumber = slowfunction(num);

  function slowfunction() {
    console.log("Re-render")
    for (let i = 0; i < 100000000; i++) {}
    return num * 10;
  }
  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <div>Counter: {counter}</div>
      <div>{doubleNumber}</div>
    </>
  );
};

export default MyUseMemo;