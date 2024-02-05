import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Training() {
  return (
    <>
      {/* Banner  */}
      <div className="banner">
        <Navbar />
        <div className="hero__content">
          <div className="container">
            <div className="row g-3 justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="hero__content-title text-capitalize t-text-white">
                  Our expert trainer
                </h1>
                <ul className="list list--row breadcrumbs justify-content-center">
                  <li className="list--row__item breadcrumbs__item">
                    <a
                      href="/"
                      className="
                    t-link
                    breadcrumbs__link
                    text-uppercase
                    t-text-white
                    t-link--dark
                  "
                    >
                      home
                    </a>
                  </li>
                  <li className="list--row__item breadcrumbs__item">
                    <a
                      href="/trainer"
                      className="
                    t-link
                    breadcrumbs__link
                    text-uppercase
                    t-text-white
                    t-link--dark
                  "
                    >
                      trainer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

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
      {/* Client End*/}
      {/* Trainer Section  */}
      <section className="">
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
                    <p className="mb-0 text-capitalize text--dark xxl-text">
                      trainer
                    </p>
                  </div>
                  <h2 className="text-capitalize">Meet With Our Trainer</h2>
                  <p className="t-short-para mx-auto mb-0">
                    Connect with our expert team for a personalized consultation. Meet the professionals who will guide you towards success in your aviation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="trainer-slider">
                <div className="trainer-slider__item">
                  <div className="team-card">
                    <div className="team-card__img">
                      <img
                        src="assets/img/team-1.jpg"
                        alt="viserfly"
                        className="team-card__img-is"
                      />
                    </div>
                    <div className="team-card__body">
                      <h5
                        className="
                  text-capitalize text-center
                  mt-0
                  mb-2
                  team-card__title
                "
                      >
                        kuna huggo
                      </h5>
                      <p className="text-center text-capitalize team-card__sub-title">
                        trainer
                      </p>
                      <ul className="list list--row justify-content-center">
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-slider__item">
                  <div className="team-card">
                    <div className="team-card__img">
                      <img
                        src="assets/img/team-2.jpg"
                        alt="viserfly"
                        className="team-card__img-is"
                      />
                    </div>
                    <div className="team-card__body">
                      <h5
                        className="
                  text-capitalize text-center
                  mt-0
                  mb-2
                  team-card__title
                "
                      >
                        Robart Williams
                      </h5>
                      <p className="text-center text-capitalize team-card__sub-title">
                        trainer
                      </p>
                      <ul className="list list--row justify-content-center">
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-slider__item">
                  <div className="team-card">
                    <div className="team-card__img">
                      <img
                        src="assets/img/team-3.jpg"
                        alt="viserfly"
                        className="team-card__img-is"
                      />
                    </div>
                    <div className="team-card__body">
                      <h5
                        className="
                  text-capitalize text-center
                  mt-0
                  mb-2
                  team-card__title
                "
                      >
                        Tomas Kishan
                      </h5>
                      <p className="text-center text-capitalize team-card__sub-title">
                        trainer
                      </p>
                      <ul className="list list--row justify-content-center">
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-slider__item">
                  <div className="team-card">
                    <div className="team-card__img">
                      <img
                        src="assets/img/team-4.jpg"
                        alt="viserfly"
                        className="team-card__img-is"
                      />
                    </div>
                    <div className="team-card__body">
                      <h5
                        className="
                  text-capitalize text-center
                  mt-0
                  mb-2
                  team-card__title
                "
                      >
                        Divas Kings
                      </h5>
                      <p className="text-center text-capitalize team-card__sub-title">
                        trainer
                      </p>
                      <ul className="list list--row justify-content-center">
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="trainer-slider__item">
                  <div className="team-card">
                    <div className="team-card__img">
                      <img
                        src="assets/img/team-5.jpg"
                        alt="viserfly"
                        className="team-card__img-is"
                      />
                    </div>
                    <div className="team-card__body">
                      <h5
                        className="
                  text-capitalize text-center
                  mt-0
                  mb-2
                  team-card__title
                "
                      >
                        kuna huggo
                      </h5>
                      <p className="text-center text-capitalize team-card__sub-title">
                        trainer
                      </p>
                      <ul className="list list--row justify-content-center">
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li className="list--row__item-sm">
                          <a href="#" className="t-link social-icon">
                            <i className="bx bxl-linkedin" />
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
      {/* Trainer Section End */}

      {/* Team  */}
      <div className="py4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-9 col-xl-3">
              <h2 className="text-capitalize mt-0">Meet With our expert Team</h2>
              <p className="t-short-para mb-0">
              Connect with our expert team for a personalized consultation. Meet the professionals who will guide you towards success in your aviation journey.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card team-card--alt">
                <div className="team-card__img">
                  <img
                    src="assets/img/team-1.jpg"
                    alt="viserfly"
                    className="team-card__img-is"
                  />
                </div>
                <div className="team-card__overlay">
                  <p
                    className="
              mb-1
              xxl-text
              text-capitalize
              t-text-white
              fw-md
              text-center
            "
                  >
                    kuna huggo
                  </p>
                  <p className="text-capitalize t-text-white text-center mb-2">
                    Chef Consultant
                  </p>
                  <ul className="list list--row justify-content-center">
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card team-card--alt">
                <div className="team-card__img">
                  <img
                    src="assets/img/team-4.jpg"
                    alt="viserfly"
                    className="team-card__img-is"
                  />
                </div>
                <div className="team-card__overlay">
                  <p
                    className="
              mb-1
              xxl-text
              text-capitalize
              t-text-white
              fw-md
              text-center
            "
                  >
                    kuna huggo
                  </p>
                  <p className="text-capitalize t-text-white text-center mb-2">
                    Chef Consultant
                  </p>
                  <ul className="list list--row justify-content-center">
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card team-card--alt">
                <div className="team-card__img">
                  <img
                    src="assets/img/team-3.jpg"
                    alt="viserfly"
                    className="team-card__img-is"
                  />
                </div>
                <div className="team-card__overlay">
                  <p
                    className="
              mb-1
              xxl-text
              text-capitalize
              t-text-white
              fw-md
              text-center
            "
                  >
                    kuna huggo
                  </p>
                  <p className="text-capitalize t-text-white text-center mb-2">
                    Chef Consultant
                  </p>
                  <ul className="list list--row justify-content-center">
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li className="list--row__item-sm">
                      <a
                        href="#"
                        className="t-link social-icon t-text-white"
                        tabIndex={0}
                      >
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Feedback Section  */}
      <div className="py-5">
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
                    <p className="mb-0 text-capitalize text--dark xxl-text">
                      feedback
                    </p>
                  </div>
                  <h2 className="text-capitalize">What Say Our Student</h2>
                  <p className="t-short-para mx-auto mb-0">
                  Alroz Aviation: Excellence in training, endless opportunities! Outstanding faculty, cutting-edge facilities, and a transformative education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feedback-slider">
                <div className="feedback-slider__item">
                  <div className="feedback-card bg--light-1">
                    <div className="feedback-card__profile mb-4">
                      <img
                        src="\assets\img\fe4.png"
                        alt="viserfly"
                        className="feedback-card__profile-img flex-shrink-0"
                      />
                      <div className="feedback-card__profile-info">
                        <p
                          className="
                    feedback-card__profile-name
                    fw-md
                    text-capitalize
                    mb-0
                  "
                        >
                          sandeep mehra
                        </p>
                        <p className="mb-0 text-capitalize">Student</p>
                      </div>
                    </div>
                    <p className="feedback-card__comment">
                      Alroz Aviation is a great institute for air hostess training. The trainers are very experienced and knowledgeable.
                    </p>
                    <ul className="list list--row">
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="feedback-slider__item">
                  <div className="feedback-card bg--light-1">
                    <div className="feedback-card__profile mb-4">
                      <img
                        src="\assets\img\fe3.png"
                        alt="viserfly"
                        className="feedback-card__profile-img flex-shrink-0"
                      />
                      <div className="feedback-card__profile-info">
                        <p
                          className="
                    feedback-card__profile-name
                    fw-md
                    text-capitalize
                    mb-0
                  "
                        >
                          Ashima Tiwari
                        </p>
                        <p className="mb-0 text-capitalize">Student</p>
                      </div>
                    </div>
                    <p className="feedback-card__comment">
                      I did Cabin crew course of 6 months and I'm working as a cabin crew in one of the most reputed airline of India
                    </p>
                    <ul className="list list--row">
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="feedback-slider__item">
                  <div className="feedback-card bg--light-1">
                    <div className="feedback-card__profile mb-4">
                      <img
                        src="\assets\img\fe5.png"
                        alt="viserfly"
                        className="feedback-card__profile-img flex-shrink-0"
                      />
                      <div className="feedback-card__profile-info">
                        <p
                          className="
                    feedback-card__profile-name
                    fw-md
                    text-capitalize
                    mb-0
                  "
                        >
                          Anjali Bahuguna
                        </p>
                        <p className="mb-0 text-capitalize">Student</p>
                      </div>
                    </div>
                    <p className="feedback-card__comment">
                      It is the best institute in India. It's growing itself day by day. Alroz Aviation is spreading all around the world.
                    </p>
                    <ul className="list list--row">
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="feedback-slider__item">
                  <div className="feedback-card bg--light-1">
                    <div className="feedback-card__profile mb-4">
                      <img
                        src="\assets\img\fe6.png"
                        alt="viserfly"
                        className="feedback-card__profile-img flex-shrink-0"
                      />
                      <div className="feedback-card__profile-info">
                        <p
                          className="
                    feedback-card__profile-name
                    fw-md
                    text-capitalize
                    mb-0
                  "
                        >
                          Sonia Sandhu
                        </p>
                        <p className="mb-0 text-capitalize">Student</p>
                      </div>
                    </div>
                    <p className="feedback-card__comment">
                      First of all I'm very thankful  to alroz aviation that they give me an opportunity to become a part of this institute.  
                    </p>
                    <ul className="list list--row">
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="feedback-slider__item">
                  <div className="feedback-card bg--light-1">
                    <div className="feedback-card__profile mb-4">
                      <img
                        src="\assets\img\fe1.png"
                        alt="viserfly"
                        className="feedback-card__profile-img flex-shrink-0"
                      />
                      <div className="feedback-card__profile-info">
                        <p
                          className="
                    feedback-card__profile-name
                    fw-md
                    text-capitalize
                    mb-0
                  "
                        >
                          harpreet kaur
                        </p>
                        <p className="mb-0 text-capitalize">Student</p>
                      </div>
                    </div>
                    <p className="feedback-card__comment">
                      I have joined alroz aviation few months back for the ground staf,. I am satisfied with trainings provided by them.
                    </p>
                    <ul className="list list--row">
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
                          <i className="bx bxs-star" />
                        </span>
                      </li>
                      <li className="list--row__item-sm">
                        <span className="d-inline-block text--warning">
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
      </div>
      {/* Feedback Section End */}
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

export default Training;
