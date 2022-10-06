import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./CalcSlice";


const Calculator03 = () => {
  
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const state = useSelector(state =>state.MyCalcSlice)
  const dispatch = useDispatch();

  const dispatchAdd = () => {
    dispatch(add({num1,num2}))
  }

  return(
    <>
      <p>{state.isFetching ? "Loading": state.result}</p>
      <input type="number" name="num1" value={num1} onChange={(e)=>setNum1(e.target.value)} />
      <input type="number" name="num2" value={num2} onChange={(e)=>setNum2(e.target.value)} />

      <button onSubmit={dispatchAdd}>Add</button>
    </>
  )
}

export default Calculator03;