import React from 'react';
import { Carousel } from 'react-bootstrap';
import './SliderForBanner.css';

const SliderForBanner = () => {
    return (
        <Carousel className=''>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/06/slide1-1-ok-1536x799.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='ask-caption'>
                    <h3>Special <span>Beef</span> Birani</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <div className='lgDeviceBtn'><button className='primaryBtn'>Order Now</button></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/06/slide1-2-ok-1536x799.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='ask-caption'>
                    <h3>Grilled <span>Sharma</span> Burger</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <div className='lgDeviceBtn'><button className='primaryBtn'>Order Now</button></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://radiustheme.com/demo/wordpress/redchili/wp-content/uploads/2017/06/slide1-3-ok-1536x799.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='ask-caption'>
                    <h3>Garlic <span>Chicken</span> Tikka</h3>
                    <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <div className='lgDeviceBtn'><button className='primaryBtn'>Order Now</button></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SliderForBanner;