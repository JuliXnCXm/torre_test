import React from 'react'
import '../styles/UserProfile.css'
import Header from '../components/Header'
import useUser from '../hooks/useUser'
import masterImage from '../assets/master.svg'
import expertImage from '../assets/expert.svg'
import proficientImage from '../assets/proficient.svg'
import noviceImage from '../assets/novice.svg'
import noExperienceImage from '../assets/noExperience.svg'
import StrenghtsContainer from '../components/StrenghtsContainer'


const UserProfile = () =>

{
    const {user, strenghts, loading} = useUser();


    return ( loading ? <div>Loading...</div> :
        (
            <>
                <Header/>
                <div className='userProfile'>
                    <div className='userProfile--container'>
                        <div  className='imageContainer'>
                            <img className='userProfile--container__image' src={user.person.picture} alt="" />

                        </div>
                        <h1 className='userProfile--container__name'>{user.person.name}</h1>
                    </div>
                    <div className='userProfile--container__skills'>
                        <h3 className='userProfile--container__subtitle'>Skills and interests: </h3>
                        <ul className='userProfile--container__skills--list'>
                            <StrenghtsContainer type="master" name={"Master / Influencer"} strenghts={strenghts.master} img={masterImage} />
                            <StrenghtsContainer type="expert" name={"Expert"} strenghts= {strenghts.expert} img={expertImage}/>
                            <StrenghtsContainer type="proficient" name={"Proficient"} strenghts= {strenghts.proficient} img={proficientImage}/>
                            <StrenghtsContainer type="novice" name={"Novice"} strenghts= {strenghts.novice} img={noviceImage}/>
                            <StrenghtsContainer type="noExperience" name={"No experience , but interested"} strenghts= {strenghts.noExperience} img={noExperienceImage}/>
                        </ul>
                    </div>
                </div>
                </>
        )
    )
}

export default UserProfile
