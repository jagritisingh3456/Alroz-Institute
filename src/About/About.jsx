import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const About = () => {
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

      <section className="py-4"style={{ backgroundColor: "#1C335D17" }}>
        <div className="container">
          <div
            className="
      row
      justify-content-center
      align-items-lg-center
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
                <div className="vf-custom-icon me-2 flex-shrink-0">
                  <img
                    src="assets/img/icon-plane.png"
                    alt="viserfly"
                    className="img-fluid"
                  />
                </div>
                <p className="mb-0 text-capitalize text--primary xxl-text">about</p>
              </div>
              <h2> <span style={{ color: "#1C335D" }}>We’re here to make your</span>dreams come true!</h2>
              <p className="t-short-para">
                Alroz Aviation Is Leading Aviation, Travel, Tourism, Hospitality, Shipping, Retail & Management Training Institute. Headquartered In Delhi (India). Register Under NSDC & Skill India & Approved By the Aerospace & Aviation Sector Skill Council, Ministry of Skill Development – Government of India, Which Provides a Higher Standard of Training. Training Will Be Given By Industry Experts & Government Certified Trainers.
              </p>
              <p className='t-short-para'>
                Alroz Aviation Has Successfully Trained Thousands of Students For Global Career In Aviation, Travel, Hospitality, Shipping, Retail & Customer Service Industries.
              </p>
              <a
                href="about.html"
                className="t-link btn btn-warning"
              >
                About Us
              </a>
            </div>
            <div className="col-lg-6 col-xl-6 d-lg-block">
              <img src="\assets\img\g15.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* <div className="container-fluid">
        <div className="row justify-content-center      align-items-lg-center">
          <div className="col-md-6">
            <h1 className='text-start text-dark'>Director's Speech</h1>
            <p className=''>We Are Happy To Note The Rapid Growth of Our Training Institute Which Enables Us To Provide Quality Education In Number of Areas.</p>
            <p>Throughout Our Education, We Lay A Heavy Emphasis On The Personal Grooming of Our Students To Strengthen Their Innate Talents.</p>
            <p>Our Practical Bias Helps Our Students In Applying Their Theoretical Knowledge In Solving Real-Life Problems.</p>
            <p>While We Endeavour To Harness Emerging Technologies To Improve Our Education System On A Continuous Basis, We Never Lose Sight of Our Value System. The Objective Is To Produce Positive Thinkers With Proactive And Humane Approach To All Problems.</p>
            <p>We Welcome Our Prospective Students And Congratulate Our Alumni For Their Outstanding Contribution To Their Organizations And For Bringing Laurels To Themselves And Their Families.</p>
            <strong>Jai Hind!!!</strong>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div> */}
      <section className=''>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="elementor-widget-container">
                <h4 className='text-start'> <span style={{ color: "#1C335D" }}>Awards</span> & <span style={{ color: "#1C335D" }}>Achievements</span> 
                </h4>
              </div>
              <div className="elementor-widget-container">
                <ul className='text-start'>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp; Awarded As Best Aviation Institute of North India In International Education Award(Year 2018)</li>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp; Awarded As Best Institute For Cabin Crew Training In North India,World Education Award 2019</li>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp; Awarded As Best Air Hostess Training Institute of North India In World Education Award(2019)</li>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp;
                    Awarded As Best Performing Aviation Institute In India In National Achievers Award(Year 2021)</li>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp;
                    Awarded As Best Air Hostess Institute In India In National Glory Award(Year 2021)</li>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp;
                    Awarded As Best Aviation Institute In India In National Glory Award(Year 2022)</li>
                  <li><i
                    className="fa-solid fa-plane-circle-check fs-4"
                    style={{ color: "#32BDFF" }}
                  />&nbsp;
                    Awarded As Best Institute For Air Hostess Training In India In National Achievers Award(2022)</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 fli">
              <img src="\assets\img\fli.png" className='img-fluid' style={{ filter: "drop-shadow(2px 4px 6px black)" }} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 pattern" >
        <div className="background-image" style={{ opacity: "0.2" }}>
          <img src="\assets\img\back1.png" className='img-fluid' alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div>
              <h2 className='text-start text-dark'>
                <span className='fs-5'>Reasons Why Most Brilliant Students</span> <br /><span style={{ color: "#1C335D" }}>Choose Alroz Aviation</span>
              </h2>
            </div>
            <div className="col-md-8">
              <p>
                Certification of Candidates By Aerospace & Aviation Sector Skill Council (Government of India Ministry of Skill Development & Entrepreneurship) <pre />
                Training Given By Government Certified Trainers & Industry Experts <pre></pre> 13+ Years of Presence <pre></pre>
                Winner of Three International & 4 National Level Education Awards <pre></pre>
                Practical Training Is The Specialty, Only Institute In India Which Provide Practical Training In Live Aircraft, Helicopter & Cabin Simulator <pre></pre>
                Marvelous Placement Record, More Than 70% of Students Got Placements Before Completion of Course. <pre></pre>
                Corporate Tie-ups With Major Aviation, Travel, Hospitality & Retail Companies </p>
            </div>
            <div className="col-md-4" style={{ filter: "drop-shadow(2px 4px 6px black)" }}>
              <img src="\assets\img\g2.jpg" className='img-fluid border' alt="" />
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

export default About