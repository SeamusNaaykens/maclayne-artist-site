import './About.scss'
import portrait from '../../assets/images/IMG_4949.jpg'

function About() {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__subcontainer">
                    <h2 className="about__heading">What's the story?</h2>
                    <p className="about__copy">Maclayne is a folk-pop singer and songwriter based in Calgary, Alberta. She pens her lyrics and melodies straight from the heart, using music to process her life experiences. Maclayne creates honest, relatable, and catchy songs that listeners can find themselves in. Playing her own original tunes, she is able to engage audiences in an intimate, emotional, and joyful night of music. Maclayne currently plays venues around Calgary, such as Gravity Cafe and Skunkworks Distillery.
                        <br></br><br></br><br></br>
                        Maclayne's debut album is set to be released summer of 2023. It was written while getting lost in Nicaragua, soul searching in 2021. The album tells the story of adventure, letting go, gaining perspective, and a 24-year-old heart breaking wide open. Check out demos and live sessions of a few of the songs on Maclayne's debut album below.
                    </p>
                </div>
                <img className='about__image' src={portrait} alt='Maclayne Portrait' />
            </div>
        </section>
    )
}
export default About