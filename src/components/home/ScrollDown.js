import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const ScrollDown = () => {
    return (
        <div className='scroll__down'>
            <Link to='#about' className='mouse__wrapper'>
                <span className='home__scroll_name'>Scroll Down</span>
                <span className='mouse'>
                    <span className='wheel'></span>
                </span>
            </Link>
        </div>
    );
};

export default ScrollDown;