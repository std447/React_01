import { useState } from 'react';
import {Container, Row} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import {add,substract,multiply,divide} from './calcSlice'

const MeraCalci01 = () => {

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const result = useSelector((state) => state.MeraCalcSlice);
  const dispatch = useDispatch();
  const dispatchAdd = () => {dispatch(add({num1,num2}))}
  const dispatchSubstract = () => {dispatch(substract({num1,num2}))}
  const dispatchMultiply = () => {dispatch(multiply({num1,num2}))}
  const dispatchDivide = () => {dispatch(divide({num1,num2}))}


  return(
    <>
      <Container>
        <Row>
          <label htmlFor='num1'>Num1: </label>
          <input type="number" value={num1} onChange={(e)=> setNum1(e.target.value)} />
          <label htmlFor='num2'>Num2: </label>
          <input type="number" value={num2} onChange={(e)=> setNum2(e.target.value)} />
        </Row>
        <Row>
          <button onClick={dispatchAdd}>Add</button>
          <button onClick={dispatchSubstract}>Substract</button>
          <button onClick={dispatchMultiply}>Multiply</button>
          <button onClick={dispatchDivide}>Divide</button>
        </Row>
        <h2>Result:{result.result}</h2>
      </Container>

    </>
  )
}

export default MeraCalci01