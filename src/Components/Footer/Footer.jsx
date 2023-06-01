import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className='container'>
                    <div className="footer-top-container">
                        <div className="footer-top-container-left">
                            <h1 className="footer-top-title">
                                About Chef
                            </h1>
                            <span className="hrline"></span>
                            <p className='footer-chef-description'>We aim to home-produce as much as possiblefor the best quality, and to reduce food mcious cakes, traditional Devon soups, sauces and accompanimentsion.We aim to home-produce as much as possiblefor the best quality, and to reduce food mcious cakes.</p>
                            <div className="footer-top-social-icon-div">
                                <div className='singleIcon'>
                                    <FaFacebookF />
                                </div>
                                <div className='singleIcon'>
                                    <FaTwitter />
                                </div>
                                <div className='singleIcon'>
                                    <FaGithub />
                                </div>
                                <div className='singleIcon'>
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                        <div className="footer-top-container-center">
                            <h1 className="footer-top-title">
                                Services
                            </h1>
                            <span className="hrline"></span>
                            <p style={{ marginTop: '30px' }}>
                                Food <br />
                                Drink <br />
                                Salad <br />
                                Ice-cream <br />
                                Cake <br />
                                Desert <br />
                                Tea <br />

                            </p>
                        </div>
                        <div className="footer-top-container-right">
                            <h1 className="footer-top-title">
                                We Are open
                            </h1>
                            <span className="hrline"></span>
                            <table style={{ marginTop: '30px' }}>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td className='ps-4'>8AM to - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td className='ps-4'>8AM to - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td className='ps-4'>8AM to - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td className='ps-4'>8AM to - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td className='ps-4'><span style={{ color: 'var(--primary-color)' }}>closed</span></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td className='ps-4'>8AM to - 9PM</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td className='ps-4'>8AM to - 9PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© Copyright Asian Food Kings. All Right Reserved. Designed and Developed by <strong>Shihan Chowdhury</strong></p>
            </div>
        </footer>
    );
};

export default Footer;