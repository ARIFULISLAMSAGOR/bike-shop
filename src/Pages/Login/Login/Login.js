import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmai] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = event => {

        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async (event) => {
        await sendPasswordResetEmai(email);
        toast('sent email')
    };
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary mt-5'>Please Login</h2>
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading... </span>
                    </Spinner>
                }
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Bike warehouse? <Link to='/register' className='text-primary text-decoration-none pe-auto'>Please Register</Link></p>
            <p>Forget password? <button onClick={resetPassword} className='text-primary btn btn-link text-decoration-none pe-auto'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;