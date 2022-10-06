import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { add } from './slice'

const FlowOfReduxSaga = () => {

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const state = useSelector((state)=> state.ReduxSagaFlowSlice);
  const dispatch = useDispatch()

  console.log("@CC Step 7 : Reducer state: ", state);

  const dispatchAdd = () => {
    console.log("@CC 1 Dispatching addnumber request");
    dispatch(add({num1,num2}));
    console.log("@CC 1.1 Request dispatched");
  }

 

  return(
    <>
    <p>Result : {state.isFetching?"Loading":state.result}</p>

    <div>
      <input type="number" name="num1" value={num1} onChange={(e)=>setNum1(e.target.value)} />
      <input type="number" name="num2" value={num2} onChange={(e)=>setNum2(e.target.value)} />
      <button onClick={dispatchAdd}>Add</button>
    </div>
    </>
  )
}

export default FlowOfReduxSaga;