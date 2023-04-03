import React, { useState } from 'react';
import './Portfolio.css';
import { Menu } from './Menu';
import { Link } from 'react-router-dom';
const Portfolio = () => {
const [menu, setMenu] = useState(Menu)

const filterItem = (category)=>{
        const updatedItems = Menu.filter(item => item.category === category)
        return setMenu(updatedItems)
}
    return (
       <section className='work container section' id='portfolio'> 
            <h2 className='section__title'>Recent Work</h2>
            <div className='work__filters'>
                <span className='work__item' onClick={()=>setMenu(Menu)}>Everything</span>
                <span className='work__item' onClick={()=>filterItem("Creative")}>Creative</span>
                <span className='work__item' onClick={()=>filterItem("Art")}>Art</span>
                <span className='work__item' onClick={()=>filterItem("Design")}>Design</span>
                <span className='work__item' onClick={()=>filterItem("Branding")}>Branding</span>
            </div>
            <div className='work__container grid'>
                {menu.map(item => {
                    const {id, image, title, category} = item
                    return(
                        <div className='work__card' key={id}>
                            <div className='work__thumbnail'>
                                <img src={image} alt={image} className='work__img'/>
                                <div className='work__mask'></div>
                            </div>
                            <span className='work__category'>{category}</span>
                            <h3 className='work__title'>{title}</h3>
                            <Link to='#' className='work__button'>
                                <i className='icon-link work__button-icon'></i>
                            </Link>
                        </div>

                    )
                })}
            </div>
       </section>
    );
};

export default Portfolio;