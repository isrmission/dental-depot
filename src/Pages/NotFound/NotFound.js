import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/not-found.jpg';
const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" className="w-50" />
            <br />
            <Link to="/">
                <button className="btn btn-danger">
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default NotFound;