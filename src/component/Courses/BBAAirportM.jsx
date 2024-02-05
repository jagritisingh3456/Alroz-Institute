import React, { useEffect, useState } from 'react'
import './AirHostessCourse.css'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const BBAAirportM = () => {
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
                    <h5 className="text-light">BBA Airport Management Course at Alroz Aviation</h5>
                    <h2 className='text-light'>
                      <span style={{ color: "#fd9a01" }}>
                      BBA Airport Management 
                      </span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>3 Years</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>12th</span>
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
                        <h5 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>Undergraduate</span>
                        </h5>
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
                <h4 className='text-start'> <span className='fs-1' style={{ color: "#fd9a01" }}>About: </span>BBA Airport Management </h4>
                <hr className='bg--dark' />
                <p className='text-dark lh-lg fs-6'>The Bachelor of Business Administration (BBA) in Airport Management program at Alroz Aviation Institute is a comprehensive and specialized course designed to groom future leaders in the dynamic field of aviation. This program goes beyond traditional business administration studies, focusing specifically on the intricacies of airport operations, management, and the broader aviation industry. Embark on a journey towards leadership in the aviation industry with the BBA in Airport Management at Alroz Aviation Institute. Join us, and let your career take off in an industry that demands skilled and visionary professionals to navigate the complexities of airport management.</p>
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
                <h3 className='pt-3' style={{ color: "#fd9a01" }}>BBA Airport Management</h3>
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
                        {counters.totalHighest} <span style={{ color: "#1C335D" }}>+ L</span>
                      </span>

                    </h4>
                    <span className='fw-bold' style={{ color: "#1C335D" }}>Highest monthly CTC offered </span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pattern pt-5'>
        <div className="background-image">
          <img src="\assets\img\BBA Airport Management.png" style={{opacity : 0.1}} alt="" />
        </div>
        <div className="container py-5">
          <div className="row">
          <h4 className="text-start"> <span className='fs-2' style={{ color: "#fd9a01" }}>BBA Airport Management Course at</span>Alroz Aviation<span><img src="\assets\img\Shape 1.png" style={{ width: "5rem" }} alt="" /></span></h4>
            <div className="col-md-6">
              <img src="\assets\img\BBA Airport Management.png" style={{ width: '100%' }} alt="" />
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
                          Course Duration: 3 Years:
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          Are you passionate about aviation and aspire to embark on a promising career in airport management? Look no further! Our BBA Airport Management course offers a comprehensive 3-year program designed to prepare you for a dynamic role in the aviation industry.
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
                          Education Required: Minimum 12th (Any Stream): 
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          Whether you're a science, commerce, or arts graduate, you can pursue your dreams in aviation with a minimum 12th-grade qualification. Our program is open to students from all streams.
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
                          100 Percent Placement Support After Successful Completion of Course:
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                          At Alroz Aviation, we are committed to your success. Upon completing the BBA Airport Management course, you can rest assured knowing that our dedicated placement support team will assist you in securing a rewarding career in the aviation sector.
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
                          Practical Training Includes:
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
                            Gain hands-on experience with real aircraft to understand airport operations better.</li>
                            <li><b>Swimming:</b>&nbsp;Enhance your emergency response skills with swimming training.
                            </li>
                            <li><b>Virtual Reality:</b>&nbsp;
                            Immerse yourself in virtual aviation scenarios for realistic learning.</li>
                            <li><b>Heliport or Airport Visit:</b>&nbsp;Explore operational airport facilities and heliports to apply your knowledge.</li>
                            <li><b>Aircraft Familiarization:</b>&nbsp;Get up close and personal with various aircraft models to deepen your understanding.</li>
                            <li><b>Education Excursions:</b>&nbsp;Expand your horizons through educational trips related to aviation.</li>
                            <li><b>Internship:</b>&nbsp;Gain valuable industry experience during your internship.</li>
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
                  <h4 className="text-start">Why Choose BBA in Airport Management  <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
                  <div class="fn-bullet-list__content">
                    <ul className='text-start'>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Industry-Aligned Curriculum: </span>
                      The curriculum is designed in collaboration with industry experts to ensure that students receive education that aligns with the current and future needs of the aviation sector.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Experienced Faculty:</span>Learn from a faculty comprising experienced professionals and educators with extensive backgrounds in aviation and airport management. This ensures that students benefit from practical insights and real-world knowledge.</li>
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

export default BBAAirportM