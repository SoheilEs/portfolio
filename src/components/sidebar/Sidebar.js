import React from 'react';
import classes from './Sidebar.module.css'
import Logo from '../../assets/logo.svg'


const Sidebar = () => {
    return (
        <aside className={classes.aside}>
            <a href='#home' className={classes.nav__logo}><img src={Logo} alt='logo'/></a>
            <nav className={classes.nav}>
                <div className={classes.nav__menu}>
                    <ul className={classes.nav__list}>
                        <li className={classes.nav__item}>
                            <a href='#home'  className={classes.nav__link}><i className='icon-home'></i></a>
                        </li>
                        <li className={classes.nav__item}>
                            <a href='#about'  className={classes.nav__link}><i className='icon-user-following'></i></a>
                        </li>
                        <li className={classes.nav__item}>
                            <a href='#services'  className={classes.nav__link}>
                            <i className='icon-briefcase'></i>
                            </a>
                        </li>
                        <li className={classes.nav__item}>
                            <a href='#resume'  className={classes.nav__link}>
                            <i className='icon-graduation'></i>
                            </a>
                        </li>
                        <li className={classes.nav__item}>
                            <a href='#portfolio'  className={classes.nav__link}>
                            <i className='icon-layers'></i>
                            </a>
                        </li>
                        <li className={classes.nav__item}>
                            <a href='#blog'  className={classes.nav__link}>
                            <i className='icon-note'></i>
                            </a>
                        </li>
                        <li className={classes.nav__item}>
                            <a href='#contact'  className={classes.nav__link}>
                            <i className='icon-bubble'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.nav__footer}>
                <span className={classes.copyright}>SUMMIT &copy; {new Date().getFullYear()}</span>
            </div>
        </aside>
    );
};

export default Sidebar;