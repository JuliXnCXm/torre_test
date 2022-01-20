import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login'
import Register from '../components/Register'
import '../styles/Auth.css'


const Auth = () => {
    return (
        <div className='authContainer'>
            <Header/>
            <Login/>
        </div>
    );
};

export default Auth;
