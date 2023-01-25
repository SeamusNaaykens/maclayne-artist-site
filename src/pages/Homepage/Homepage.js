import './Homepage.scss'
import About from '../../components/About/About'
import ListenNow from '../../components/ListenNow/ListenNow'
import LiveSessions from '../../components/LiveSessions/LiveSessions'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import facebook from '../../assets/icons/facebook-white.png'
import instagram from '../../assets/icons/insta-white.png'
import youtube from '../../assets/icons/youtube-white.png'



function Homepage() {
    return (
        <main className='homepage'>
            <div className='homepage__hero'>
                <div className='homepage__container'>
                    <h1 className='homepage__heading'>Maclayne</h1>
                    <p className='homepage__copy'>Calgary based independent folk-pop artist writing from the heart.</p>
                    <div className='homepage__icon-container'>
                        <a href='https://www.facebook.com/MaclayneEva/' target='_blank' rel="noreferrer noopener">
                            <img className='homepage__icon--fb' src={facebook} alt='facebook icon' />
                        </a>
                        <a href='https://www.instagram.com/maclaynes/' target='_blank' rel="noreferrer noopener">
                            <img className='homepage__icon' src={instagram} alt='instagram icon' />
                        </a>
                        <a href='https://www.youtube.com/@maclayne' target='_blank' rel="noreferrer noopener">
                            <img className='homepage__icon' src={youtube} alt='youtube icon' />
                        </a>
                    </div>
                </div>
            </div>
            <About />
            <ListenNow />
            <LiveSessions />
            <Contact />
            <Footer />
        </main>
    )
}
export default Homepage