import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const auth = getAuth(app)

const App = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [validated, setValidated] = useState(false);

     const handelEmailBlur=(e)=>{
         setEmail(e.target.value)
     }
     const handlePassWord=(e)=>{
         setPassword(e.target.value)
     }
    const handleformSubmit=(event)=>{
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
          return;
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            return;
        }
    
        setValidated(true);

        
         createUserWithEmailAndPassword(auth, email, password)
         .then(result=>{
             const user = result.user;
             console.log(user)
         })
         .catch(error=>{
             console.log(error)
         })
        event.preventDefault()
    }
    return (
    <div className='w-50 mx-auto'>
        <Form noValidate validated={validated} onSubmit={handleformSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                Please provide a valid emai.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassWord} type="password" placeholder="Password" required />
                <Form.Control.Feedback type="invalid">
                   Please provide a valid city.
                </Form.Control.Feedback>
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