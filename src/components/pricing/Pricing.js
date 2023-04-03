import React from 'react';
import './Pricing.css'
import Img from '../../assets/price-1.svg';
import Img2 from '../../assets/price-2.svg';
import Img3 from '../../assets/price-3.svg';
import { Link } from 'react-router-dom';


const Pricing = () => {
    return (
        <section className='pricing container section'>
            <h2 className='section__title'>Pricing Plans</h2>
            <div className='pricing__container grid'>
                <div className='price__item'>
                    <img src={Img} alt="plans" className='pricing__img'/>
                    <h3 className='pricing__plan'>Basic</h3>
                    <p className='pricing__title'>A Simple option but powerful to manage your business</p>
                    <p className='pricing__support'>Email support</p>
                    <h3 className='price'>
                        <em>$</em> 9 <span>Month</span>
                    </h3>
                    <Link to="#" className='btn'>Get Started</Link>
                </div>

                <div className='price__item best'>
                    <span className='badge'>Recommended</span>
                    <img src={Img2} alt="plans" className='pricing__img'/>
                    <h3 className='pricing__plan'>Premium</h3>
                    <p className='pricing__title'>Unlimited product including app integration and more features</p>
                    <p className='pricing__support'>Mon-Fri support</p>
                    <h3 className='price'>
                        <em>$</em> 15 <span>Month</span>
                    </h3>
                    <Link to="#" className='btn'>Get Started</Link>
                </div>

                <div className='price__item'>
                    <img src={Img3} alt="plans" className='pricing__img'/>
                    <h3 className='pricing__plan'>Ultimate</h3>
                    <p className='pricing__title'>A wise option for large companies and individuals</p>
                    <p className='pricing__support'>24/7 support</p>
                    <h3 className='price'>
                        <em>$</em> 19 <span>Month</span>
                    </h3>
                    <Link to="#" className='btn'>Get Started</Link>
                </div>
            </div>


        </section>
    );
};

export default Pricing;