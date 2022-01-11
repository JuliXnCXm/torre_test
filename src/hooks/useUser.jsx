import React, {useState, useEffect, useMemo} from 'react'
import { useParams } from 'react-router-dom';
import { server } from '../context/Api'

const useUser = () => {

    const objStrengths = {
        'master': [],
        'expert': [],
        'proficient': [],
        'novice': [],
        'noExperience': []
    }

    let { username } = useParams()
    const [ user, setUser ] = useState( undefined )
    const [ loading, setLoading ] = useState(true);
    const [ strenghts, setStrenghts ] = useState( objStrengths );


    useEffect( () =>
    {

        fetch( `${ server }/user/${ username }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        } ).then( async ( res ) =>
        {
            let json = await res.json()
            setUser( json )
            setLoading( false )
        } ).catch( err => console.log( err ) )
    }, [ username ] )

    useMemo( () => {
        if(user) {
            user.strengths.forEach( strength =>
            {
                if ( strength.proficiency === 'master' ){
                    setStrenghts( prevState => ({...prevState, master: [...prevState.master, strength]}) )
                } else if ( strength.proficiency === 'expert' )
                {
                    setStrenghts( prevState => ({...prevState, expert: [...prevState.expert, strength]}) )
                } else if ( strength.proficiency === 'proficient' )
                {
                    setStrenghts( prevState => ({...prevState, proficient: [...prevState.proficient, strength]}) )
                } else if ( strength.proficiency === 'novice' )
                {
                    setStrenghts( prevState => ({...prevState, novice: [...prevState.novice, strength]}) )
                } else if ( strength.proficiency === 'no-experience-interested' )
                {
                    setStrenghts( prevState => ({...prevState, noExperience: [...prevState.noExperience, strength]}) )
                }
            })
        }
        else{
            return null
        }
    } , [user] )


    return {
        user,
        strenghts,
        loading
    }

}

export default useUser
