import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-start d-flex align-items-center">
            <div className="container">
                <h3 className="fs-2 fw-bold">
                    Welcome
                </h3>
                <h1 className="header-text">
                    Caring for you <br /> & your smile.
                </h1>
                <p className="pt-2 fs-4">Comfortable, friendly, local, modern dentistry</p>
                <Link to="/allservices">
                    <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold fs-5 discover-btn">
                        Discover More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;