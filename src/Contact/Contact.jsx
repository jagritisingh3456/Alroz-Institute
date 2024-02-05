import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Contact = () => {
  return (
    <>
      {/* About Section  */}
      <div className="banner">
        <Navbar />
        <div className="hero__content">
          <div className="container">
            <div className="row g-3 justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="hero__content-title text-capitalize t-text-white">
                  Contact
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
                    t-link--primary
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
                    t-link--primary
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

      <div className="row">
        <div className="col-12">
          <hr className="mt-md-45 mt-sm-30 mt-xs-30 mt-60" />
        </div>
      </div>
      <section className="contact-us overflow-hidden pb-5 pt-4 pattern">
        <div className="background-image">
          {/* <img src="\assets\img\blog-.png" alt="dot-banner" /> */}
          <img src="/assets/img/service.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h6 className='text-uppercase text-start text-dark fs-6'>
                Contact us with ease
              </h6>
              <h2 className='text-start fw-bold'><span style={{ color: "#1C335D" }}>Get in</span>Touch</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste enim assumenda! Hic maiores voluptatum necessitatibus corrupti perferendis, consectetur nulla quod explicabo nam iusto earum voluptatibus iste eos molestiae velit?</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="row contact-us__item-wrapper mt-xs-35 mt-sm-40 mt-md-45">
                <div className="col-md-6">
                  <h5 className='text-start'>Greater Noida Office</h5>
                  <p className=''>Modern International College, Knowledge Park 3, GB Nagar, Greater Noida, UP – 201310</p>
                </div>
                <div className="col-md-6">
                  <h5 className='text-start'>Delhi Office</h5>
                  <p className=''>Alroz Aviation Institute, B 113, 1st Floor, Lajpat Nagar, Part 1, New Delhi 110024</p>
                </div>
                <div className="col-md-6">
                  <h5 className='text-start'>E-mail</h5>
                  <p>alrozaviationinstitute@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <h5 className='text-start'>Phone Number</h5>
                  <p>011-69296505<br />+919582309117</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-12">
          <hr className="mt-md-45 mt-sm-30 mt-xs-30 mt-60" />
        </div>
      </div>

      <section className=''>
        <div className="container">
          <div className="row pt-2">
            <div className="col-md-5 bg-body roundeds">
              <div className="query">
                <h4
                  className="
            query__title
            text-center text-md-start text-capitalize
            mt-0
          "
                >
                  <span style={{ color: "#1C335D" }}>Send Your </span>Messages
                </h4>
                <form action="#" className="row g-4">
                  <div className="col-12">
                    <input
                      type="yourname"
                      className="
                form-control
                form-control-custom
                form-control-custom--outline
                form-control-custom--outline-dark
              "
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-12">
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
                  <div className="col-12">
                    <div className="custom--nice-select">
                      <select>
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
                          Airline, Travel, Tourism & Hospitality Management Course</option>
                        <option value={10}>
                          Shipping, Logistics & Supply Chain Management Course</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      cols={30}
                      rows={4}
                      className="
                form-control
                form-control-custom--outline form-control-custom--dark
              "
                      placeholder="Writing Something"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                  <div class="d-grid d-md-flex justify-content-md-start">
                    <a href="/contact">
                      <button className="btn btn-info me-md-4" type="button">Send Message</button>
                    </a>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid pb-5">
          <div className="row pb-5">
            <div className="col-12 pb-5">
              <div className="gmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56059.73123913364!2d77.20181901133685!3d28.577773226282776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAlroz%20Aviation%20Institute%2C%20B%20113%2C%201st%20Floor%2C%20Lajpat%20Nagar%2C%20Part%201%2C%20New%20Delhi%20110024!5e0!3m2!1sen!2sus!4v1704702743112!5m2!1sen!2sus"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Contact