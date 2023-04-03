import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/avatar-2.svg'
import './About.css'
import AboutBox from './AboutBox';
const About = () => {
    return (
      <section className='about container section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <div className='about__container grid'>
            <img className='about__img' src={about} alt='about me' />
            

            <div className='about__data grid'>
                <div className='about__info'>
                    <p className='about__description'>I am Soheil Isazade, IT engineer from TABRIZ, IRAN. I have rich experience in web site design and building and customization, also I am good at Network.</p>
                    <Link to='' className='btn'>Download CV</Link>
                </div>
                <div className='about__skills grid'>
                    <div className='skills__data'>
                        <div className='skills__titles'>
                            <h3 className='skills__name'>Front-End</h3>
                            <span className='skills__number '>90%</span>
                        </div>

                        <div className='skills__bar'>
                            <span className='skills__percentage development'></span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <div className='skills__titles'>
                            <h3 className='skills__name'>Network</h3>
                            <span className='skills__number'>80%</span>
                        </div>

                        <div className='skills__bar'>
                            <span className='skills__percentage network'></span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <div className='skills__titles'>
                            <h3 className='skills__name'>Backend</h3>
                            <span className='skills__number'>70%</span>
                        </div>

                        <div className='skills__bar'>
                            <span className='skills__percentage backend '></span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

        
        <AboutBox />
      </section>
    );
};

export default About;