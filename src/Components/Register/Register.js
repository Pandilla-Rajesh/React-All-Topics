import React, { useState } from "react";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import ReactMemo from "../CommonComp/ReactMemo";

const Register=()=>{
    
 const [reglist, setRegList] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    address:'',
    country:''
 })

const handleChange=(event)=>{
    const {name, value} = event.target
    setRegList({...reglist, [name]: value})
}

const [error, setError] = useState({})

const handleSubmit=(e)=>{
    e.preventDefault()
    const errors={}
    
    if(!reglist.fname.trim()){
        errors.fname = 'please enter name'
    }else if(!/^[a-zA-Z0-9_@]+$/.test(reglist.fname)){
        errors.fname = 'username contain number letter and space and underscore'
    }

    if(!reglist.lname.trim()){
        errors.lname = 'Please enter password'
    }

    if(!reglist.email.trim()){
        errors.email = 'Please enter email'
    }

    if(Object.keys(errors).length == 0){
        console.log(reglist, 'reg list data')
    }else{
        setError(errors)
    }
    console.log(reglist, 'data received register data')
}

    return(
        <>
          <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4} className="mb-3">
                            <FormGroup>
                                <FormLabel>
                                    First Name
                                </FormLabel>
                                <FormControl name="fname" value={reglist.fname} onChange={handleChange} />
                                {error.fname && <small className="text-danger">{error.fname}</small>}
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        </Col>
                        <Col lg={12}>
                            <ReactMemo/>
                        </Col>
                    </Row>
                </Form>
          </Container>
        </>
    )
}

export default Register