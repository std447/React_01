import { useDispatch, useSelector } from "react-redux";
import {
  SUM,
  SUBSTRACT,
  MULTIPLY,
  DIVIDE

} from "./action";
import { Container, Row } from "reactstrap";
import { useState } from "react";

const Calculator = () => {

  const select = useSelector((state) => {
    console.log(state);
    return state.CalcReducer;
  });

  const [number1,setNum1] = useState(0);
  const [number2,setNum2] = useState(0)

  const dispatch = useDispatch();
  const sum = () => dispatch({ type: SUM, payload:number1 + number2});
  const substract = () => dispatch({ type: SUBSTRACT,payload: number1 - number2 });
  const multiply = () => dispatch({ type: MULTIPLY,payload: number1*number2 });
  const divide = () => dispatch({ type: DIVIDE,payload:number1/number2 });
  const updateNum1 = (e) => {
    console.log("@CC Ln:25",e.target.value)
    setNum1(e.target.valueAsNumber);
  };

  const updateNum2 = (e) => {
    console.log("@CC Ln:25",e.target.value)
    setNum2(e.target.valueAsNumber);
  };

  

  // const updateNum1 = (e) =>{

  // const updateNum2 = (e) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   const { CalcReducer } = select;
  //   return { ...CalcReducer, num2: value };
  // };

  return (
    <>
      <Container>
        <Row>
          <input type="number" value={number1} onChange={updateNum1} />
          {"   "}
          <input type="number" value={number2} onChange={updateNum2} />
          <button onClick={sum}>+</button>
          <button onClick={substract}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>

          <span>SUM: {select.add}</span>
          <span>Substract: {select.substract}</span>
          <span>Multiply: {select.multiply}</span>
          <span>Divide: {select.divide}</span>

          
         
        </Row>
      </Container>
    </>
  );
};

export default Calculator;
