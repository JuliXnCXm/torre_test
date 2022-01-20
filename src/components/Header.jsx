import React, {useState, useContext} from 'react'
import '../styles/Header.css'
import useUser from '../hooks/useUser'
import AuthContext from '../context/AuthContext'


const Header = () => {

    const [show , setShow] = useState(false)
    const {auth} = useContext(AuthContext)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className='header'>
            <div className='header--title'>
                <i id='menu' onClick={handleShow}  class="material-icons material-icons-outlined">
                menu
                </i>
                <a href="/">torre</a>
                <a href="/" style={{ color: '#afbc36'}}>.co</a>
            </div>
            <div className='header--options'>
                <div className='header--search'>
                    <input className='header--input' type='text' placeholder='Search'/>
                    <i id='search' class="material-icons  material-icons-outlined">
                    search
                    </i>
                </div>
                { !auth ?
                    <div className='header--auth'>
                        <a href="/auth" style={{ color: '#afbc36' }} >SIGN IN</a>
                    </div>
                : null
                }
            </div>
        </div>
    )
}

export default Header
