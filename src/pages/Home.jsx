import React, { useState } from 'react'
import Header from '../components/Header'
import Info from '../components/Info'
import Modal from '../components/Modal'
import '../styles/Home.css'


const Home = () => {
    const [show, setShow] = useState(true)

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div>
            <Header />
            <img className='Home--hero' src="https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1617734713/origin/explorer/ftswyh7z7twblwhruyku.jpg" alt="" />
            {show &&
                <Modal>
                    <Info handleClose={handleClose}/>
                </Modal>
            }
        </div>
    )
}

export default Home