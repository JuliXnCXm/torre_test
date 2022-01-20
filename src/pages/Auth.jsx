import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import AuthContext from '../context/AuthContext'


const Auth = () => {
    const { auth } = useContext(AuthContext)
    return (
        <div>
            <Header/>
            <div>
                <i></i>
                <h2>SIGN IN</h2>
            </div>
            <div>
                <form action="">

                </form>
            </div>
        </div>
    );
};

export default Auth;
