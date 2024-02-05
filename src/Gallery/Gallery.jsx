import React from 'react';
import './Gallery.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const Gallery = () => {
    return (
        <>
        <div className="banner">
        <Navbar />
        <div className="hero__content">
          <div className="container">
            <div className="row g-3 justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="hero__content-title text-capitalize t-text-white">
                  Gallery
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
                      href="trainer.html"
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
       

            {/* Gallery Section  */}
            <section className="py-5">
                <div className="section__head">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-xl-8">
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="vf-custom-icon me-2 flex-shrink-0">
                                            <img
                                                src="assets/img/icon-plane.png"
                                                alt="viserfly"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <p className="mb-0 text-capitalize text--primary xxl-text">
                                            gallery
                                        </p>
                                    </div>
                                    <h2 className="text-capitalize"> <span style={{ color: "#1C335D" }}>Our Photo</span>Gallery</h2>
                                    <p className="t-short-para mx-auto mb-0">
                                    Welcome to our captivating photo gallery, where each image tells a story of passion, dedication, and the pursuit of excellence at Alroz Aviation Institute. Take a visual journey through the lens of our institute's vibrant life and witness the essence of aviation education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row justify-content-center g-4">
                        <div className="col-12">
                            <ul className="list list--row justify-content-center">
                                <li className="list--row__item-sm">
                                    <button
                                        className="
btn btn--md btn--outline
active
text-capitalize
fw-md
t-text
"
                                        data-filter="all"
                                    >
                                        all
                                    </button>
                                </li>
                                <li className="list--row__item-sm">
                                    <button
                                        className="btn btn--md btn--outline text-capitalize fw-md t-text"
                                        data-filter="web"
                                    >
                                        Crew Training
                                    </button>
                                </li>
                                <li className="list--row__item-sm">
                                    <button
                                        className="btn btn--md btn--outline text-capitalize fw-md t-text"
                                        data-filter="branding"
                                    >
                                        Maintenace
                                    </button>
                                </li>
                                <li className="list--row__item-sm">
                                    <button
                                        className="btn btn--md btn--outline text-capitalize fw-md t-text"
                                        data-filter="seo"
                                    >
                                        Private pilot
                                    </button>
                                </li>
                            </ul>
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
                                                </li>z
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
                </div> */}
                 <div className="grid-container">
    <div>
      <img
        className="grid-item grid-item-1"
        src="\assets\img\g18.png"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-2"
        src="\assets\img\g17.png"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-3"
        src="\assets\img\g15.png"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-4"
        src="\assets\img\g14.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-5"
        src="\assets\img\g13.png"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-6"
        src="\assets\img\g12.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-7"
        src="\assets\img\g11.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-8"
        src="\assets\img\g10.png"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-9"
        src="\assets\img\g9.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-10"
        src="\assets\img\g8.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-4"
        src="\assets\img\g7.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-5"
        src="\assets\img\g6.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-6"
        src="\assets\img\g5.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-7"
        src="\assets\img\g4.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-8"
        src="\assets\img\g3.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-9"
        src="\assets\img\g2.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        className="grid-item grid-item-10"
        src="\assets\img\g1.png"
        alt=""
      />
    </div>
  </div>
            </section>
            {/* Gallery Section End */}

            {/* New Gallery Start */}


            {/* New Gallery End */}
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

export default Gallery