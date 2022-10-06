import { useSelector, useDispatch } from "react-redux"
import { DECREMENT, INCREMENT } from "./action";

const Counter02 = () => {

  const counter = useSelector((state)=>{
    console.log(state.CounterReducer02);
    return state.CounterReducer02;
  })

  const dispatch = useDispatch();
  const increment = () => dispatch({type:INCREMENT});
  const decrement = () => dispatch({type:DECREMENT}); 

  return(
    <>
    <p>Counter: {counter.counter}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter02;