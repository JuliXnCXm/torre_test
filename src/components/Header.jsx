import React from 'react'
import '../styles/Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header--title'>
                <i id='menu'  class="material-icons material-icons-outlined">
                menu
                </i>
                <a href="/">torre</a>
                <a href="/" style={{ color: '#afbc36'}}>.co</a>
            </div>
            <div className='header--search'>
                <i id='search' class="material-icons material-icons-outlined">
                search
                </i>
                <a href="/" style={{ color: '#afbc36' }} >SIGN IN</a>
            </div>
        </div>
    )
}

export default Header
