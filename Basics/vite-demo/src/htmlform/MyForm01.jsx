import { Component } from 'react';
import {Container, Row,Col, Form, Input } from 'reactstrap';

class MyForm extends Component{
    state = {
        fName:"",
        lName:"",
        email:"",
        contactNumber:"",
    }

    render(){
        const { fName, lName, email, contactNumber } = this.state;

        return(
            <>
            <Container className='my-2'>
            <Row>
                <Col>
                <Input placeholder='Enter Name' value={fName} onChange='' >

                </Input>
                </Col>

                <Col>
                <Input placeholder='Enter Name' value={lName} onChange='' >

                </Input>
                </Col>
            </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Input type='email' placeholder='someone@example.com' onChange='' value={email}>
                    
                    </Input>
                    </Col>

                    <Col>
                    <Input type='number' placeholder='Enter Contact' onChange="{}" value={contactNumber}></Input>
                    </Col>
                    
                </Row>

            </Container>
            </>
        )
    }
}