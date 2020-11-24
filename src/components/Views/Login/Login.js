import React from 'react';

//Import components
import Heading from '../../Layout/Heading';
import LoginForm from './LoginForm';

const Login = () => {
    const heading = "Login";
    return (
        <>
            <Heading title={heading} />
            <LoginForm />
        </>
    )
}

export default Login;