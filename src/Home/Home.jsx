import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {

    const [counters, setCounters] = useState({
        totalStaff: 0,
        totalAward: 0,
        totalStudent: 0,
        totalCourse: 0,
    });

    useEffect(() => {
        const updateCounter = (counter, target) => {
            const increment = target / 150;
            if (counter < target) {
                return Math.ceil(counter + increment);
            } else {
                return target;
            }
        };

        const animateCounters = () => {
            setCounters((prevCounters) => ({
                totalStaff: updateCounter(prevCounters.totalStaff, 30),
                totalAward: updateCounter(prevCounters.totalAward, 12),
                totalStudent: updateCounter(prevCounters.totalStudent, 895),
                totalCourse: updateCounter(prevCounters.totalCourse, 10),
            }));
        };

        const interval = setInterval(animateCounters, 100);

        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <>
            {/* Hero  */}
            <div className="">
                <Navbar />
                <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="\assets\img\slider1.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h6 className='enroll text-start text-dark text-primary'>GROW YOUR CAREER &nbsp;
                                   <span className='fw-bolder bg--warning'>WITH</span> &nbsp; 
                                  <span style={{ color: "#1C335D"}} className='fw-bold'>ALROZ ACADEMY</span> 
                                </h6>
                                <h5 className='enroll text-start display-6 text-dark fw-Normal fw-bold'>Enroll In Our
                                    <br /> <span className='display-2' style={{ color: "#1C335D" }}>Alroz Institute!</span></h5>
                                <p className='enroll text-start text-dark fir'>
                                    We provide world-class training to impart worldwide experience <br /> and advance in the business in our students.
                                </p>
                                <a href="/" className='enro'>
                                    <button className='btn btn-warning'> Read More </button>
                                </a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="\assets\img\slider2.png" class="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h6 className='enroll text-start text-dark text-primary'>GROW YOUR CAREER &nbsp;
                                   <span className='fw-bolder bg--warning'>WITH</span> &nbsp; 
                                  <span style={{ color: "#1C335D"}} className='fw-bold'>ALROZ ACADEMY</span> 
                                </h6>
                                <h5 className='enroll text-start display-6 text-dark fw-Normal fw-bold'>Enroll In Our
                                    <br /> <span className='display-2' style={{ color: "#1C335D" }}>Alroz Institute!</span></h5>
                                <p className='enroll text-start text-dark fir'>
                                    We provide world-class training to impart worldwide experience <br /> and advance in the business in our students.
                                </p>
                                <a href="/" className='enro'>
                                    <button className='btn btn-warning'> Read More </button>
                                </a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="\assets\img\slider3.png" class="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h6 className='enroll text-start text-dark text-primary'>GROW YOUR CAREER &nbsp;
                                   <span className='fw-bolder bg--warning'>WITH</span> &nbsp; 
                                  <span style={{ color: "#1C335D"}} className='fw-bold'>ALROZ ACADEMY</span> 
                                </h6>
                                <h5 className='enroll text-start display-6 text-dark fw-Normal fw-bold'>Enroll In Our
                                    <br /> <span className='display-2' style={{ color: "#1C335D" }}>Alroz Institute!</span></h5>
                                <p className='enroll text-start text-dark fir'>
                                    We provide world-class training to impart worldwide experience <br /> and advance in the business in our students.
                                </p>
                                <a href="/" className='enro'>
                                    <button className='btn btn-warning'> Read More </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <img
                    src="assets/img/plane.png"
                    alt="viserfly"
                    className="hero__img-anime"
                /> */}
            </div>
            {/* Hero End */}

            {/* Client Section  */}
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="client-slider">
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/11.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/1.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/4.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/SpiceJet.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/6.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/15.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                                <div className="client-slider__item">
                                    <img
                                        src="https://www.frankfinn.com/img/13.webp"
                                        alt="viserfly"
                                        className="img-fluid mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Client Section End */}

            {/* About Section  */}
            <section className="section--sm section--bottom pattern">
                <div className="background-image" style={{ opacity: "0.6" }}>
                    <img src="\assets\img\back2.png" className='img-fluid' alt="" />
                </div>
                <div className="container">
                    <div
                        className="
      row
      justify-content-center
      align-items-lg-center
      justify-content-xl-between
    "
                    >
                        <div className="col-md-10 col-lg-6 col-xl-5 text-center text-lg-start">
                            <div
                                className="
          d-flex
          align-items-center
          justify-content-center justify-content-lg-start
        "
                            >
                                <div className="vf-custom-icon me-2 flex-shrink-0 aos-item" data-aos="fade-left" data-aos-duration="1500">
                                    <img
                                        src="assets/img/icon-plane.png"
                                        alt="viserfly"
                                        className="img-fluid"
                                    />
                                </div>
                                <p className="mb-0 text-capitalize text--dark xxl-text">about</p>
                            </div>
                            <h2><span style={{ color: "#1C335D" }}>We’re here to make your</span>dreams come true! </h2>
                            <p className="t-short-para">
                                At our core, we strive to transform your dreams into reality. Whether it's in education, career development, or personal growth, our dedicated team is here to support and guide you every step of the way. Together, let's embark on a journey to turn your aspirations into tangible achievements. Your dreams are within reach, and we're here to make them come true.
                            </p>
                            <a
                                href="/about"
                                className="t-link btn text-dark btn-warning"
                            >
                                About Us
                            </a>
                        </div>
                        <div className="col-lg-6 col-xl-7 d-none d-lg-block">
                            <img
                                src="\assets\img\about-all.jpg"
                                alt="viserfly"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}

            {/* Course Section  */}
            <section className="course-section py-5">
                <div className="section__head">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-xl-6">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="vf-custom-icon me-2 flex-shrink-0">
                                            <img
                                                src="assets/img/icon-plane.png"
                                                alt="viserfly"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <p className="mb-0 text-capitalize text--dark xxl-text" style={{ color: "#1C335D" }} >
                                            courses
                                        </p>
                                    </div>
                                    <h2 className="text-capitalize mb-0">
                                        <span style={{ color: "#1C335D" }}>Our Training</span>
                                        Courses
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-4 gy-xxl-5 justify-content-center">
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Airhostesses Course.png"
                                        alt="viserfly"
                                        className="course-card__img-is border"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">Air Hostess Course</h4>
                                    <p>
                                        Enroll in our Air Hostess Course, requiring a 12th-grade education. This 8-month certification program provides comprehensive training for a dynamic career in aviation. Secure your certification and soar to new heights with us!
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/AirHostessCourse">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\2.png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">International Air Hostess Course </h4>
                                    <p>
                                        Embark on a global journey with our International Air Hostess Course. Open to 12th-grade graduates, this one-year diploma program equips you with the skills for an exciting career in aviation. Elevate your future with us!
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/international-air-hostess-course">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Untitled design (17).png"
                                        alt="viserfly"
                                        className="course-card__img-is shadow-lg"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">B.Sc In Aviation</h4>
                                    <p>
                                        Pursue a B.Sc in Aviation with a 12th-grade background in Physics and Math. This three-year undergraduate program offers a comprehensive education in aviation, setting the stage for a dynamic career in the aerospace industry.
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/b.Sc-in-aviation">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\BBA Airport Management.png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">BBA Airport Management</h4>
                                    <p>
                                        Explore a career in airport management with our BBA program. Open to 12th-grade graduates, this three-year undergraduate course provides a solid foundation for a dynamic role in airport operations and management.
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/bba-airport-management">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Untitled design (18).png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start                   ">Bachelor's In Aerospace Engineering </h4>
                                    <p>
                                        Embark on a four-year journey with our Bachelor's in Aerospace Engineering. Open to 12th-grade graduates with a background in Physics and Math, this degree program paves the way for a promising career in the dynamic field of aerospace engineering.
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/aachelor-in-aerospace-engineering">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Untitled design (19).png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">Aeronautical Engineering </h4>
                                    <p>
                                        Chart your course in Aeronautical Engineering with a four-year degree program. Open to 12th-grade graduates with a foundation in Physics and Math, this comprehensive curriculum prepares you for a rewarding career in aerospace innovation and technology.
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/AeronauticalE">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Untitled design (20).png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">BBA + MBA Integrated Course</h4>
                                    <p>
                                        Opt for a comprehensive BBA + MBA Integrated Course. With a minimum 12th-grade qualification, this four-year degree program provides a seamless pathway to earn both undergraduate and postgraduate degrees in business administration.</p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/bba-mba-integrated-course">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Aviation Management MBA.png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">MBA Aviation Management</h4>
                                    <p>
                                        Advance your career with an MBA in Aviation Management. Open to graduates, this two-year postgraduate program equips you with strategic skills for leadership roles in the dynamic aviation industry.
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/mba-aviation-management">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Airline, Travel, Tourism.png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">Airline, Travel, Tourism</h4>
                                    <p>
                                        Airline, Travel, Tourism & Hospitality Management Course. Designed for 12th-grade graduates, this one-year diploma program provides specialized training for a rewarding career in the diverse fields of aviation, travel, tourism, and hospitality."
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/airline-travel-tourism">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-xl-6">
                            <div className="course-card">
                                <div className="course-card__img">
                                    <img
                                        src="\assets\img\Untitled design (21).png"
                                        alt="viserfly"
                                        className="course-card__img-is"
                                    />
                                </div>
                                <div className="course-card__content">
                                    <h4 className="text-capitalize text-start">Shipping, Logistics</h4>
                                    <p>Embark on a dynamic career path with our Shipping, Logistics &  Supply Chain Management Course. Tailored for 12th-grade graduates, this one-year diploma program offers specialized training to excel in the fields of shipping, logistics, and supply chain management.
                                    </p>
                                    <div class="d-grid d-md-flex justify-content-md-start">
                                        <a href="/shipping-logistics">
                                            <button class="btn btn-warning me-md-2" type="button">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Course Section End */}

            <section className="">
            </section>
            {/* Feature Section  */}
            <section className="section--sm">
                <div className="container">
                    <div
                        className="
      row
      justify-content-center
      align-items-lg-center
      justify-content-xl-between
    "
                    >
                        <div className="col-md-10 col-lg-6 col-xl-5">
                            <div className="text-center text-lg-start">
                                <div
                                    className="
            d-flex
            align-items-center
            justify-content-center justify-content-lg-start
          "
                                >
                                    <div className="vf-custom-icon me-2 flex-shrink-0">
                                        <img
                                            src="assets/img/icon-plane.png"
                                            alt="viserfly"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="mb-0 text-capitalize text--dark xxl-text">
                                        features
                                    </p>
                                </div>
                                <h2><span style={{ color: "#1C335D" }}>Why</span>Choose Us</h2>
                                <p className="t-short-para">
                                    Consider Alroz Aviation Institute for your choice of a flying academy. Recognized as India's premier institute in aviation, travel, tourism, and hospitality, it holds approval from the Ministry of Skill Development. With a stellar reputation, top-notch facilities, and numerous education awards, it is known for exceptional placement records, making it a preferred option for aspiring professionals. The institute prides itself on embracing innovative teaching methodologies, ensuring that courses remain engaging, interactive, and in sync with the rapidly evolving landscape of the aviation industry.
                                </p>
                            </div>
                            {/* <div className="t-mt-40">
                                <div className="row g-4 g-md-3">
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src="\assets\img\icon-chat.png"
                                                    alt="viserfly" width="50px"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <h5
                                                    className="
                    text-capitalize
                    mt-0
                    t-body-font
                    fw-md
                    text-start
                  "
                                                >
                                                    24/7 Support
                                                </h5>
                                                <p className="mb-0 text-start">
                                                    Support for Your Queries, Solutions, and Needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <div className="">
                                                <img
                                                    src="\assets\img\low.png"
                                                    alt="viserfly" width="50px"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <h5
                                                    className="
                    text-capitalize
                    mt-0
                    t-body-font
                    fw-md
                    text-start
                  "
                                                >
                                                    Low Cost
                                                </h5>
                                                <p className="mb-0 text-start">
                                                    Budget-Friendly Pricing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="t-mt-40">
                                <div className="row g-4 g-md-3">
                                    <div className="col-md-6">
                                        <img
                                            src="assets/img/feature-img-sm.png"
                                            alt="viserfly"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list list--primary list--column text-start"><li className="list__item list--column__item-sm">Industry Expertise</li>
                                            <li className="list__item list--column__item-sm">Personalized Learning</li><li className="list__item list--column__item-sm">Cutting-Edge Facilities</li>
                                            <li className="list__item list--column__item-sm">Comprehensive Curriculum</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 d-none d-lg-block">
                            <img
                                src="\assets\img\abt.jpg"
                                alt="viserfly"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Feature Section End */}
            {/* FAQ  */}
            {/* FAQ End */}
            {/* Feedback  */}
            <section className="feedback-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <h2 className="text-capitalize text-start"><span style={{ color: "#1C335D" }}>Our</span>Testimonials</h2>
                        </div>
                    </div>
                </div>
                <div className="container p-5">
                    <div className="row g-5 align-items-center justify-content-xxl-between">
                        <div className="col-md-6">
                            <div className="feedback-slider-for">
                                <div className="feedback-slider-for__item">
                                    <div className="feedback-slider-for__img text-center text-xl-end">
                                        <img
                                            src="\assets\img\r3.jpg"
                                            alt="viserfly"
                                            className="
                feedback-slider-for__img-is
                mx-auto
                ms-xl-auto
                me-xl-0
              "
                                        />
                                    </div>
                                </div>
                                <div className="feedback-slider-for__item">
                                    <div className="feedback-slider-for__img text-center text-xl-end">
                                        <img
                                            src="\assets\img\re1.jpeg"
                                            alt="viserfly"
                                            className="
                feedback-slider-for__img-is
                mx-auto
                ms-xl-auto
                me-xl-0
              "
                                        />
                                    </div>
                                </div>
                                <div className="feedback-slider-for__item">
                                    <div className="feedback-slider-for__img text-center text-xl-end">
                                        <img
                                            src="\assets\img\re4.jpg"
                                            alt="viserfly"
                                            className="
                feedback-slider-for__img-is
                mx-auto
                ms-xl-auto
                me-xl-0
              "
                                        />
                                    </div>
                                </div>
                                <div className="feedback-slider-for__item">
                                    <div className="feedback-slider-for__img text-center text-xl-end">
                                        <img
                                            src="\assets\img\re2.jpeg"
                                            alt="viserfly"
                                            className="
                feedback-slider-for__img-is
                mx-auto
                ms-xl-auto
                me-xl-0
              "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feedback-slider-nav">
                                <div className="feedback-slider-nav__item">
                                    <div className="feedback-slider-nav__content text-center text-md-start">
                                        <span className="feedback-slider-nav__quote">
                                            <i className="bx bxs-quote-right" />
                                        </span>
                                        <h4 className="feedback-slider-nav__title text-capitalize mb-2">
                                            Aashi Gupta
                                        </h4>
                                        <p className="feedback-slider-nav__sub-title text-capitalize">
                                          <span style={{ color: "#1C335D" }}>student</span>
                                        </p>
                                        <p className="feedback-slider-nav__text t-short-para">
                                            Hey , I'm Aashi Gupta and I was trainee of Alroz Aviation and I cleared my all rounds in interview in celeby aviation and I got selected and now I'm so happy. Thank you so much
                                        </p>
                                        <ul
                                            className="
                list list--row
                justify-content-center justify-content-md-start
              "
                                        >
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="feedback-slider-nav__item">
                                    <div className="feedback-slider-nav__content text-center text-md-start">
                                        <span className="feedback-slider-nav__quote">
                                            <i className="bx bxs-quote-right" />
                                        </span>
                                        <h4 className="feedback-slider-nav__title text-capitalize mb-2">
                                            Ritik Gusain
                                        </h4>
                                        <p className="feedback-slider-nav__sub-title text-capitalize">
                                         <span style={{ color: "#1C335D" }}>student</span> 
                                        </p>
                                        <p className="feedback-slider-nav__text">
                                            I got selected In IGT And I am very Grateful to Alroz Aviation For my selection because they helped me in every situation...
                                            Once again thank to all the members of Alroz Aviation..
                                        </p>
                                        <ul
                                            className="
                list list--row
                justify-content-center justify-content-md-start
              "
                                        >
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="feedback-slider-nav__item">
                                    <div className="feedback-slider-nav__content text-center text-md-start">
                                        <span className="feedback-slider-nav__quote">
                                            <i className="bx bxs-quote-right" />
                                        </span>
                                        <h4 className="feedback-slider-nav__title text-capitalize mb-2">
                                            Arman Kumar
                                        </h4>
                                        <p className="feedback-slider-nav__sub-title text-capitalize">
                                            <span style={{ color: "#1C335D" }}>student</span>
                                        </p>
                                        <p className="feedback-slider-nav__text">
                                            Hey, I am Arman Kumar trainee of alroz aviation I got best experience in the field of aviation interviews because of alroz aviation
                                        </p>
                                        <ul
                                            className="
                list list--row
                justify-content-center justify-content-md-start
              "
                                        >
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="feedback-slider-nav__item">
                                    <div className="feedback-slider-nav__content text-center text-md-start">
                                        <span className="feedback-slider-nav__quote">
                                            <i className="bx bxs-quote-right" />
                                        </span>
                                        <h4 className="feedback-slider-nav__title text-capitalize mb-2">
                                            Preeti kakran
                                        </h4>
                                        <p className="feedback-slider-nav__sub-title text-capitalize">
                                            <span style={{ color: "#1C335D" }}>student</span>
                                        </p>
                                        <p className="feedback-slider-nav__text">
                                            I was a trainee of alroz aviation. I am very glad that I have climbed a stair towards my career of being a cabin crew, I'm working in Indigo as a cabin crew and I hope I will become cabin crew also very soon. Thanks a lot to all my teacher's for their support and blessings.
                                        </p>
                                        <ul
                                            className="
                list list--row
                justify-content-center justify-content-md-start
              "
                                        >
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                            <li className="list--row__item-sm">
                                                <span className="feedback-slider-nav__rating text--warning">
                                                    <i className="bx bxs-star" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Feedback End */}
            {/* Gallery Section  */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center g-4">
                        <div className="col-12">
                            <div className="text-center">
                                <h2 className="text-capitalize">Gallery</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row filter-container g-0">
                                <div
                                    className="col-md-6 col-lg-4 filtr-item"
                                    data-category="web"
                                    data-sort="value"
                                >
                                    <div className="gallery-photo">
                                        <img
                                            src="\assets\img\g1.png"
                                            alt="viserfly"
                                            className="gallery-photo__img"
                                        />
                                        <div className="gallery-photo__content">
                                            <p className="xxl-text text-capitalize t-text-white">
                                                crew training
                                            </p>
                                            <ul className="list list--row">
                                                <li className="list--row__item">
                                                    <a
                                                        href="\assets\img\g1.png"
                                                        className="t-link gallery-photo-magnify gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-show" />
                                                    </a>
                                                </li>
                                                {/* <li className="list--row__item">
                                                    <a
                                                        href="gallery.html"
                                                        className="t-link gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-link-alt" />
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 filtr-item"
                                    data-category="branding"
                                    data-sort="value"
                                >
                                    <div className="gallery-photo">
                                        <img
                                            src="\assets\img\g2.jpg"
                                            alt="viserfly"
                                            className="gallery-photo__img"
                                        />
                                        <div className="gallery-photo__content">
                                            <p className="xxl-text text-capitalize t-text-white">
                                                crew training
                                            </p>
                                            <ul className="list list--row">
                                                <li className="list--row__item">
                                                    <a
                                                        href="\assets\img\g2.jpg"
                                                        className="t-link gallery-photo-magnify gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-show" />
                                                    </a>
                                                </li>
                                                <li className="list--row__item">
                                                    <a
                                                        href="gallery.html"
                                                        className="t-link gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-link-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 filtr-item"
                                    data-category="web"
                                    data-sort="value"
                                >
                                    <div className="gallery-photo">
                                        <img
                                            src="\assets\img\g3.jpg"
                                            alt="viserfly"
                                            className="gallery-photo__img"
                                        />
                                        <div className="gallery-photo__content">
                                            <p className="xxl-text text-capitalize t-text-white">
                                                crew training
                                            </p>
                                            <ul className="list list--row">
                                                <li className="list--row__item">
                                                    <a
                                                        href="\assets\img\g3.jpg"
                                                        className="t-link gallery-photo-magnify gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-show" />
                                                    </a>
                                                </li>
                                                <li className="list--row__item">
                                                    <a
                                                        href="gallery.html"
                                                        className="t-link gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-link-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 filtr-item"
                                    data-category="branding"
                                    data-sort="value"
                                >
                                    <div className="gallery-photo">
                                        <img
                                            src="\assets\img\g4.jpg"
                                            alt="viserfly"
                                            className="gallery-photo__img"
                                        />
                                        <div className="gallery-photo__content">
                                            <p className="xxl-text text-capitalize t-text-white">
                                                crew training
                                            </p>
                                            <ul className="list list--row">
                                                <li className="list--row__item">
                                                    <a
                                                        href="public\assets\img\g4.jpg"
                                                        className="t-link gallery-photo-magnify gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-show" />
                                                    </a>
                                                </li>
                                                <li className="list--row__item">
                                                    <a
                                                        href="gallery.html"
                                                        className="t-link gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-link-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 filtr-item"
                                    data-category="seo"
                                    data-sort="value"
                                >
                                    <div className="gallery-photo">
                                        <img
                                            src="\assets\img\g5.jpg"
                                            alt="viserfly"
                                            className="gallery-photo__img"
                                        />
                                        <div className="gallery-photo__content">
                                            <p className="xxl-text text-capitalize t-text-white">
                                                crew training
                                            </p>
                                            <ul className="list list--row">
                                                <li className="list--row__item">
                                                    <a
                                                        href="\assets\img\g5.jpg"
                                                        className="t-link gallery-photo-magnify gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-show" />
                                                    </a>
                                                </li>
                                                <li className="list--row__item">
                                                    <a
                                                        href="gallery.html"
                                                        className="t-link gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-link-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 filtr-item"
                                    data-category="branding"
                                    data-sort="value"
                                >
                                    <div className="gallery-photo">
                                        <img
                                            src="\assets\img\g7.jpg"
                                            alt="viserfly"
                                            className="gallery-photo__img"
                                        />
                                        <div className="gallery-photo__content">
                                            <p className="xxl-text text-capitalize t-text-white">
                                                crew training
                                            </p>
                                            <ul className="list list--row">
                                                <li className="list--row__item">
                                                    <a
                                                        href="\assets\img\g7.jpg"
                                                        className="t-link gallery-photo-magnify gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-show" />
                                                    </a>
                                                </li>
                                                <li className="list--row__item">
                                                    <a
                                                        href="gallery.html"
                                                        className="t-link gallery-photo__icon btn btn--sqr"
                                                    >
                                                        <i className="bx bx-link-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Gallery Section End */}
            {/* CTA  */}

            <div className="section cta-section">
                <div className="container">
                    <div className="row g-4 justify-content-xxl-between align-items-center">
                        <div className="col-lg-6 col-xxl-5">
                            <ul className="list counter-list">
                                <li className="counter-list__item">
                                    <h1
                                        className="
              odometer--plus odometer--custom
              mt-0
              mb-0
              text-uppercase
              t-text-white
              text-center
            "
                                    >
                                        <span className="odometer odometer--custom" id="totalStaff">
                                            {counters.totalStaff}
                                        </span>
                                    </h1>
                                    <p className="mb-0 t-text-white text-capitalize xxl-text text-center">
                                        total staffs
                                    </p>
                                </li>
                                <li className="counter-list__item">
                                    <h1
                                        className="
              mt-0
              mb-0
              odometer--custom
              text-uppercase
              t-text-white
              text-center
            "
                                    >
                                        <span className="odometer" id="totalAward">
                                            {counters.totalAward}
                                        </span>
                                    </h1>
                                    <p className="mb-0 t-text-white text-capitalize xxl-text text-center">
                                        winning awards
                                    </p>
                                </li>
                                <li className="counter-list__item">
                                    <h1
                                        className="
              mt-0
              mb-0
              odometer--custom
              text-uppercase
              t-text-white
              text-center
            "
                                    >
                                        <span className="odometer" id="totalStudent">
                                            {counters.totalStudent}
                                        </span>
                                    </h1>
                                    <p className="mb-0 t-text-white text-capitalize xxl-text text-center">
                                        happy students
                                    </p>
                                </li>
                                <li className="counter-list__item">
                                    <h1
                                        className="
              odometer--plus odometer--custom
              mt-0
              mb-0
              text-uppercase
              t-text-white
              text-center
            "
                                    >
                                        <span className="odometer" id="totalCourse">
                                            {counters.totalCourse}
                                        </span>
                                    </h1>
                                    <p className="mb-0 t-text-white text-capitalize xxl-text text-center">
                                        total courses
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-lg-5 col-xxl-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="query bor bg--light-1 shadow-lg border">
                                        <h3
                                            className="
                query__title
                text-center text-lg-start text-capitalize
                mt-0 text-dark
              "
                                        >
                                            <span style={{ color: "#1C335D" }}>join</span>
                                            with us
                                        </h3>
                                        <form action="#" className="row g-4">
                                            <div className="col-6">
                                                <input
                                                    type="firstname"
                                                    className="
                    form-control
                    form-control-custom
                    form-control-custom--outline
                    form-control-custom--outline-dark
                  "
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="lastname"
                                                    className="
                    form-control
                    form-control-custom
                    form-control-custom--outline
                    form-control-custom--outline-dark
                  "
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="email"
                                                    className="
                                                    form-control
                                                    form-control-custom
                                                    form-control-custom--outline
                                                    form-control-custom--outline-dark
                  "
                                                    placeholder="email address"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="phone"
                                                    className="
                    form-control
                    form-control-custom
                    form-control-custom--outline
                    form-control-custom--outline-dark
                  "
                                                    placeholder="Phone"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="custom--nice-select">
                                                    <select className="
                    form-control
                    form-control-custom
                    form-control-custom--outline
                    form-control-custom--outline-dark">
                                                        <option data-display="Courses">Select Courses</option>
                                                        <option value={1}>
                                                            Air Hostess Course</option>
                                                        <option value={2}>International Air Hostess Course </option>
                                                        <option value={3}>
                                                            B.Sc. (Bachelor of Science) In Aviation</option>
                                                        <option value={4}>
                                                            BBA Airport Management</option>
                                                        <option value={5}>
                                                            Bachelor's In Aerospace Engineering</option>
                                                        <option value={6}>
                                                            Aeronautical Engineering </option>
                                                        <option value={7}>BBA + MBA Integrated Course</option>
                                                        <option value={8}>
                                                            MBA Aviation Management</option>
                                                        <option value={9}>
                                                            Airline, Travel, Tourism & Hospitality Management</option>
                                                        <option value={10}>
                                                            Shipping, Logistics & Supply Chain Management</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <div className="col-12">
                                                <textarea
                                                    cols={30}
                                                    rows={5}
                                                    className="
                    form-control
                    form-control-custom--outline-transparent form-control-custom--dark
                  "
                                                    placeholder="Writing Something"
                                                    defaultValue={""}
                                                />
                                            </div> */}
                                            <div className="col-12">
                                                <div class="d-grid d-md-flex justify-content-md-start">
                                                    <input className="btn btn-dark" data-bs-toggle="tooltip" type="submit" defaultValue="Submit" />
                                                </div>
                                                {/* <div class="d-grid gap-2">
                                                    <button class="btn btn-primary" type="button">Button</button>
                                                </div> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA End */}

            {/* Blog Section  */}
            <section className="py-5">
                <div class="container-fluid pt50 pb50">
                    <div class="container">
                        <div class="row mt50">
                            <div class="col-md-12">
                                <h4 text-capitalize mt-0><span style={{ color: "#1C335D" }}>OUR STUDENTS</span> GOT PLACED IN <span><img src="\assets\img\Shape 1.png" width="5%" alt="" /></span></h4>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/11.webp" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/1.webp" alt="Our Students Get Placed In - Indigo" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/4.webp" alt="Our Students Get Placed In - Air India" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/SpiceJet.webp" className='img-fluid' />
                            </div>

                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/6.webp" alt="Our Students Get Placed In - Air Asia" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/9.webp" alt="Our Students Get Placed In -Lufthansa" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/15.webp" alt="Our Students Get Placed In - Oman Air" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="https://www.frankfinn.com/img/13.webp" alt="Our Students Get Placed In - Etihad Airways" className='img-fluid' />
                            </div>
                            {/* */}
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s1.png" alt="Our Students Get Placed In - Etihad Airways" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s2.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s3.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s4.png" alt="" className='img-fluid' />
                            </div>
                            <br />
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s5.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s6.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s7.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s9.png" alt="" className='img-fluid' />
                            </div>
                            {/**/}
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s11.png" className='img-fluid' alt="Our Students Get Placed In - Etihad Airways" />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s12.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s10.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s13.png" className='img-fluid' alt="" />
                            </div>

                            <div className="col-md-1 col-sm-2 col-xs-3">
                                <img src="\assets\img\s14.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div> <br />
            </section>

            {/* Blog Section End */}
            {/* CTA  */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cta bg--dark">
                            <div className="row g-3 align-items-lg-center">
                                <div className="col-12 col-lg-4 col-xl-3">
                                    <div className="footer-logo text-center">
                                        <img
                                            src="assets/img/logon.png"
                                            alt="viserfly"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-9">
                                    <ul
                                        className="
              list list--row
              justify-content-center justify-content-md-between
              align-items-md-center
            "
                                    >
                                        <li className="list--row__item">
                                            <h3
                                                className="
                  text-capitalize
                  t-text-white
                  mt-0
                  text-center text-md-start
                  ps-xl-3
                "
                                            >
                                                Like to become a pilot
                                            </h3>
                                            <p className="t-text-white text-center text-md-start ps-xl-3">
                                                Alroz Aviation Institute
                                            </p>
                                        </li>
                                        <li className="list--row__item">
                                            <a
                                                href="become-pilot.html"
                                                className="t-link btn btn--light btn--lg text-capitalize"
                                            >
                                                become an pilot
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA End */}
            <Footer />
        </>

    )
}

export default Home;


