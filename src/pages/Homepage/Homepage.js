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
                        <img className='homepage__icon--fb' src={facebook} alt='facebook icon' />
                        <img className='homepage__icon' src={instagram} alt='instagram icon' />
                        <img className='homepage__icon' src={youtube} alt='youtube icon' />
                    </div>
                </div>
            </div>
            <About />
            <ListenNow />
            <LiveSessions />
            <Contact/>
            <Footer/>
        </main>
    )
}
export default Homepage