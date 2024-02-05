import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row g-0 align-items-center align-items-lg-start">
            <div className="col-6 col-lg-2">
              <a href="/">
                <img
                  src="assets/img/logon.png"
                  className="img-fluid logo__is"
                />
              </a>
            </div>
            <div className="col-6 col-lg-10">
              <div className="nav-container bg-transparent">
                {/* Navigation Toggler  */}
                <div
                  className="
              d-flex
              justify-content-end
              align-items-center
              d-lg-none
            "
                >
                  <a
                    href="#"
                    className="
                primary-menu__link
                t-link
                search--toggler
                text-center
                t-text-white
              "
                  >
                    <i className="bx bx-search" />
                  </a>
                  <button
                    type="button"
                    className="btn btn--sqr btn--primary nav--toggle t-text-white"
                  >
                    <i className="bx bx-menu" />
                  </button>
                </div>
                {/* Navigation Toggler End */}
                {/* Navigation  */}
                <nav className="navs">
                  {/* Primary Menu  */}
                  <ul className="list primary-menu">
                    <li className="primary-menu__list">
                      <Link to="/" className="primary-menu__link text-capitalize fs-5">
                        home
                      </Link>
                    </li>

                    <li className="primary-menu__list">
                      <Link to="/about" className="primary-menu__link text-capitalize fs-5">
                        About
                      </Link>
                    </li>

                    <li className="primary-menu__list">
                      <Link to="/gallery" className="primary-menu__link text-capitalize fs-5">
                        Gallery
                      </Link>
                    </li>

                    <li className="primary-menu__list has-sub">
                      <Link to="#" className="primary-menu__link text-capitalize fs-5">
                        courses
                      </Link>

                      <ul className="primary-menu__sub" style={{ width: '310px' }}>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/AirHostessCourse"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            Air Hostess Course
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/AeronauticalE"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            Aeronautical Engineering 
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/airline-travel-tourism"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            Airline Travel Tourism
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/bba-airport-management"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            BBA Airport Management
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/shipping-logistics"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            Shipping, Logistics
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/bba-mba-integrated-course"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            BBA + MBA Integrated Course
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/aachelor-in-aerospace-engineering"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            Bachelor's In Aerospace
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/b.Sc-in-aviation"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            B.Sc In Aviation
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/international-air-hostess-course"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            International Air Hostess Course
                          </Link>
                        </li>
                        <li className="primary-menu__sub-list">
                          <Link
                           to="/mba-aviation-management"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            MBA Aviation Management
                          </Link>
                        </li>
                      </ul>

                    </li>
                    <li className="primary-menu__list">
                      <Link to="/training" className="primary-menu__link text-capitalize fs-5">
                        trainer
                      </Link>
                    </li>

                    <li className="primary-menu__list">
                      <Link to="/contact" className="primary-menu__link text-capitalize fs-5">
                        Contact
                      </Link>
                    </li>

                    <li className="primary-menu__list">
                      <Link to="/franchise" className="primary-menu__link text-capitalize fs-5">
                        Franchise
                      </Link>
                    </li>

                    {/* <li className="primary-menu__list has-sub">
                      <a href="index.html" className="primary-menu__link text-capitalize fs-5">
                        Page
                      </a>
                      <ul className="primary-menu__sub">
                        <li className="primary-menu__sub-list">
                          <a
                            href="/about"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            about
                          </a>
                        </li>
                        <li className="primary-menu__sub-list">
                          <a
                            href="/gallery"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            gallery
                          </a>
                        </li>
                        <li className="primary-menu__sub-list">
                          <a
                            href="/contact"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            contact
                          </a>
                        </li>
                      </ul>
                    </li> */}

                    {/* <li className="primary-menu__list has-sub">
                      <a
                        href="blog.html"
                        className="primary-menu__link text-capitalize"
                      >
                        blog
                      </a>
                      <ul className="primary-menu__sub">
                        <li className="primary-menu__sub-list">
                          <a
                            href="blog-post.html"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            blog post
                          </a>
                        </li>
                        <li className="primary-menu__sub-list">
                          <a
                            href="classic-blog.html"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            classic blog
                          </a>
                        </li>
                        <li className="primary-menu__sub-list">
                          <a
                            href="blog-details.html"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            blog details
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="primary-menu__list has-sub">
                      <a href="#" className="primary-menu__link text-capitalize fs-5">
                        event
                      </a>
                      <ul className="primary-menu__sub">
                        <li className="primary-menu__sub-list">
                          <a
                            href="event.html"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            event
                          </a>
                        </li>
                        <li className="primary-menu__sub-list">
                          <a
                            href="event-details.html"
                            className="
                        t-link
                        primary-menu__sub-link
                        text-capitalize
                      "
                          >
                            event details
                          </a>
                        </li>
                      </ul>
                    </li> */}

                    {/* <li className="primary-menu__list d-none d-lg-block">
                      <a
                        href="#"
                        className="
                    primary-menu__link
                    t-link
                    search--toggler
                    text-center
                  "
                      >
                        <i className="bx bx-search fs-4" />
                      </a>
                    </li> */}

                  </ul>
                  {/* Primary Menu End */}
                  {/* User Login  */}
                  <div className="mx-3 ms-lg-auto me-lg-0">
                    <ul className="list primary-menu primary-menu--alt">
                      <li className="primary-menu__list text-center">
                        <Link
                          to="/joinnow"
                          className="btn btn--md btn--secondary text-dark fw-bold w-100">
                          Join Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* User Login End */}
                </nav>
                {/* Navigation End */}
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar;
