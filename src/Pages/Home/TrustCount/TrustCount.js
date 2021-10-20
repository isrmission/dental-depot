import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TrustCount.css'

const TrustCount = () => {
    return (
        <div className="bg">
            <h1 className="pt-5 pb-3">
                Worldwide Trusted by Everyone
            </h1>
            <div className="container pb-5">
                <Row>
                    <Col>
                        <div className="d-flex align-items-center justify-content-center">
                            <div>
                                <h1>
                                    <i className="fas fa-users"></i>
                                </h1>
                            </div>
                            <div className="ms-3 text-start">
                                <h1>
                                    1500<span className="fs-5 text-primary">+</span>
                                </h1>
                                <p>Happy client</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center justify-content-center">
                            <div>
                                <h1>
                                    <i className="fas fa-user-md"></i>
                                </h1>
                            </div>
                            <div className="ms-3 text-start">
                                <h1>
                                    300<span className="fs-5 text-primary">+</span>
                                </h1>
                                <p>Certified Doctors</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex align-items-center justify-content-center">
                            <div>
                                <h1>
                                    <i className="fas fa-award"></i>
                                </h1>
                            </div>
                            <div className="ms-3 text-start">
                                <h1>
                                    250<span className="fs-5 text-primary">+</span>
                                </h1>
                                <p>Award Won</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TrustCount;