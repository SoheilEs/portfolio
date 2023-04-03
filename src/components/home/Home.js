import React from 'react';
import './Home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials';
import { Link } from 'react-router-dom';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
const Home = () => {
    return (
       <section className='home container' id="home"> 
        <div className='intro'>
            <img className='home__img' src={Me} alt="Me" />
            <h1 className='home__name'>Soheil Isazade</h1>
            <span className='home__education'>I'm an IT engineer</span>
        <HeaderSocials />

        <Link to='#contact' className='btn'>Hire Me</Link>
        <ScrollDown />
        </div>
        <Shapes />
       </section>
    );
};

export default Home;