import './Header.scss'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import NavModal from '../Modal/NavModal'
import React from 'react'

function Header() {

    // Logic used to open and close modal
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(s => !s);
    };

    const [isSticky, setSticky] = useState(false)
    const handleScroll = () => {
        const windowScrollTop = window.scrollY;
        if (windowScrollTop > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header
            style={{ background: isSticky ? 'black' : '', width: '100%', zIndex: '999', position: isSticky ? 'fixed' : 'absolute', }} className='header'>
            <Modal
                isOpen={modalIsOpen}
                className="modal">
                {<NavModal/>}
            </Modal>
            <input type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" onClick={() => {
                handleClick()
            }} />
            <label for="checkbox3">
                <div className="hamburger hamburger3">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
            <div className='header__container'>
                <NavLink className='header__link'>Home</NavLink>
                <Link to='about' spy={true} smooth={true} className='header__link'>About</Link>
                <Link to='listen-now' spy={true} smooth={true} className='header__link'>Listen Now</Link>
                <Link to='live-sessions' spy={true} smooth={true} className='header__link'>Live Sessions</Link>
                <Link to='contact' spy={true} smooth={true} className='header__link'>Contact</Link>
            </div>

        </header>
    )
}
export default Header