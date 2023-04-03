import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const HeaderSocials = () => {
    return (
       <div className='home__socials'>
            <Link to='http://www.instagram.com/' 
            className='home__social_link' target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </Link>

            <Link to='https://www.youtube.com' 
            className='home__social_link' target="_blank">
                <i className="fa-brands fa-youtube"></i>
            </Link>

            <Link to='https://www.linkedin.com/' 
            className='home__social_link' target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </Link>

            <Link to='https://gitlab.com' 
            className='home__social_link' target="_blank">
                <i className="fa-brands fa-gitlab"></i>
            </Link>

            <Link to='https://github.com/' 
            className='home__social_link' target="_blank">
                <i className="fa-brands fa-github"></i>
            </Link>
       </div>
    );
};

export default HeaderSocials;