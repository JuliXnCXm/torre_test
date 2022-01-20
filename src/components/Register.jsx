import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import useRegister from '../hooks/useRegister'
import Login from './Login';


const Register = () =>
{
    const [ login, setLogin ] = useState( false );

    const { form,
        handleSubmit,
        handleForm } = useRegister();

    return (login ?<Login/> : (
        <>
            <div className='secondHeader'>
                <div className='secondHeader--nav' onClick={() =>
                {
                    setLogin(true)
                }}>
                    <i class="material-icons material-icons-outlined">
                        arrow_back
                    </i>
                    <h2>SIGN IN</h2>
                </div>
            </div>
            <div className='container'>
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
                        <Form.Control className='formAuth--input' as="textarea" style={{"height": "150px"}} placeholder='write your skills in comma separated values format'  value={form.skills} onChange={handleForm} />
                    </Form.Group>

                    <Button className='buttonAuth' type="submit">Submit</Button>{' '}
                </Form>
            </div>
        </>
    ));
};

export default Register;
