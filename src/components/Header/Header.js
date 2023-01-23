import './Header.scss'
import menuButton from '../../assets/icons/menu.svg'
import { NavLink } from 'react-router-dom'


function Header() {
    return(
        <header className='header'>
            <NavLink>Home</NavLink>
            <img className='header__menu-button' src={menuButton} alt='menu'/>
        </header>
    )
}
export default Header