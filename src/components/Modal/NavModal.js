import './NavModal.scss'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

function NavModal() {
    return (
        <div className='nav-modal'>
            <div className='nav-modal__link-container'>
                <NavLink to={'/'} className='nav-modal__link' >Home</NavLink>
                <Link to='about' className='nav-modal__link' >About</Link>
                <Link to='listen-now' className='nav-modal__link' >Listen Now</Link>
                <Link to='live-sessions' className='nav-modal__link' >Live Sessions</Link>
                <Link to='contact' className='nav-modal__link'>Contact</Link>
            </div>
        </div>
    )
}
export default NavModal