import React, { useEffect, useState } from 'react'
import './AirHostessCourse.css'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const AirHostessCourse = () => {
  const [counters, setCounters] = useState({
    totalPlacement: 0,
    totalHiring: 0,
    totalHighest: 0,
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
        totalPlacement: updateCounter(prevCounters.totalPlacement, 400),
        totalHiring: updateCounter(prevCounters.totalHiring, 20),
        totalHighest: updateCounter(prevCounters.totalHighest, 2.7),
      }));
    };

    const interval = setInterval(animateCounters, 70);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    
      <section>
        <Navbar />
        <div className="container-fluid bg--dark mb-5 py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="breadims">
                <img src="\assets\img\facility-img.png" width="10%" alt="" />
              </div>
            </div>
            <div className="topdf">
              <div className="row">
                <div className="col-md-4 order-1 py-5">
                  <div className="backi">
                    <a href="/" className="text-decoration-none text-light">Back to Course Page</a>
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <div className="pldis">
                    <h5 className="text-light">Cabin Crew Course</h5>
                    <h2 className='text-light'>
                      <span style={{ color: "#fd9a01" }}>Air Hostess</span>
                      Course
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pattern'>
  <div className="background-image">
    <img src="\assets\img\why.png" alt="" />
  </div>
  <div className="container py-5">
    <div className="row">
      <div className="col-md-12">
        <div className="details">
          <div className="row">
            <div className="col-md-4">
              <div className="card pb-4 bg--light-1 card1" style={{ width: "22rem" }}>
                <div className="card-body">
                  <span className='icon'>
                    <FlightTakeoffRoundedIcon />
                  </span>
                  <h5 className="card-title" style={{ lineHeight: 1 }} >Duration</h5>
                  <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>8 Month</span></h4>
                  <small>Study 5 days/week for 2 hours/day</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card pb-4 bg--light-1 card1" style={{ width: "22rem" }}>
                <div className="card-body">
                  <span className='icon'>
                    <FlightTakeoffRoundedIcon />
                  </span>
                  <h5 className="card-title" style={{ lineHeight: 1 }} >Education Required</h5>
                  <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>12th</span></h4>
                  <small>Study 5 days/week for 2 hours/day</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card pb-4 bg--light-1 card1" style={{ width: "22rem" }}>
                <div className="card-body">
                  <span className='icon'>
                    <FlightTakeoffRoundedIcon />
                  </span>
                  <h5 className="card-title" style={{ lineHeight: 1 }} >Course Type</h5>
                  <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>Certification</span></h4>
                  <small>Study 5 days/week for 2 hours/day</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className='pattern'>
        <div className="background-image" style={{ opacity: "0.2" }}>
          <img src="\assets\img\aro.png" className='img-fluid' alt="" />
        </div>
        <div className="container py-5 mt50">
          <div className="row">
            <div className="tab-content col-md-7">
              <div className="tab-pan active-show">
                <h4 className='text-start'><span style={{ color: "#fd9a01" }}>About</span>Air Hostess Training</h4>
                <hr className='bg--dark' />
                <p className='text-dark lh-lg fs-6'>Air Hostess Training at Alroz Aviation Institute is a comprehensive program meticulously designed to groom individuals for a rewarding and dynamic career in the aviation industry. Rooted in a commitment to excellence, our training goes beyond the surface, delving into the nuances of customer service, safety protocols, and in-flight management. This program serves as a gateway for aspiring professionals to enter the world of aviation as confident, poised, and skilled air hostesses.</p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 flip-card
            " tabIndex="0">
              <div className="flip-card-inner">
              <div className="flip-card-front">
              <div className="p-4">
                <h4 className='text-start'> <span style={{ color: "#1C335D" }}>Quick Apply</span>Form</h4>
                <div className="col-md-12">
                  <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
                    <div className="form-group">
                      <input className="form-control form-control-custom" id="name" type="text" name="Name" placeholder='Your Name'
                      />
                    </div>

                    <br />
                    <div className="form-group">
                      <input className="form-control
                    form-control-custom" id="email" type="email" name="Email" placeholder='Your e-mail' />
                    </div><br />
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          cols={30}
                          rows={3}
                          id="message"
                          name="Message"
                          placeholder='Message'
                          defaultValue={""}
                        /> <br />
                      </div>
                    </div>
                    <input className="btn btn-dark" data-bs-toggle="tooltip" type="submit" defaultValue="Submit" />
                  </form>
                </div>
              </div>
              </div>
              <div className="flip-card-back">
              <div className="p-4">
                <h4 className='text-start'> <span style={{ color: "#1C335D" }}>Quick Apply</span>Form</h4>
                <div className="col-md-12">
                  <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
                    <div className="form-group">
                      <input className="form-control form-control-custom" id="name" type="text" name="Name" placeholder='Your Name'
                      />
                    </div>

                    <br />
                    <div className="form-group">
                      <input className="form-control
                    form-control-custom" id="email" type="email" name="Email" placeholder='Your e-mail' />
                    </div><br />
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          cols={30}
                          rows={3}
                          id="message"
                          name="Message"
                          placeholder='Message'
                          defaultValue={""}
                        /> <br />
                      </div>
                    </div>
                    <input className="btn btn-dark" data-bs-toggle="tooltip" type="submit" defaultValue="Submit" />
                  </form>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pattern'>
        <div className="background-image">
          {/* <img src="\assets\img\blog-.png" alt="dot-banner" /> */}
          <img src="/assets/img/service.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div class="fn-advantages-wrapper mb-3 mb-sm-5">
              <div class="fn-advantages__head my-2 my-sm-3">
                <h3 className='pt-3'> <span style={{ color: "#fd9a01" }}>Air Hostess</span> Training</h3>
              </div>
              <div class="fn-advantages__content pb-4">
                <div class="row pt-3">
                  <div class="col-md-3 py-5 my-3 bg--light-1 shadow-lg card2">
                    <h4
                      className="odometer--custom
              text-uppercase
              t-text
              text-center
            " style={{ lineHeight: 0 }}
                    >
                      <span className="odometer odometer--custom" id="totalStaff">
                        {counters.totalPlacement} <span style={{ color: "#1C335D" }}>+</span>
                      </span>
                    </h4>
                    <span style={{ color: "#1C335D" }} className='fw-bold'>Placements in 2019</span> </div>
                  <div className="col-md-1"></div>
                  <div class="col-md-3 py-5 my-3 bg--light-1 shadow-lg rounded card2">
                    <h4
                      className="odometer--custom
              text-uppercase
              t-text
              text-center
            " style={{ lineHeight: 0 }}
                    >
                      <span className="odometer odometer--custom" id="totalStaff">
                        {counters.totalHiring} <span style={{ color: "#1C335D" }}>+</span>
                      </span>
                    </h4>
                    <span style={{ color: "#1C335D" }} className='fw-bold'>Hiring partners onboard</span> </div>
                  <div className="col-md-1"></div>
                  <div class="col-md-3 py-5 my-3 shadow-lg bg--light-1 rounded card2">
                    <h4
                      className="odometer--custom
              text-uppercase
              t-text
              text-center
            " style={{ lineHeight: 0 }}
                    >
                      <span className="odometer odometer--custom" id="totalStaff">
                        {counters.totalHighest} <span style={{ color: "#1C335D" }}>+L</span>
                      </span>

                    </h4>
                    <span style={{ color: "#1C335D" }} className='fw-bold'>Highest monthly CTC offered </span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pattern pt-5'>
        <div className="background-image" style={{ opacity: "0.2" }}>
          <img src="\assets\img\Airhostesses Course.png" alt="" />
        </div>
        <div className="container py-5">
          <div className="row">
          <h4 className="text-start">Air Hostess Course at <span style={{ color: "#fd9a01" }}>Alroz Aviation</span> <span><img src="\assets\img\Shape 1.png" style={{ width: "5rem" }} alt="" /></span></h4>
            <div className="col-md-6">
              <img src="\assets\img\Airhostesses Course.png" style={{ width: '100%' }} alt="" />
              <div class="global-country text-center">
                {/* <div class="number mb-5 color-dark"><a href="#">
                    <span class="glyphicon glyphicon-play-circle"></span>
                  </a></div> */}
                <h5 className='title color-white font-la'>Admission Open for New Batch - Apply Now!</h5>
                <h6 className="title color-white font-la">Don't miss the chance to begin your journey toward a rewarding career as an air hostess. Our admissions are now open for the upcoming batch. Secure your spot today by contacting us at <a
                  dir="auto"
                  className="_11JPr selectable-text copyable-text"
                  style={{ cursor: "pointer" }}
                >
                  09582309117
                </a>.</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="list-home">
                  <div className="accordion vf-accordion" id="faqAccordion">
                    <div className="accordion-item vf-accordion__item">
                      <h2 className="accordion-header vf-accordion__header">
                        <button
                          className="accordion-button vf-accordion__btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                        >
                          Course Duration: 8 Months:
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Embark on an exciting career journey with Alroz Aviation's Air Hostess Course, designed to equip you with the skills and knowledge needed to excel in the aviation industry. Our comprehensive program spans 8 months, ensuring you receive thorough training to become a proficient air hostess.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item vf-accordion__item">
                      <h2 className="accordion-header vf-accordion__header">
                        <button
                          className="accordion-button vf-accordion__btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                        >
                          Education Required: Minimum 12th:
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            To enroll in our Air Hostess Course, you only need a minimum qualification of 12th grade. We welcome enthusiastic individuals who aspire to join the aviation sector and are committed to their career development.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item vf-accordion__item">
                      <h2 className="accordion-header vf-accordion__header">
                        <button
                          className="accordion-button vf-accordion__btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                        >
                          Course Approved by Ministry of Skill Development - Government of India:
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Rest assured that our course is officially recognized and approved by the Ministry of Skill Development, Government of India. This accreditation reflects the high standards of education and training we offer at Alroz Aviation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item vf-accordion__item">
                      <h2 className="accordion-header vf-accordion__header">
                        <button
                          className="accordion-button vf-accordion__btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                        >
                          100 Percent Placement Support:
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Upon successful completion of our course, we provide dedicated placement support to our graduates. We are committed to helping you kickstart your career by connecting you with opportunities in leading airlines.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item vf-accordion__item">
                      <h2 className="accordion-header vf-accordion__header">
                        <button
                          className="accordion-button vf-accordion__btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                        >
                          Practical Training Includes:
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <ul className='text-start'>
                            <li>Swimming</li>
                            <li>Training in Live Aircraft</li>
                            <li>Virtual Reality Simulation</li>
                            <li>Heliport or Airport Visits</li>
                            <li>Aircraft Familiarization</li>
                          </ul>
                          <p className='lh-lg fs-6'>
                            Our hands-on approach ensures you gain real-world experience and become well-prepared for the challenges of the aviation industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* <section className='py-5 pattern'>
        <div className="background-image">
          <img src="/assets/img/service.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div class="card text-left">
                <div className="card-body">
                  <h4 className="text-start">Why Choose Alroz Aviation Institute for Your Air Hostess Training? <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
                  <div class="fn-bullet-list__content">
                    <ul className='text-start'>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Experienced Faculty:</span>Our instructors bring a wealth of knowledge and real-world experience from the aviation industry, ensuring that you receive top-notch training.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Hands-on Training: </span>Benefit from practical, hands-on training in our state-of-the-art simulation labs, providing a realistic experience of in-flight scenarios.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Industry Connections: </span>Alroz Aviation Institute has strong ties with leading airlines, offering you valuable networking opportunities and increasing your chances of securing lucrative placements.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-4">
              <div className="card">
                <img src="\assets\img\team-1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section> */}


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

export default AirHostessCourse