import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const auth = getAuth(app)

const App = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

     const handelEmailBlur=(e)=>{
         setEmail(e.target.value)
     }
     const handlePassWord=(e)=>{
         setPassword(e.target.value)
     }
    const handleformSubmit=(event)=>{
         console.log(email, password)
        event.preventDefault()
    }
    return (
    <div className='w-50 mx-auto'>
        <Form onSubmit={handleformSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassWord} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    );
};

export default App;