import React from 'react';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className='container main-section-container'>
            <div className="section-title text-center">
                <h1>Tasty Menu Today</h1>
                <div className='section-title-bottom'>
                    <span className='slt'></span>
                    <span style={{color: 'var(--primary-color'}}>BEST SELL</span>
                    <span className='srt'></span>
                </div>
            </div>
            <div className="main-container d-flex">
                <div className="main-container-left">
                    <h1 className='main-container-left-title'>OUR AWESOME <span style={{color: 'var(--primary-color'}}>STREET FOOD</span> HISTORY</h1>
                    <p className='main-container-left-description'>Himply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.’s standard dummy text ever since the 1500s, when an unknown printer too’s standard. <br /><br /> took a galley of type and scrambled it to make a type specimen book.’s standard dummy text ever since the 1500s, when an unknown printer too’s standard.</p>
                    <div>
                        <button className='primaryBtn'>Discover Now</button>
                    </div>
                </div>
                <div className="main-container-right">
                    <div className="img-div">
                        <img src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/03/home-5-about.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainSection;