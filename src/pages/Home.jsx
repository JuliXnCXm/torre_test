import React from 'react'
import Header from '../components/Header'
import '../styles/Home.css'


const Home = () => {
    return (
        <div>
            <Header />
            <img className='Home--hero' src="https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1617734713/origin/explorer/ftswyh7z7twblwhruyku.jpg" alt="" />
        </div>
    )
}

export default Home