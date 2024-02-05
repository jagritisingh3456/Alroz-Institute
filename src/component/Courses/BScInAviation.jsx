import React, { useEffect, useState } from 'react'
import './AirHostessCourse.css'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const BScInAviation = () => {
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
                    <h5 className="text-light">
                      Alroz Aviation: Unlock Your Skyward Journey!</h5>
                    <h2 className='text-light'>
                    <span style={{ color: "#fd9a01" }}>
                    B.Sc In Aviation
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
                        <small>With Physics & Math</small>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>undergraduate</span>
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
                <h4 className='text-start'> <span style={{ color: "#fd9a01" }}>About:</span>B.Sc in Aviation Course</h4>
                <hr className='bg--dark' />
                <p className='text-dark lh-lg fs-6'>The B.Sc in Aviation program at Alroz Aviation Institute is a comprehensive and specialized course designed to prepare individuals for dynamic careers in the aviation industry. This program goes beyond conventional academic studies, providing students with a well-rounded education that encompasses aviation fundamentals, safety protocols, and the practical skills required for a successful career in aviation.</p>
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
                  <span style={{ color: "#fd9a01" }}>B.Sc in Aviation</span></h3>
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
        <div className="background-image">
          <img src="\assets\img\Untitled design (17).png" style={{ opacity: 0.2 }} alt="" />
        </div>
        <div className="container py-5">
          <div className="row">
          <h4 className="text-start"> <span style={{ color: "#fd9a01" }}>Why Choose B.Sc in Aviation at: </span> Alroz Aviation Institute: <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
            <div className="col-md-6">
              <img src="\assets\img\Untitled design (17).png" style={{ width: '100%' }} alt="" />
              <div class="global-country text-center">
                {/* <div class="number mb-5 color-dark"><a href="#">
                    <span class="glyphicon glyphicon-play-circle"></span>
                  </a></div> */}
                <h5 className='title color-white font-la'>Admission Open for New Batch - Apply Now!</h5>
                <h6 className="title color-white font-la">Don't miss the chance to join our B.Sc Aviation program. Your journey to a successful aviation career begins here. Apply now and take the first step towards your dreams! <br /> For inquiries and admissions, please contact us at <a
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
                          Course Duration - 3 Years:
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Embark on a thrilling journey in the world of aviation with our comprehensive B.Sc Aviation program. This three-year course is designed to equip you with the knowledge and skills needed to soar to new heights in the aviation industry.</p>
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
                          Education Required - Minimum 12th (Science with Physics and Math):
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            To enroll in our B.Sc Aviation course, you'll need a minimum qualification of 12th grade with a background in science, particularly physics and mathematics. We believe in laying a strong foundation for your aviation career.
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
                          100 Percent Placement Support After Successful Completion of Course*:
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Your success is our priority. We are committed to ensuring that you step into the aviation industry with confidence. That's why we offer 100 percent placement support upon successful completion of the course. Your dream job awaits you!
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
                              Get hands-on experience with real aircraft to enhance your practical knowledge.</li>
                            <li><b>Swimming:</b>&nbsp;Safety is paramount in aviation. Learn essential swimming skills to prepare for emergencies.
                            </li>
                            <li><b>Virtual Reality:</b>&nbsp;
                              Immerse yourself in virtual aviation environments to sharpen your skills.</li>
                            <li><b>Heliport or Airport Visit:</b>&nbsp;Explore real aviation facilities and gain insights into day-to-day operations.</li>
                            <li><b>Aircraft Familiarization:</b>&nbsp;Get up close and personal with various aircraft models.</li>
                            <li><b>Education Excursions:</b>&nbsp;Expand your horizons through educational trips and excursions.</li>
                            <li><b>Internship:</b>&nbsp;Apply your classroom learning in a real-world aviation setting during your internship.</li>
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
                  <h4 className="text-start">Why Choose B.Sc in Aviation at Alroz Aviation Institute: <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
                  <div class="fn-bullet-list__content">
                    <ul className='text-start'>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Industry-Relevant Curriculum: </span>
                        The curriculum is designed in collaboration with industry experts to ensure that students receive education aligned with the current and future needs of the aviation sector.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Experienced Faculty:</span>Learn from a faculty comprising experienced pilots, aviation professionals, and educators with extensive backgrounds in the aviation industry. The faculty is dedicated to nurturing talent and providing mentorship that goes beyond the classroom.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> State-of-the-Art Facilities: </span>Access advanced simulation labs, classrooms, and dedicated training spaces that replicate real-world aviation scenarios. The institute is committed to providing an immersive and realistic learning environment.</li>
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

export default BScInAviation