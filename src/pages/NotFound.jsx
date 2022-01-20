import React from 'react';
import Header from '../components/Header';
import '../styles/NotFound.css';

const NotFound = () => {
    return (

        <div>
            <Header/>
            <div className='notfound--container'>
                <h1 className='notfound--container__text'> oops 404 <br/>!Not found</h1>
                <i class="material-icons material-icons-outlined">
                    report_problem
                </i>
            </div>
        </div>
    )
};

export default NotFound;
