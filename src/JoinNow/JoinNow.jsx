import React from 'react'
// import './JoinNow.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const JoinNow = () => {
    return (
        <>
            <Navbar />

            <section className="section ct-section mb-5">
                <div className="container">
                    <div className="row g-4 justify-content-xxl-between align-items-center">
                        <div className="col-lg-5 col-xxl-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="query bor bg--light-1 shadow-lg">
                                        <h3
                                            className="
        query__title text-lg-center text-capitalize
        mt-0 text-dark
      "
                                        >
                                            join with us
                                        </h3>
                                        <form action="#" className="row g-4">
                                            <div className="col-md-6">
                                                <input
                                                    type="firstname"
                                                    className=" 
            text-light                                        
            form-control
            form-control-custom
            form-control-custom--outline
            form-control-custom--outline-dark
          "
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="lastname"
                                                    className=" 
            text-light                                        
            form-control
            form-control-custom
            form-control-custom--outline
            form-control-custom--outline-dark
          "
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                            <div className="col-md-6">
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
                                            <div className="col-md-6">
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
                                            
                                            <div className="col-12">
                                                <div class="d-grid d-md-flex justify-content-md-start">
                                                <input className="btn btn-dark" data-bs-toggle="tooltip" type="submit" defaultValue="Submit" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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

export default JoinNow