import { useState } from "react";
import ChildComp from "./childtask";

const ParentComp = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>(Parent) +</button>
        <ChildComp decrement={handleDecrement} count={counter} />
      </div>
    </>
  );
};

export default ParentComp;
