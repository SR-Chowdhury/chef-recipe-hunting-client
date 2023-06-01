import React from 'react';
import './Banner.css';

const Banner = ({ chef }) => {
    return (
        <>
            {
                chef.map((item, index) =>
                    <div className='banner-container' key={index}>
                        <div className="container banner-inner-container">
                            <h1 className='banner-title'>{item.nationality} Recepie</h1>
                            <p className='banner-breadcumb'>Chef Recipe {'>'} <strong><span style={{ color: '#e7272d' }}>{item.nationality}</span></strong></p>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Banner;