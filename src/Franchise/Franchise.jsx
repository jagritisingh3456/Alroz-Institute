import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Franchise = () => {
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
                  About
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

    <section className='py-4 pattern'>
        <div className="background-image">
          <img src="\assets\img\back.png" className='img-fluid' alt="" />
        </div>
        <img src="" alt="" />
        <div className="container">
          <div className="row">
          <h3 className='text-start' style={{ color: "#1C335D" }}>Courses We Offer</h3>
            <div className="col-md-6">
              <br />
              <h6>We Provide Different Diploma & Certification Courses Like –</h6>
              <ul className='text-start'>
                <ol>Air Hostess/ Cabin Crew</ol>
                <ol>Airport Ground Staff C</ol>
                <ol>Airline Ticketing Agent </ol>
                <ol>Airline Customer Service Agent</ol>
                <ol>Airport Baggage Handling Agent</ol>
                <ol>Airport Cargo Agent</ol>
                <ol>Airport & Airline Management Diploma</ol>
                <ol>Travel, Tourism & Hospitality Management Diploma</ol>
                <ol>International Airline & Travel Management Diploma etc…</ol>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="\assets\img\fran.png" className='img-fulid' width={"100%"} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row">
          <h3 className='text-start' style={{ color: "#1C335D" }}>Institute Requirement</h3>
            <div className="col-md-4">
              <img src="\assets\img\fran2.png" alt="" />
            </div>
            <div className="col-md-8">
              <h6 className='text-start'>We Provide Different Diploma & Certification Courses Like –</h6>
              <ul className='text-start'>
                <l1> <strong>Area Requirement –</strong>Around 1,500 Sq. Ft. Carpet Area </l1>
                <l1><strong>Classroom – </strong>2 Classroom With 25 To 30 Seating Capacity Each</l1>
                <l1><strong>Counseling Room –</strong> 2 Counselling Rooms</l1>
                <l1>Reception Area</l1>
                <l1>1 (Ladies & Gents) Washroom</l1>
                <l1>1 Manager Room</l1>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4 pattern'>
        <div className="background-image">
          <img src="\assets\img\back.png" className='img-fluid' alt="" />
        </div>
        <div className="container">
          <div className="row">
          <h3 className='text-start'><span style={{ color: "#1C335D" }} className='fs-5'>Why Business With Alroz Aviation</span> <br /> <span style={{ color: "#1C335D" }}>Makes Good Business Sense</span></h3>
            <div className="col-md-6">
              <h6 className='text-start'>We Provide Different Diploma & Certification Courses Like –</h6>
              <ul className='text-start'>
                <>Low Investment With High ROI (Return On Investment)</>
                <>Quick Break – Even Point Around 6 to 8 Months</>
                <>Highest Profit Margin With Consistent Growth</>
                <>12 + Years Of Presence</>
                <>Can Start A Business With One Step Ahead of Others</>
                <>Dedicate Team To Research</>
                <>Practical Training Is The Specialty</>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="\assets\img\fran3.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <img src="\assets\img\fran4.png" className='img-fluid' alt="" />
            </div>
            <div className="col-md-6">
              <h3 className='text-center' style={{ color: "#1C335D" }}>Support Provide By Us</h3>
              {/* <h6>We Provide Different Diploma & Certification Courses Like –</h6> */}
              <ul className='text-start'>
                <ol>End To End Support In Start-Up, Set-Up, Architectural & Operations</ol>
                <ol>Support In Staff Recruitment & Training</ol>
                <ol>Business Development & Marketing Support</ol>
                <ol>Lead Management & Admission Support</ol>
                <ol>Full Academic Support With Regular Workshops</ol>
                <ol>Regular Monitoring Of Different Branches</ol>
                <ol>Dedicated Team To Solve Your Queries</ol>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4 pattern'>
        <div className="background-image">
          <img src="\assets\img\back.png" className='img-fluid' alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <h5 className='text-danger'>Courses We Offer</h5> */}
              <h3 className='text-start' style={{ color: "#1C335D" }}>Total Investment</h3>
              <p><strong>Investment Around –</strong>20 to 25 Lacs Including Institute Set-Up Fee, Franchise Fee & Advertisement</p>
              <p>When You Join The Alroz Aviation Franchisee You Become A Part of Our Franchisee Success Program That Gives You Best Profit On Investment And Puts Your Business On The Track To Growth. All You Need To Add Is Your Hard Work And Local Expertise.</p>
            </div>
            <div className="col-md-6">
              <img src="\assets\img\fran5.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="\assets\img\fran6.png" className='img-fluid' alt="" />
            </div>
            <div className="col-md-6">
              {/* <h5 className='text-danger'>Courses We Offer</h5> */}
              <h3 className='text-start' style={{ color: "#1C335D" }}>Return On Investment</h3>
              <p><strong>Profit Around –</strong>Start Earning Up To 7 Lacs Per Month As Profit</p>
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
                        className="t-link btn btn--light btn-warning btn--lg text-capitalize"
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

export default Franchise