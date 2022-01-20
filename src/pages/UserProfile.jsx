import React from 'react'
import Header from '../components/Header'
import Skills from '../components/Skills'
import '../styles/UserProfile.css'


const UserProfile = () =>

{


    return  (
            <>
                <Header/>
                <div className="userMain" >
                    <Skills/>
                </div>
            </>
        )
}

export default UserProfile
