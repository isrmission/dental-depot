import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import './EmergencyAndInfo.css'

const EmergencyAndInfo = () => {
    return (
        <div className="emergency-sec">
            <Container>
                <Row>
                    <Col className="bg-primary text-white py-4 d-flex align-items-center justify-content-center border-radius-start" xs>
                        <div>
                            <h2 className="fs-1 fw-bold mb-3">Emergency?</h2>
                            <h4>Please Call Us at</h4>
                            <hr className="bg-white text-white line mx-auto my-4" />
                            <h2>+880-1701-000-000</h2>
                        </div>
                    </Col>
                    <Col className="bg-info text-white py-4 ps-4 d-flex align-items-center" xs>
                        <div>
                            <h2 className="fs-2 fw-bold mb-3 text-start">Opening Hours</h2>
                            <div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p>
                                            <i className="far fa-clock fs-3 p-2 bg-primary rounded-circle me-3"></i>
                                        </p>
                                    </div>
                                    <div className="fw-bold text-start">
                                        <p className="m-0">Saturday - Monday</p>
                                        <p>10.00 AM - 05.00 PM</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p>
                                            <i className="far fa-clock fs-3 p-2 bg-primary rounded-circle me-3"></i>
                                        </p>
                                    </div>
                                    <div className="fw-bold text-start">
                                        <p className="m-0">Tuesday - Thursday</p>
                                        <p>09.00 AM - 02.00 pM</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p>
                                            <i className="far fa-clock fs-3 p-2 bg-primary rounded-circle me-3"></i>
                                        </p>
                                    </div>
                                    <div className="fw-bold text-start">
                                        <p className="m-0">Friday</p>
                                        <p>Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs className="px-4 py-4 bg-success text-white d-flex align-items-center border-radius-end">
                        <div>
                            <h3>
                                Book an Appointment
                            </h3>
                            <p>
                                Simply, fill it up and submit.
                            </p>
                            <div>
                                <div className="d-flex">
                                    <div>
                                        <InputGroup className="mb-3 pe-3">
                                            <FormControl className="rounded-pill"
                                                placeholder="Name"
                                            />
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <InputGroup className="mb-3">
                                            <FormControl className="rounded-pill"
                                                placeholder="Phone"
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <InputGroup className="mb-3 pe-3">
                                            <FormControl className="rounded-pill"
                                                placeholder="Email"
                                            />
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <InputGroup className="mb-3">
                                            <FormControl className="rounded-pill"
                                                placeholder="Date"
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                            <Button variant="primary" className="w-100 mx-auto rounded-pill submit bg-success border-white fw-bold py-2 mt-3">
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EmergencyAndInfo;