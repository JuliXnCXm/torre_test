import React, { useState, useContext} from 'react';
import { Form , Button} from 'react-bootstrap';
import AuthContext from '../context/AuthContext'
import useLogin from '../hooks/useLogin';
import '../styles/Login.css'


const Login = () =>
{

    const { auth } = useContext( AuthContext )
    const [register, setRegister ] = useState( false );


    const { form,
        handleSubmit,
        handleForm } = useLogin();

    return (
        <div>
            <div className='secondHeader'>
                <i class="material-icons material-icons-outlined">
                    arrow_back
                </i>
                <h2>SIGN IN</h2>
            </div>
            <div className='containerForm'>
                <Form className='containerForm' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.email} onChange={handleForm} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='buttonAuth' type="submit">Submit</Button>{' '}
                </Form>
                <Button className='buttonOption' onClick={() => { setRegister( true ) }}>sign up</Button>
            </div>
        </div>
    );
}
export default Login