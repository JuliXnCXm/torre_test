import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import useRegister from '../hooks/useRegister'
import '../styles/Register.css'


const Register = () =>
{
    const [ login, setLogin ] = useState( false );
    const { form,
        handleSubmit,
        handleForm } = useRegister();
    return (
        <>
            <div className='containerForm'>
                <h2>Register</h2>
                <Form className='containerForm' onSubmit={handleSubmit}>
                    <Form.Group className='containerRegisterForm--username mb-3' controlId="username">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.username} onChange={handleForm} name="username" type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="containerRegisterForm--userlastname mb-3" controlId="userlastname">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.userlastname} onChange={handleForm} name="userlastname" type="text" placeholder="Enter lastname" />
                    </Form.Group>
                    <Form.Group className="containerRegisterForm--email mb-3" controlId="email">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.email} onChange={handleForm} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="containerRegisterForm--password mb-3" controlId="password">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="containerRegisterForm--skills mb-3" controlId="skills">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" value={form.skills} onChange={handleForm} />
                    </Form.Group>

                    <Button className='buttonAuth' type="submit">Submit</Button>{' '}
                </Form>
                <Button className='buttonOption' onClick={() => { setLogin( true ) }}>Login</Button>
            </div>
        </>
    );
};

export default Register;
