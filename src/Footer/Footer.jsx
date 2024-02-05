import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer  */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <h4 className="mt-0 t-text-white text-capitalize">about me</h4>
                <p className="t-text-white t-short-para">
                  Alroz Aviation Institute, India’s Premier Institute In Aviation, Travel, Tourism, And Hospitality, Is Approved By The Ministry Of Skill Development, Government Of India.
                </p>
                <ul className="list list--row">
                  <li className="list--row__item">
                    <a href="#" className="t-link social-icon--alt">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li className="list--row__item">
                    <a href="#" className="t-link social-icon--alt">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li className="list--row__item">
                    <a href="#" className="t-link social-icon--alt">
                      <i className="bx bxl-vimeo" />
                    </a>
                  </li>
                  <li className="list--row__item">
                    <a href="#" className="t-link social-icon--alt">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="mt-0 t-text-white text-capitalize">courses</h4>
                <ul className="list list--column">
                  <li className="list--column__item">
                    <a
                      href="/AirHostessCourse"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Air Hostess Course
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/shipping-logistics"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Shipping, Logistics
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/airline-travel-tourism"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Airline Travel Tourism
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/AeronauticalE"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Aeronautical Engineering
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/bba-airport-management"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      BBA Airport Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="mt-0 t-text-white text-capitalize">quick link</h4>
                <ul className="list list--column">
                  <li className="list--column__item">
                    <a
                      href="/"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Home
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/about"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      About
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/gallery"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Gallery
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/training"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Trainer
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a
                      href="/contact"
                      className="t-link t-link--primary t-text-white text-capitalize"
                    >
                      Contact-Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 text-start">
                <h4 className="mt-0 t-text-white text-capitalize">Contact Us</h4>
                 <i class="fa-solid fa-location-dot fa-bounce" style={{filter: "invert(1)"}}></i>
                 <span className='text-light'>&nbsp;
                 Modern International College, Knowledge Park 3, GB Nagar, Greater Noida, UP – 201310</span> <br /><br />

                 <i class="fa-solid fa-location-dot fa-bounce" style={{filter: "invert(1)"}}></i>
                 <span className='text-light'>&nbsp; 
                 Alroz Aviation Institute, B 113, 1st Floor, Lajpat Nagar, Part 1, New Delhi 110024
                 </span> <br /><br />

                 <i class="fa-solid fa-phone fa-shake" style={{filter: "invert(1)"}}></i> <span className='text-light text-start'>+919582309117</span> <br />

                 <i class="fa-solid fa-phone fa-shake" style={{filter: "invert(1)"}}></i> <span className='text-light test-start'>011-69296505
</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="mb-0 t-text-white text-center text-capitalize">
            Copyright © 2022. All Rights Reserved By Viserfly
          </p>
        </div>
      </footer>
      {/* Footer End */}
    </>
  )
}

export default Footer