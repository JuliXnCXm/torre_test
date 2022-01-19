import React, {useState} from 'react'
import '../styles/Header.css'
const Header = () => {

    const [show , setShow] = useState(false)
    const handleShowInput = () => {
        setShow(!show)
    }

    return (
        <div className='header'>
            <div className='header--title'>
                <i id='menu' onClick={handleShowInput}  class="material-icons material-icons-outlined">
                menu
                </i>
                <a href="https://torre.co/es">torre</a>
                <a href="https://torre.co/es" style={{ color: '#afbc36'}}>.co</a>
            </div>
            <div className='header--search search--active'>
                { show ?
                    <input className='header--input' type='text' placeholder='Search'/>
                :
                <i onClick={handleShowInput} id='search' class="material-icons material-icons-outlined">
                search
                </i>
                }
                <a href="https://accounts.torre.co/email/?next=/openid/authorize%3Fscope%3Dopenid%2Bprofile%2Bemail%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Ftorre.co%252Fcallback%253Fclient_name%253Dstarrgate%26state%3Dnjg-kQpIUbvrXUWku4ffDU1WP9i3ZRLQ-WShnEF8KLI%26intent%3Dhome%253Asign-in%26client_id%3D541493" style={{ color: '#afbc36' }} >SIGN IN</a>
            </div>
        </div>
    )
}

export default Header
