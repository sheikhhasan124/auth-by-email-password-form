import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const auth = getAuth(app)

const App = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [validated, setValidated] = useState(false);
    const [error, setError]=useState('')
    const [resister, setResister]=useState(false)

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
            setError('you should set one special charecter')
            return;
        }
         setError('')
        setValidated(true);

        if(resister){
           signInWithEmailAndPassword(auth,email,password)
           .then(result=>{
               const user = result.user;
               console.log(user)
           })
           .catch(error=>{
               console.log(error)
               setError(error.message)
           })
        }else{

            createUserWithEmailAndPassword(auth, email, password)
            .then(result=>{
                const user = result.user;
                console.log(user)
                setEmail('')
                setPassword('')
                verifyEmail()
            })
            .catch(error=>{
                console.log(error)
            })

        }
        event.preventDefault()
    }
    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            console.log('email verification sent')
        })
    }
    const handleResisteChange=(event)=>{
        setResister(event.target.checked)
    }
    return (
    <div className='w-50 mx-auto'>
        <h2 className='text-primary'>plese {resister? 'Login':'register'}</h2>
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
           
            <p className='text-danger'>{error}</p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={handleResisteChange} type="checkbox" label="already resistered?" />
             </Form.Group>
            <Button variant="primary" type="submit">
                {resister?'Login':'Resister'}
            </Button>
        </Form>
    </div>
    );
};

export default App;