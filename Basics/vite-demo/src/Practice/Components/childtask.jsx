import { useState } from "react";

const ChildComp = ({decrement, count})=>{

const [childCount, setChildCount]=useState(0);

  return (
    <>
    <button onClick={decrement}>(Child) - </button>
    <p>child: {childCount}</p>
    </>
  )
}

export default ChildComp;