import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css'
import img from '../../images/footer.png'
import logo from '../../../src/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark pb-3'>
            <div className='d-flex'>
                <div className='container mt-4 d-flex justify-content-between'>
                    <div>
                        <div className='d-flex'>
                            <Link to='/home'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <p className='text-start fs-3 text-white fw-bold py-2'>
                            Caring for you <br />
                            & your smile.
                        </p>
                        <div className='d-flex social-links'>
                            <a href=""><i className="fab fa-facebook"></i></a>
                            <a href=""><i className="fab fa-instagram mx-4"></i></a>
                            <a href=""><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-info fs-2">
                            Our Services
                        </h4>
                        <ul className='solutions text-start p-0 fs-5'>
                            <a href="">Teeth Cleaning</a>
                            <a href="">Dental Fillings</a>
                            <a href="">Teeth Braces</a>
                            <a href="">Implants</a>
                            <a href="">Whitening</a>
                            <a href="">Painless injection</a>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-info fs-2">We Accept</h4>
                        <Image className='mt-3' src={img} />
                    </div>
                </div>
            </div>
            <h6>
                Copyright ©2021 All rights reserved by Mission Learning
            </h6>
        </div>

    );
};

export default Footer;