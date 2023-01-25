import './Contact.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_7q6tkba', 'template_7i1zjmc', form.current, 'seaV_v1WnYf8qtHhT')
            .then((result) => {
                // show the user a success message
                alert('Email sent successfully. Thank you!')
            }, (error) => {
                // show the user an error
                alert('Email could not be sent, please try again.')
            });

        e.target.reset();
    };

    return (
        <section className='contact'>
            <div className='contact__container'>
                <h2 className='contact__heading'>Let's make some magic.</h2>
                <p className='contact__copy'>Questions? Want to book a show or write a song together? Let's connect</p>
                <form className='contact__form' ref={form} onSubmit={sendEmail}>
                    <div className='contact__form-input-container'>
                        <h3 className='contact__input-heading'>Name*</h3>
                        <input className='contact__form-input' id='from_name' name='from_name' placeholder='Your name'></input>
                    </div>
                    <div className='contact__form-input-container'>
                        <h3 className='contact__input-heading'>Your email*</h3>
                        <input className='contact__form-input' id='reply_to' name='reply_to' placeholder='Your email address'></input>
                    </div>
                    <div className='contact__form-input-container'>
                        <h3 className='contact__input-heading'>Message*</h3>
                        <textarea className='contact__form-message' id='message' name='message' placeholder='Enter your message'></textarea>
                    </div>
                    <button className='contact__button'>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Contact