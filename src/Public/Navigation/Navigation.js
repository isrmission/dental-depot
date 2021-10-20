import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo.png';
import useAuth from '../../hooks/useAuth/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" className="sticky-top py-1">
            <div className="container d-inline-flex align-items-center justify-content-between">
                <div>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" className="logo-size" />
                    </Navbar.Brand>
                </div>
                <div className="d-flex justify-content-end">
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link as={Link} to="/home" className="my-auto">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allservices" className="my-auto">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors" className="my-auto">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="my-auto">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className="my-auto">Register</Nav.Link>
                            {!user.email ? <Nav.Link as={Link} to="/login">Login</Nav.Link> :
                                <Navbar.Text className="py-0">
                                    <a href="#login">{user?.displayName}</a>
                                    <Button onClick={logOut} variant="light" className="p-1 rounded-3 my-1 mx-1">Log Out</Button>
                                </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    );
};

export default Navigation;