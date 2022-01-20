import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

const useRegister = () =>
{

    const [ form, setForm ] = useState( {
        username: '',
        userlastname: '',
        email: '',
        password: '',
        picture: '',
        skills: ''
    } )
    const { handleRegister } = useContext( AuthContext )

    const handleForm = ( e ) =>
    {
        setForm( {
            ...form, [ e.target.name ]: e.target.value
        } )
    }

    const handleSubmit = ( e ) =>
    {
        e.preventDefault()
        handleRegister({
            username: form.username,
            userlastname: form.userlastname,
            email: form.email,
            password: form.password,
            picture: form.picture,
            skills: form.skills.split( ',' )

        })
        setForm( {
            username: '',
            userlastname: '',
            email: '',
            password: '',
            picture: '',
            skills: '',
        } )
    }
    return {
        form,
        setForm,
        handleForm,
        handleSubmit
    }
}

export default useRegister;