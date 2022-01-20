import React, { useState, useContext} from 'react';
import { Form , Button} from 'react-bootstrap';
import AuthContext from '../context/AuthContext'
import useLogin from '../hooks/useLogin';
import '../styles/Login.css'
import Register from './Register';


const Login = () =>
{

    const { auth } = useContext( AuthContext )
    const [register, setRegister ] = useState( false );


    const { form,
        handleSubmit,
        handleForm } = useLogin();

    return ( register ? <Register/> : (

        <div>
            <div className='secondHeader'>
                <div className='secondHeader--nav' onClick={() => {
                    setRegister(true)
                }}>
                    <i class="material-icons material-icons-outlined">
                    arrow_back
                    </i>
                    <h2>SIGN UP</h2>
                </div>
            </div>
            <div className='container'>
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

            </div>
        </div>
    ));
}
export default Login