import React, { createContext , useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin, apiRegister } from './Api';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const navigate = useNavigate()

    const [ auth, setAuth ] = useState( false );

    useEffect( () =>
    {
        let token = localStorage.getItem( 'token' )
        if ( token )
        {
            setAuth( true )
        }
    }, [] )

    const handleRegister = ( objUser ) =>
    {
        fetch( apiRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( objUser )
        } ).then( async ( resp ) =>
        {
            if ( resp.status === 201 )
            {
                let json = await resp.json();
                localStorage.setItem( 'token', json.token );
                setAuth( true )
                navigate( '/' )
            }

        } ).catch( error =>
        {
            console.error( error )
        } )
    }

    const handleLogin = async ( objUser ) =>
    {
        let resp = await fetch(apiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( objUser )
        } )

        if ( resp.status === 200 )
        {
            let json = await resp.json();
            localStorage.setItem( 'token', json.token );
            setAuth( true )
            navigate('/')
        }
        return resp
    }


    const data = {handleLogin, handleRegister, auth}
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
};


export {AuthProvider}
export default AuthContext