import React from 'react';
import './SingleChef.css';
import { FaFacebookF, FaLinkedinIn, FaThumbsUp, FaTwitter } from "react-icons/fa";

const SingleChef = ({ chef }) => {

    return (
        <>
            {
                chef.map((item, index) =>
                    <div className='container single-chef-container' key={index}>

                        <div className="chef-img-div">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="chef-info">
                            <h1 className="chef-title">{item.name}</h1>
                            <h3 className="chef-position">{item.position}</h3>
                            <span className='hrline'></span><br /><br />
                            <p className="chef-bio">{item.description}</p>
                            <div>
                                <p><FaThumbsUp /> {item.likes} </p>
                                <p>Number of Recipe:  {item.recipes} </p>
                                <p>Years of Expreience: {item.experience} Years</p>
                            </div>
                            <div className='mt-4'>
                                <h2>Follow me On:</h2>
                                <div className='social-div'>
                                    <div className='single-icon'><FaFacebookF className='social-icon' /></div>
                                    <div className='single-icon'><FaTwitter className='social-icon' /></div>
                                    <div className='single-icon'><FaLinkedinIn className='social-icon' /></div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default SingleChef;