import React, { useEffect, useState } from 'react'
import test from '../assets/test.jpg'
import '../styles/UserProfile.css'
import Header from '../components/Header'
import useUser from '../hooks/useUser'
import masterImage from '../assets/master.svg'
import expertImage from '../assets/expert.svg'
import proficientImage from '../assets/proficient.svg'
import noviceImage from '../assets/novice.svg'
import noExperienceImage from '../assets/noExperience.svg'
import {Collapse} from 'react-bootsrap'


const UserProfile = () =>

{
    const [open , setOpen] = useState(false)
    const {user, strenghts, loading} = useUser();

    const handleClick =  (e) => {
        setOpen(!open)
    }

    return ( loading ? <div>Loading...</div> :
        (
            <>
                <Header/>
                <div className='userProfile'>
                    <div className='userProfile--container'>
                        <div className='imageContainer'>
                            <img className='userProfile--container__image' src={test} alt="" />
                        </div>
                        <h1 className='userProfile--container__name'>{user.person.name}</h1>
                    </div>
                    <div className='userProfile--container__skills'>
                        <h3 className='userProfile--container__subtitle'>Skills and interests: </h3>
                        <ul className='userProfile--container__skills--list'>

                                    {strenghts.master.length > 0 ?
                            <li className='skills--list__category master'>
                                    <div className='skills--list__title'>
                                            <img className='skills--list__title--icon' src={masterImage} alt="" />
                                        <h3>Master / Influencer</h3>
                                    </div>
                                    <div className='skills--list__item' id='item'>
                                    {strenghts.master.length > 0 && strenghts.master.map( strength => {
                                        return (
                                            <span>{strength.name}</span>
                                            )
                                        })}
                                    </div>
                                    <div id='button' onClick={handleClick} className='button--more'>
                                        <i style={{ fontSize: '40px'}} class="material-icons material-icons-outlined">
                                            expand_more
                                        </i>
                                    </div>
                            </li>
                                    :null}

                            {strenghts.expert.length > 0 ?
                            <li   className="skills--list__category expert">
                                    <div style={{display: 'none'}} >
                                        <div className='skills--list__title'>
                                            <img className='skills--list__title--icon' src={expertImage} alt="" />
                                            <h3>Expert</h3>
                                        </div>
                                        <Collapse in={open}>
                                            <div className='skills--list__item' id='item'>
                                            {strenghts.expert.length > 0 && strenghts.expert.map( strength =>
                                            {
                                                return (
                                                    <span>{strength.name}</span>
                                                    )
                                                } )}
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div id='button' onClick={handleClick} className='button--more'>
                                        <i style={{ fontSize: '40px' }} class="material-icons material-icons-outlined">
                                            expand_more
                                        </i>
                                    </div>
                            </li>
                                    : null}
                            {strenghts.proficient.length > 0 ?
                            <li className='skills--list__category proficient'>
                                    <div className='skills--list__title'>
                                        <img className='skills--list__title--icon' src={proficientImage} alt="" />
                                        <h3>Proficient</h3>
                                    </div>
                                    <div className='skills--list__item' id='item'>
                                {strenghts.proficient.length > 0 && strenghts.proficient.map( strength =>
                                {
                                    return (

                                            <span>{strength.name}</span>
                                            )
                                        } )}
                                    </div>
                                    <div id='button' onClick={handleClick}className='button--more'>
                                        <i style={{ fontSize: '40px' }} class="material-icons material-icons-outlined">
                                            expand_more
                                        </i>
                                    </div>
                            </li>
                                        : null}
                            {strenghts.novice.length > 0 ?
                            <li className='skills--list__category novice'>
                                    <div className='skills--list__title'>
                                        <img className='skills--list__title--icon' src={noviceImage} alt="" />
                                        <h3>Novice</h3>
                                    </div>
                                <div className='skills--list__item' id='item'>
                                {strenghts.novice.length > 0 && strenghts.novice.map( strength =>
                                {
                                    return (
                                        <span>{strength.name}</span>
                                        )
                                    } )}
                                </div>
                                    <div id='button' onClick={handleClick} className='button--more'>
                                        <i style={{ fontSize: '40px' }} class="material-icons material-icons-outlined">
                                        expand_more
                                    </i>
                                </div>
                            </li>
                            : null}
                                {strenghts.noExperience.length > 0 ?
                            <li className='skills--list__category noExperience'>
                                    <div className='skills--list__title'>
                                        <img className='skills--list__title--icon' src={noExperienceImage} alt="" />
                                        <h3>No experience, but interested</h3>
                                    </div>
                                <div className='skills--list__item' id='item'>
                                    {strenghts.noExperience.length > 0 &&   strenghts.noExperience.map( strength =>
                                    {
                                        return (
                                            <span>{strength.name}</span>
                                            )
                                        } )}
                                </div>
                                <div id='button' onClick={handleClick} className='button--more'>
                                        <i style={{ fontSize: '40px' }} class="material-icons material-icons-outlined">
                                        expand_more
                                    </i>
                                </div>
                            </li>
                                        : null}
                        </ul>
                    </div>
                </div>
                </>
        )
    )
}

export default UserProfile
