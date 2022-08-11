import { useState } from 'react';
import {Container, Row,Col, Form, Input } from 'reactstrap';

function MyForm02() {

    const [fName,setFirstName] = useState("");
    const [lName,setLastName] = useState("");
    const [counter,setCounter] = useState(0);

    const _increment=(e)=>{
        e.preventDefault()
        return setCounter(counter+1);
    }
    const _decrement=(e)=>{
        e.preventDefault();
        return setCounter(counter-1)
    }


    

    return(
        <>
        <Form>
            <Row>
                <Col>
                <Input name='fName' placeholder='Enter First Name' value={fName} onChange={e=>setFirstName(e.target.value)} />
                </Col>
               
                <Col>
                <Input name='lName' placeholder='Enter Last Name' value={lName} onChange={e=>setLastName(e.target.value)} />
                </Col>
            </Row>
        </Form>
        
        <p>My name is {fName} {lName} </p>
        <div>
            <p>Counter: {counter}</p>
            <button onClick={_increment} >+</button>
            <button onClick={_decrement} >-</button>
            </div>

        </>
    )

}

// function increment(e,counter){
//     e.preventDefault();
//     counter=counter+1;
// }

// function decrement(e,counter){
//     e.preventDefault();
//    counter=counter-1;
// }

export default MyForm02;