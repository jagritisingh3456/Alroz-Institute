import React, { useEffect, useState } from 'react'
import './AirHostessCourse.css'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const AirlineTravelTourism = () => {
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
                    <h5 className="text-light">Airline, Travel, Tourism, and Hospitality Management</h5>
                    <h2 className='text-light'>
                      <span style={{ color: "#fd9a01" }}>Airline, Travel, Tourism</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }} > <span style={{ color: "#1C335D" }}> 1 Years</span>
                        </h4>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}><span style={{ color: "#1C335D" }}>12th</span>
                        </h4>
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
                        <h5 className="card-title" style={{ lineHeight: 1 }} >Duration</h5>
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>8 Months</span>
                        </h4>
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
        <div className="background-image" style={{ opacity: "0.5" }}>
          <img src="\assets\img\aro.png" className='img-fluid' alt="" />
        </div>
        <div className="container py-5 mt50">
          <div className="row">
            <div className="tab-content col-md-7">
              <div className="tab-pan active-show">
                <h4 className='text-start'><span style={{ color: "#fd9a01" }}>About: </span>Airline, Travel, Tourism</h4>
                <hr className='bg--dark' />
                <p className='text-dark lh-lg fs-6'>The amalgamation of the Airline, Travel, and Tourism sectors forms a complex and interconnected web that shapes the modern global travel experience. At the forefront, the Airline industry stands as a beacon of connectivity, propelling passengers and cargo across continents with efficiency and safety as paramount priorities. Operating a diverse fleet of aircraft, airlines not only bridge geographical gaps but also elevate the entire travel ecosystem. Complementing this, the Travel sector, represented by travel agencies, acts as a crucial intermediary, facilitating seamless journeys for individuals and businesses alike. </p>
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
                <h3 className='pt-3' style={{ color: "#fd9a01" }}>Airline, Travel, Tourism</h3>
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
                    <span className='fw-bold' style={{ color: "#1C335D" }}>Placements in 2019</span> </div>
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
                    <span className='fw-bold' style={{ color: "#1C335D" }}>Hiring partners onboard</span> </div>
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
          <img src="\assets\img\Airline, Travel, Tourism.png" alt="" />
        </div>
        <div className="container py-5">
          <div className="row">
          <h4 className="text-start"><span className='fs-2' style={{ color: "#fd9a01" }}>Course Title:</span> Airline, Travel, Tourism, and Hospitality Management<span><img src="\assets\img\Shape 1.png" style={{ width: "5rem" }} alt="" /></span></h4>
            <div className="col-md-6">
              <img src="\assets\img\Airline, Travel, Tourism.png" style={{ width: '100%' }} alt="" />
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
                          Course Duration: 10 month
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          - Our intensive 10-month program is designed to equip you with the knowledge and skills needed for a successful career in the travel and aviation industry.
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
                          Education Requirements:
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          All you need is a minimum 12th-grade education to enroll in this course and start your journey towards a rewarding career.
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
                          100 Percent Placement Support:
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          At Alroz Aviation, we're committed to your success. Upon successful completion of the course, we provide 100 percent placement support to help you kickstart your career in this dynamic field.
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
                          Practical Training:
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          Our curriculum includes hands-on practical training that sets us apart. You'll have the opportunity to experience real-world scenarios, including training in live aircraft, swimming, virtual reality simulations, and exciting visits to heliports or airports.
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
                  <h4 className="text-start">Why Choose Airline, Travel, and Tourism at Alroz Aviation Institute <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
                  <div class="fn-bullet-list__content">
                    <ul className='text-start'>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Industry-Relevant Curriculum: </span>
                        Alroz Aviation Institute offers a curriculum that is meticulously designed in collaboration with industry experts. The programs are tailored to meet the evolving needs of the Airline, Travel, and Tourism sectors, ensuring that students receive education aligned with current industry trends and demands.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Experienced Faculty:</span>
                        Learn from a team of seasoned professionals and educators who bring a wealth of knowledge and practical insights from their extensive experiences in the aviation and travel industries. The faculty at Alroz Aviation Institute is dedicated to nurturing talent and providing mentorship that goes beyond the classroom.</li>
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

export default AirlineTravelTourism