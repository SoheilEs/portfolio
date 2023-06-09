import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
       <section className='contact container section' id='contact'> 
            <h2 className='section__title'>Get In Touch</h2>

            <div className='contact__container grid'>
                <div className='contact__info'>
                    <h3 className='contact__title'>Let's talk about everything!</h3>
                    <p className='contact__details'>Don't like forms? Send me an email. 👋</p>
                </div>
           
            <form className='contact__form'>
                    <div className='contact__form-group'>
                        <div className='contact__form-div'>
                            <input className='contact__form-input' type="text" placeholder='Insert your name'/>
                        </div>

                        <div className='contact__form-div'>
                            <input className='contact__form-input' type="email" placeholder='Insert your Email'/>
                        </div>
                    </div>
                    <div className='contact__form-div'>
                            <input className='contact__form-input' type="text" placeholder='Insert your subject'/>
                    </div>
                    <div className='contact__form-div contact__form-area'>
                            <textarea name='' id='' cols="30" rows="10" className='contact__form-input' placeholder='Write Your message'></textarea>
                    </div>
                    <button className='btn' type='submit'>Submit</button>
            </form>
            </div>
       </section>
    );
};

export default Contact;