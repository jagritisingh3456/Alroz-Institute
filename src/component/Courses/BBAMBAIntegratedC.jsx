import React, { useEffect, useState } from 'react'
import './AirHostessCourse.css'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const BBAMBAIntegratedC = () => {
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
                      <span style={{ color: "#fd9a01" }}>BBA + MBA Integrated Course</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>4 Years</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>Minimum 12th</span>
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
                        <h4 className="card-text" style={{ lineHeight: 0 }}> <span style={{ color: "#1C335D" }}>Degree</span>
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
                <h4 className='text-start'> <span style={{ color: "#fd9a01" }}>About:</span>BBA + MBA Integrated Course
                </h4>
                <hr className='bg--dark' />
                <p className='text-dark lh-lg fs-6'>The BBA + MBA Integrated Course at Alroz Aviation Institute is a comprehensive and accelerated program designed for ambitious individuals seeking a seamless and efficient journey toward leadership roles in business management. This integrated course merges undergraduate and postgraduate studies, providing students with a holistic education that combines foundational business principles with advanced managerial skills.</p>
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
                <h3 className='pt-3'> <span style={{ color: "#fd9a01" }}>BBA + MBA Integrated Course</span></h3>
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
                        {counters.totalHighest} <span style={{ color: "#1C335D" }}> +L</span>
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
          <img src="\assets\img\Untitled design (20).png" style={{opacity: 0.2}} alt="" />
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="\assets\img\Untitled design (20).png" style={{ width: '100%' }} alt="" />
              <div class="global-country text-center">
                {/* <div class="number mb-5 color-dark"><a href="#">
                    <span class="glyphicon glyphicon-play-circle"></span>
                  </a></div> */}
                <h6 class="title color-white font-la">Strategic Management <br />Decision-Making</h6>
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
                          Foundational Business Knowledge (BBA Phase):
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            The program initiates with a focus on building a strong foundation in business administration. Students delve into core business disciplines, including marketing, finance, human resources, and strategic management. The BBA phase ensures that students acquire a comprehensive understanding of fundamental business concepts.
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
                          Specialized Business Electives (BBA Phase):
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            To cater to individual interests and career aspirations, students have the opportunity to choose specialized electives during the BBA phase. These electives enable students to explore specific areas of business, such as entrepreneurship, international business, or supply chain management, aligning their studies with their professional goals.
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
                          Real-World Exposure (BBA Phase):
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            The integrated course places a strong emphasis on practical learning. Internship opportunities, industry visits, and case studies provide students with real-world exposure, allowing them to apply theoretical knowledge to practical business scenarios. This experiential learning approach prepares students for the challenges of the dynamic business environment.
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
                          Seamless Transition to MBA (MBA Phase):
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body vf-accordion__body">
                          <p className='lh-lg fs-6'>
                            Following the BBA phase, students seamlessly transition to the MBA phase of the integrated course. This advanced phase focuses on developing high-level managerial skills, strategic thinking, and leadership capabilities. It builds upon the foundational knowledge gained during the BBA phase, providing a natural progression to more complex and advanced business concepts.
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

      <section className='py-5 pattern'>
        <div className="background-image">
          <img src="/assets/img/service.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div class="card text-left">
                <div className="card-body">
                  <h4 className="text-start"> <span style={{ color: "#fd9a01" }}>Why Choose</span>BBA + MBA Integrated Course <span><img src="\assets\img\Shape 1.png" style={{ width: "rem" }} alt="" /></span></h4>
                  <div class="fn-bullet-list__content">
                    <ul className='text-start'>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Time and Cost Efficiency: </span>The integrated course offers a time-efficient and cost-effective pathway to earning both a BBA and MBA. It eliminates the need for separate admissions processes and allows students to seamlessly progress from undergraduate to postgraduate studies.</li>
                      <li><span className='icon'><FlightTakeoffRoundedIcon /> Holistic Development: </span>Beyond academic excellence, the course places a strong emphasis on holistic development. Students participate in personality development programs, leadership workshops, and industry interactions to enhance their overall professional and personal skills.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-4">
              <div className="card">
                <img src="\assets\img\team-1.jpg" />
                {/* <video width="100%" height="100%" autoPlay loop muted>
                  <source src="\assets\img\flight.mp4" type="video/mp4" />
                </video> */}
              </div>
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

export default BBAMBAIntegratedC