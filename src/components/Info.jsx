import React from 'react';
import '../styles/Info.css'

const Info = ({handleClose}) => {


    return (
        <div className='ModalInfo--container'>
            <i onClick={handleClose} class="material-icons material-icons-outlined">
                close
            </i>
            <h1 className='ModalInfo--container__title'>Welcome to my Test</h1>
            <div className='ModalInfo--containerInfo'>
                <section className='ModalInfo--containerInfo__secleft'>
                    <h2>The following futures were created using Torre`s API</h2>
                    <ul className='feature--list'>
                        <li>Search in header by name</li>
                        <li>Search in header by oppertunity</li>
                        <li>User profile</li>
                    </ul >
                </section>
                <section className='ModalInfo--containerInfo__secrig'>
                    <h2>The following futures were created using my backend implementation</h2>
                    <ul className='feature--list'>
                        <li>Login of user (only created in my API)</li>
                        <li>Register of user</li>
                    </ul>
                </section>
            </div>
        </div>
    )
};

export default Info;
