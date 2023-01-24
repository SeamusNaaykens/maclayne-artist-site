import './Footer.scss'
import facebook from '../../assets/icons/facebook-grey.png'
import insta from '../../assets/icons/insta-grey.png'
import youtube from '../../assets/icons/youtube-grey.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__icon-container'>
                <a href='https://www.facebook.com/MaclayneEva/'>
                    <img className='footer__icon--fb' src={facebook} alt='facebook icon' />
                </a>
                <a href='https://www.instagram.com/maclaynes/'>
                    <img className='footer__icon' src={insta} alt='instagram icon' />
                </a>
                <a href='https://www.youtube.com/@maclayne'>
                    <img className='footer__icon' src={youtube} alt='youtube icon' />
                </a>
            </div>
        </div>
    )
}
export default Footer