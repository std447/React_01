import { useDispatch, useSelector } from "react-redux"
import { INCREMENT, DECREMENT } from "./action"

const Counter01 = () => {
  const counter = useSelector((state)=>{
    console.log(state);
    return state.CounterReducer;
  })

  const dispatch = useDispatch()

  const increment = () => {dispatch({type:INCREMENT})};
  const decrement = () => {dispatch({type:DECREMENT})};

  console.log("@Selector - Counter:", counter);
  return(
    <>
    <button onClick={increment} >+</button>
    <p>{counter}</p>
    <button onClick={decrement} >-</button>    
    </>
  )
}

export default Counter01;