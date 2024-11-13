import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../../Component/Faq/Faq";
import Services from "../../Component/Services/Services";
import image1 from "../../assets/img/gallery/1.jpg";
import image2 from "../../assets/img/gallery/2.jpg";
import image3 from "../../assets/img/gallery/3.jpg";
import image4 from "../../assets/img/gallery/4.jpg";
import image5 from "../../assets/img/gallery/5.jpg";
import image6 from "../../assets/img/gallery/6.jpg";
import image7 from "../../assets/img/gallery/7.jpg";
import image8 from "../../assets/img/gallery/8.jpg";
import image9 from "../../assets/img/gallery/9.jpg";
import { Helmet } from "react-helmet";
     
const Conferences = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
  const images = [
    {
      original: image1,
      thumbnail: image1,
      alt: "Image 1",
    },
    {
      original: image2,
      thumbnail: image2,
      alt: "Image 2",
    },
    {
      original: image3,
      thumbnail: image3,
      alt: "Image 2",
    },
    {
      original: image4,
      thumbnail: image4,
      alt: "Image 2",
    },
    {
      original: image5,
      thumbnail: image5,
      alt: "Image 2",
    },
    {
      original: image6,
      thumbnail: image6,
      alt: "Image 2",
    },
    {
      original: image7,
      thumbnail: image7,
      alt: "Image 2",
    },
    {
      original: image8,
      thumbnail: image8,
      alt: "Image 2",
    },
    {
      original: image9,
      thumbnail: image9,
      alt: "Image 2",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    
  return (
    <>
    <Helmet>
        <title>Conferences | Your Website</title>
        <meta name="description" content="Explore our conference event management services, offering premium planning and organization for conferences, seminars, and meetings." />
        <meta name="keywords" content="conferences, event management, corporate events, Delhi, Gurgaon, Noida, Faridabad" />
        <meta property="og:title" content="Conferences | Your Website" />
        <meta property="og:description" content="Explore our conference event management services, offering premium planning and organization for conferences, seminars, and meetings." />
      </Helmet>
      <div className="bread bg-image"      >
        <div class="overlay">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h3 className="about-heading">Conferences</h3>
              <div className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /<Link to="/">Conferences</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Conferences</h2>
          <p>CONFERENCE EVENT ORGANISERS COMPANIES IN DELHI</p>
        </div>
        <p>
          A big and attractive conference could be organized with lots of
          planning and efforts. We are one of the leading conference event
          organisers in Delhi. We provide premium services for the organization
          of meetings, conferences, and seminars in the areas of Delhi, Gurgaon,
          Noida, and Faridabad. We are working in this field with lots of
          dedication and considered a conference event organisers in Gurgaon.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Fashion Shows</h1>
              <p className="para">
                We have the latest ideas and accessories to make your conference
                a successful event. We have other optional services like food,
                furniture, music, lights which are required to maintain the
                quality of an event. We will provide you the best staff,
                volunteers, guards for your event. Our services of conference
                event organisers in Noida are unmatched and affordable as
                compared to any other service provider.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>WE DO ACCURATE AND QUICK PLANNING</h2>
            <p>
              Before doing anything, we believe in doing detailed planning. Our
              team of experts always stay ready to serve clients with full
              dedication and hard work. We observe everything related to the
              conference like the number of people, venue, security, type of
              conference etc. We will give you our customized services according
              to your need. As a best conference event planner in Delhi, it is
              our responsibility to give you beneficial results from our
              services.
            </p>
          </div>
          <div className="col-md-12">
            <h2>FLEXIBLE AND RELIABLE SERVICES FOR EVENTS</h2>
            <p>
              Our services are the most reliable and quick and we believe in
              giving versatile and flexible support for all type of conferences
              and meetings. Our customer support team and professional workers
              will help you to create a professional and beautiful environment
              for the conference. As compared to other conference event planner
              in Gurgaon, we have achieved a huge success in this field in very
              little time.
            </p>
          </div>
          <div className="col-md-12">
            <h2>VENUE SELECTION AND SETUP</h2>
            <p>
              We will give you a perfect venue to do the conference which will
              be easy for transportation and setup. We will give you the best
              stage setup, sittings, Fabrication, Tents, Halls etc. We are known
              for our best quality service as a conference event planner in
              Noida and we respect it a lot.
            </p>
            <p>
              If you are in the search of conference event planner in Faridabad,
              Delhi, Noida, Gurgaon then feel free to contact us anytime on the
              given numbers.
            </p>
          </div>
        </div>
      </div>
      <section className="ourCelebrationWork">
        <div className="container mt-4">
          <h2 className="text-center">OUR CELEBRATION WORK</h2>
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  data-aos="zoom-in"
                  src={image.thumbnail}
                  alt={image.alt}
                  className="img-thumbnail img-fluid"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className={`modal fade ${showModal ? "show d-block" : ""}`}
              id="imageModal"
              tabIndex="-1"
              aria-labelledby="imageModalLabel"
              aria-hidden={!showModal}
              style={{ display: showModal ? "block" : "none" }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      data-aos="zoom-in"
                      src={selectedImage.original}
                      alt={selectedImage.alt}
                      className="img-fluid"
                      style={{ maxHeight: "80vh" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="container p-2">
        <h2 className="text-center">
          ARRANGE WORLD-CLASS CONFERENCE WITH CONFERENCE EVENT MANAGEMENT
          SERVICES
        </h2>
        <p>
          Planning and managing conferences require complete finesse and a lot
          of dexterity to multi-task. Besides, it surely teams up to be a task
          and a challenging objective to achieve. However, the paucity of time
          can leave you jumbled up with multiple tasks at hand and no time to
          concentrate on every aspect of conference arrangement.
        </p>

        <p>
          Well, then how about getting a helping hand with profound knowledge
          and experience to help turn your conference into a success. Moreover,
          that will certainly leave you with sufficient time for yourself and to
          participate wholly in the conference.
        </p>

        <p>
          XYZ is a premium Conference event management company that takes the
          complete onus of planning the event and managing it through the entire
          phase, starting from arrangement to output.
        </p>

        <p>
          We, as conference organizers, provide deft services in arranging
          Conference event management for corporates and big companies. Besides,
          we believe in moving in tandem with time, and considering the present
          requirement of Work From Home, we ensure to arrange for an online
          conference with complete ease.
        </p>

        <p>
          Are you still wondering if we are your ideal for Conference event
          management? Well, then your doubts and queries will be resolved in few
          minutes as we run you through our offerings and services. So, sit back
          for this quick 5 minute read while we present how XYZ is your answer
          for corporate conference organiser.
        </p>
        <h2>WHAT ARE THE PHASES OF THE CONFERENCE?</h2>
        <p className="mb-3">
          Before we provide you a sneak peek into our offerings, let us give you
          a brief outlook of planning a conference takes. We have divided it
          into the following phases:
        </p>
        <h2>
          <b>Booking Venues and Sending Invites</b>
        </h2>
        <p>
          Organising resources that include catering, arrangement of promotional
          items, collateral printing, setting up AV, and much more Liaising with
          guest speakers and presenters Accepting registrations and payments
          Sending reminders through mail and SMS to delegates Printing badges
          and arranging staff to help during the conference Keep a tab of the
          budget.
        </p>
        <p>
          Well, doesn’t that seem too much of a task in itself? As conference
          organizers, we understand the necessity and importance of holding a
          successful conference. Thus, we take up the responsibility of
          arranging for the corporate conference in its entirety. Now let us
          look at each step in detail.
        </p>

        <div className="row">
          <div className="col-md-6">
            <h2>
              <b>Booking for venues</b>
            </h2>
            <p>
              As a conference organiser, whether for a conference or a meeting
              in your own office or any external venue, it requires diligence.
              You must gauge if the place can accommodate all the guests if the
              sound system is properly set so that the speaker is audible to all
              the audience. Besides, the primary function is ensuring no two
              tasks mix up with one another, thereby leading to confusion.
            </p>
          </div>
          <div className="col-md-6">
            <h2>
              <b>Sending invites to delegates</b>
            </h2>
            <p>
              With being caught with other work, you may miss out on certain
              games and invites. Our team will help prepare the list and send
              invites based on the job title, location, and much more in time.
              We use the latest software that makes it easy to carry on the
              task, records update automatically, and helps you register without
              any hassle.
            </p>
          </div>
          <div className="col-md-6">
            <h2>
              <b>Managing resources</b>
            </h2>
            <p>
              It is one of the crucial aspects of conference management. As
              corporate conference organiser, we have professional and expert
              event managers who will keep track and control of resources at the
              venue. It includes delegating tasks to caterers by updating them
              regarding their dietary needs, communicating with the sound and
              stage technicians, looking after registration, and maintaining
              complete hospitality during the event.
            </p>
          </div>
          <div className="col-md-6">
            <h2>
              <b>We fit the event into your budget</b>
            </h2>
            <p>
              Most importantly, XYZ is known for presenting world-class
              conferences without deviating out of your budget requirement. By
              constantly monitoring with the management and overseeing the
              arrangement, we as your conference organizers will turn your
              business conference into a complete success.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default Conferences;
