import React from 'react';

const AboutUs = () => {
    return (
        <div className="container">
            <h1 className="fw-bold fs-1 text-info mt-5">
                About Us
            </h1>

            <div>
                <p className="text-start ">
                    <span className="fs-3 fw-bold text-secondary">We'd love to </span><br />
                    <span className="fw-bold fs-1"> See You Smile</span>

                </p>
                <hr />
                <div className=" bg-dark bg-opacity-10 px-5">
                    <p className="fw-bold text-success text-start fs-5">

                        <span className="fst-italic text-dark fw-bolder">
                            Dental Depot
                        </span> is a State-of-The-Art and Modern Dental Clinic with New Technology and high-tech equipment. Since its inception in 2011, Smile O Care has partnered with you along your journey to brighten your smile. With great relationships come outstanding dentistry and the happiness of a beautiful and healthy smile. <br /> <br />

                        Our team of dedicated and highly qualified (MDS) specialists led by <span className="fst-italic text-dark fw-bolder">
                            Dr. Habibur Rahman
                        </span> and <span className="fst-italic text-dark fw-bolder">
                            Dr. Mahabub Hasan
                        </span> is from top universities with several years of experience. Given our background, our focus is on dental experience par excellence and patient satisfaction at affordable costs. Together with our Specialists and Support staff, we are committed to building trust with our patients and deliver personalized and comfortable dental care from Check-Up to Implants, Tooth Extraction to Minor Surgeries, Smile Correction to Cosmetic Build-up, all under one roof.
                        <br /> <br />
                        At Smile O Care, we patiently listen to all your dental problems and explain to you customized treatment modalities. We want you to feel confident in the care you’re receiving and assist you to make great decisions for your health. The cornerstone of our dental practice is keeping our patients happy by offering pain-free, affordable, and time-saving treatment.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <p className="text-start bg-dark bg-opacity-10 ">
                    <span className="fs-3 fw-bold text-secondary">Why </span><br />
                    <span className="fw-bold fs-1">US</span>
                </p>
                <p className="my-5 text-start">
                    Everyone deserves a dentist who goes the extra mile — and that’s exactly what you’ll find at Smile O Care. When you visit our dentist clinic, you’ll get more than just a perfect smile. You’ll also find a comfort-focused and judgment-free approach designed to help you achieve a beautiful and healthy smile for life. At Smile O Care we provide Comprehensive patient-centric care for all age groups where your happiness is our success.</p>            </div>
        </div>
    );
};

export default AboutUs;