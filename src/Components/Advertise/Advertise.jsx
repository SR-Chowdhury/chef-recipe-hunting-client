import React from 'react';
import './Advertise.css';
import { FaHamburger, FaIceCream, FaPizzaSlice } from 'react-icons/fa';

const Advertise = () => {

    return (
        <div className="advertise-container">
            <div className='container shadow-lg advertise-section start-50'>

                <div className="single-div">
                    <div className="single-div-logo">
                        <FaHamburger className='single-div-icon' />
                    </div>
                    <div className="single-div-title">
                        <h1>The Real Burgers</h1>
                    </div>
                    <div className="single-div-description">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ltotamperiam.</p>
                    </div>
                </div>
                <div className="single-div">
                    <div className="single-div-logo">
                        <FaIceCream className='single-div-icon' />
                    </div>
                    <div className="single-div-title">
                        <h1>THE HOT COFFEE</h1>
                    </div>
                    <div className="single-div-description">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ltotamperiam.</p>
                    </div>
                </div>
                <div className="single-div">
                    <div className="single-div-logo">
                        <FaPizzaSlice className='single-div-icon' />
                    </div>
                    <div className="single-div-title">
                        <h1>THE DELICIOUS PIZZA</h1>
                    </div>
                    <div className="single-div-description">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ltotamperiam.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Advertise;