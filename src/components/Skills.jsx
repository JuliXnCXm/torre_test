import React from 'react'
import useUser from '../hooks/useUser'
import masterImage from '../assets/master.svg'
import expertImage from '../assets/expert.svg'
import proficientImage from '../assets/proficient.svg'
import noviceImage from '../assets/novice.svg'
import noExperienceImage from '../assets/noExperience.svg'
import ProgresBar from '../components/ProgressBar'
import StrenghtsContainer from '../components/StrenghtsContainer'
import '../styles/Skills.css'

const Skills = () =>
{
    const { user, strenghts, loading } = useUser();


    return ( loading ? <ProgresBar show={loading} /> :
        (
        <div className='skills-column'>
            <div className='userProfile'>
                <div className='userProfile--container'>
                    <div className='outside'>
                        <div className='imageContainer'>
                            {user.person.picture ?
                                <img className='userProfile--container__image' src={user.person.picture} alt="" />
                                : <span>{user.person.name[ 0 ]}</span>
                            }
                        </div>
                    </div>
                    <h1 className='userProfile--container__name'>{user.person.name}</h1>
                </div>
                <div className='userProfile--container__skills'>
                    <h3 className='userProfile--container__subtitle'>Skills and interests: </h3>
                    <ul className='userProfile--container__skills--list'>
                        <StrenghtsContainer type="master" name={"Master / Influencer"} strenghts={strenghts.master} img={masterImage} />
                        <StrenghtsContainer type="expert" name={"Expert"} strenghts={strenghts.expert} img={expertImage} />
                        <StrenghtsContainer type="proficient" name={"Proficient"} strenghts={strenghts.proficient} img={proficientImage} />
                        <StrenghtsContainer type="novice" name={"Novice"} strenghts={strenghts.novice} img={noviceImage} />
                        <StrenghtsContainer type="noExperience" name={"No experience , but interested"} strenghts={strenghts.noExperience} img={noExperienceImage} />
                    </ul>
                </div>
            </div>
        </div>
    ))
};


export default Skills