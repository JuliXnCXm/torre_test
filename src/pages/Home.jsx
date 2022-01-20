import React, { useState } from 'react'
import Header from '../components/Header'
import Modal from '../components/Modal'
import '../styles/Home.css'


const Home = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    return (
        <div>
            <Header />
            <img className='Home--hero' src="https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1617734713/origin/explorer/ftswyh7z7twblwhruyku.jpg" alt="" />
            <Modal show={show}></Modal>
        </div>
    )
}

export default Home