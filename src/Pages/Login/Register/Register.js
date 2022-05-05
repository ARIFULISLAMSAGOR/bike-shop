import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    };
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate('/')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('your two passsword did not match')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center  text-primary'>Please Register!</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="confirm Password" required />
                </Form.Group>
                <p style={{ color: "red" }}>{error}</p>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none pe-auto'>Please Login</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;