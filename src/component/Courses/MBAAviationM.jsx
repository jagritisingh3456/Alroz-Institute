import React, { useEffect, useState } from 'react'
import './AirHostessCourse.css'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const MBAAviationM = () => {
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
        totalHiring: updateCounter(prevCounters.totalHiring, 250),
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
                    <h5 className="text-light">MBA Aviation Management at Alroz Aviation</h5>
                    <h2 className='text-light'>
                      <span style={{ color: "#fd9a01" }}>MBA Aviation Management</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>2 Year</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>Graduation</span>
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
                        <h5 className="card-title" style={{ lineHeight: 1 }} >Course Type</h5>
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}> Post Graduate</span>
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
                <h4 className='text-start'> <span style={{ color: "#fd9a01" }}> About MBA In:</span> Aviation Management</h4>
                <hr className='bg--dark' />
                <p className='text-dark lh-lg fs-6'>The MBA in Aviation Management program at Alroz Aviation Institute is a strategic and comprehensive course designed to equip individuals with the skills and knowledge necessary to thrive in leadership roles within the dynamic and complex field of aviation. This program is tailored to meet the evolving needs of the aviation industry, providing a blend of business acumen, aviation-specific expertise, and strategic management capabilities.</p>
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
                <h3 className='pt-3'>
                  <span style={{ color: "#1C335D" }}>MBA in Aviation Management</span></h3>
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
          <img src="\assets\img\Aviation Management MBA.png" alt="" />
        </div>
        <div className="container py-5">
          <div className="row">
          <h4 className="text-start"> <span style={{ color: "#fd9a01" }}>MBA Aviation Management at</span>Alroz Aviation <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
            <div className="col-md-6">
              <img src="\assets\img\Aviation Management MBA.png" style={{ width: '100%' }} alt="" />
              <div class="global-country text-center">
                {/* <div class="number mb-5 color-dark"><a href="#">
                    <span class="glyphicon glyphicon-play-circle"></span>
                  </a></div> */}
                <h6 className="title color-white font-la">Don't miss this opportunity to join the ranks of successful aviation professionals. Admission for the new batch is now open. Apply today to secure your future in aviation management. For inquiries,Elevate your career with an MBA in Aviation Management at Alroz Aviation.contact us: <a
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
                          Course Duration: 2 Years | Education Required:
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>Minimum Graduation (Any Stream):
                            Unlock your career potential in the aviation industry with Alroz Aviation's prestigious MBA Aviation Management program. This comprehensive 2-year course is designed to equip you with the knowledge and skills needed to excel in the dynamic world of aviation and airport management.
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
                          100 Percent Placement Support:
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Our commitment to your success extends beyond the classroom. Upon successful completion of the course, you can count on our strong industry connections to secure your dream job in the aviation sector.
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
                          Airline and Airport Management:
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            The course provides a comprehensive understanding of airline and airport management. Students explore topics such as revenue management, customer service strategies, and airport infrastructure development, preparing them for leadership roles in both airlines and airports.
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
                          Aviation Safety and Security:
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <ul className='text-start'>
                            <li><b>Training in Live Aircraft:</b>&nbsp;
                              Get up close and personal with actual aircraft to understand their operations and maintenance.</li>
                            <li><b>Virtual Reality:</b>&nbsp;Experience cutting-edge technology and simulations to enhance your aviation knowledge.
                            </li>
                            <li><b>Heliport or Airport Visit:</b>&nbsp;
                              Explore real-world aviation environments, gaining insights into airport operations.
                            </li>
                            <li><b>Aircraft Familiarization:</b>&nbsp;Learn the intricacies of different aircraft models, a crucial skill in aviation management.</li>
                            <li><b>Education Excursions:</b>&nbsp;Get up close and personal with various aircraft models.</li>
                            <li><b>Education Excursions:</b>&nbsp;Engage in educational trips to aviation-related facilities for a deeper understanding of the industry.</li>
                            <li><b>Internship:</b>&nbsp;Apply your knowledge in a real-world setting through an internship opportunity.</li>
                          </ul>
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
                  <h4 className="text-start">Why Choose MBA in Aviation Management <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
                  <div class="fn-bullet-list__content">
                    <ul className='text-start'>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Industry-Relevant Curriculum:</span>
                        The curriculum is designed in collaboration with industry experts, ensuring that students receive education aligned with the current and future needs of the aviation sector.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Experienced Faculty:</span>Learn from a faculty comprising experienced aviation professionals, industry leaders, and educators with extensive backgrounds in aviation management. The faculty is dedicated to nurturing talent and providing mentorship that goes beyond the classroom.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> State-of-the-Art Facilities:</span>Access advanced simulation labs, classrooms, and dedicated training spaces that replicate real-world aviation management scenarios. The institute is committed to providing an immersive and realistic learning environment.</li>
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

export default MBAAviationM