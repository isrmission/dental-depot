import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle, signInUsingEmail } = useAuth();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // setUser(result.user);
                history.push(location.state?.from || '/home');
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e => {
        e.preventDefault();
        if (Password.length < 6) {
            setError('Password should at least 6 characters.');
            return;
        }
        signInUsingEmail(Email, Password)
            .then(result => {
                history.push(location.state?.from || '/home');
            })
        setError('');
    }
    return (
        <div className="bg-secondary bg-opacity-25 py-5 mt-0">
            <br />
            <h3 className="fw-bold fs-2">
                Please Login
            </h3>
            <br />
            <form className="py-3 w-25 mx-auto border border-1 border-secondary rounded-3">
                <div className="row mb-3">
                    <div className="col-sm-10 mx-auto">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 mx-auto">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" required />
                    </div>
                </div>
                <div className="row">
                    <p className="text-danger">
                        {error}
                    </p>
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary rounded-pill mb-2 px-4">Login</button>
                <p className="mt-4">
                    Not Registered?
                    <Link to='/signup'>
                        <button className="ms-1 btn btn-secondary btn-sm">
                            Sign Up
                        </button>
                    </Link>
                </p>
            </form>
            <p className="fw-bold mb-1 mt-3 fs-4">
                Sign In Instead!
            </p>
            <button onClick={handleGoogleLogin} type="submit" className="btn rounded-pill px-4 border border-2 py-0 pb-1 border-white google"><i className="fab fa-google p-0 text-danger bg-transparent ps-1"></i><span className="fs-5 ps-0 text-success">oo<span className="text-danger">g</span>le</span></button>
        </div >
    );
};

export default Login;