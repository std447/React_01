import { useState } from "react";
import { Form, Row, Col, Input, FormGroup, Label, Button} from 'reactstrap';

function MyCalc() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [operator, setOperator] = useState();

    const result = (num1,num2,cb)=> cb(num1,num2);
    
    const plus = (a,b) => a+b;
    const minus = (a,b)=>a-b;
    const multiply = (a,b)=>a*b;
    const divide = (a,b)=>a/b;
    const mod = (a,b) => a%b;




    return(
        <>
        <Form>
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="num1">First Number</Label>
                        <Input type="number" id="num1" name="num1" placeholder="Enter Number" value={num1} onChange={e=>setNum1(e.target.value)} />
                    </FormGroup>
                </Col>

                <Col md={2}>
                    <FormGroup>
                        <Label for="operation">Operation</Label>
                        <Input id="operation" name="select"  type="select" value={operator} onSelect={(e)=>setOperator(e.target.option)} >
                            <option value="Select">Select</option>
                            <option value="plus">+</option>
                            <option value="minus">-</option>
                            <option value="multiply">*</option>
                            <option value="divide">/</option>
                            <option value="mod">%</option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup>
                        <Label for="num2">Second Number</Label>
                        <Input type="number" id="num2" name="num2" placeholder="Enter Number" value={num2} onChange={e=>setNum2(e.target.value)} />
                    </FormGroup>
                </Col>

                <Button onClick={e=>result(num1,num2,operator)}>=</Button>
            </Row>

            

            <div>Result: {num1} {operator} {num2} = </div>
        </Form>
        
        </>
    )
}

export default MyCalc;