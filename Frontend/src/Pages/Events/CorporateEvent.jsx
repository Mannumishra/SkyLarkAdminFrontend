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
     
const CorporateEvent = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        <title>Corporate Event Planners in Delhi | Skylark Event</title>
        <meta
          name="description"
          content="Skylark Event is a leading corporate event management company in Delhi NCR, specializing in handling all types of corporate events with expertise and professionalism."
        />
        <meta
          name="keywords"
          content="Corporate Events, Event Management, Delhi NCR, Skylark Event"
        />
      </Helmet>
      <div className="bread bg-image"      >
        <div class="overlay">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h3 className="about-heading">
                Corporate Event Planners in Delhi - Flexible Terms and Offers
              </h3>
              <div className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /<Link to="/">Corporate Events</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Corporate Events</h2>
          <p>PROFESSIONAL CORPORATE EVENT ORGANISERS</p>
        </div>
        <p>
          <b>Looking to make your Corporate event amazingly superior?</b>
        </p>
        <p>
          If yes, then <b> Skylark Event</b> is here with its advanced offerings
          as a leading corporate event management company in Delhi NCR.
        </p>
        <p>
          We have extreme expertise in handling all types of corporate events in
          effective manners. Helping our clients to make their clients,
          employees, and other business partners happy with these events, we
          develop each service in a well-planned manner. With our expert event
          organizers and professional management staff, we make sure to handle
          all the major activities of your events adequately.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">
                CORPORATE EVENTS THAT FOCUS ON EVERYONE
              </h1>
              <p className="para">
                The corporate events are organized mostly for branding, and
                other crucial business works. So, it is important and
                undoubtedly tough to take care of all of the guests in these
                busy days.
                <p>
                  But, when you hire us as your corporate event planners in
                  Delhi, we make sure to always satisfy your needs with our
                  expert solutions. We give advanced support to overcome the
                  challenges which may arise during these programs. While
                  working in this field for years and serving our clients with
                  the perfect services, we always ensure the 100% satisfaction
                  of our clients.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>
              ARRANGE FOR A SUCCESSFUL CORPORATE EVENT WITH CORPORATE EVENT
              ORGANISERS IN DELHI
            </h2>
            <p>
              Corporate events play an integral part in enhancing and grading up
              your business. It is because you not only have your employees at
              the event but also prospective delegates too. Thus, it becomes an
              ideal platform to leave an everlasting impression on prospective
              clients, thereby scaling up your business. However, for a
              corporate event to be a success, it requires adequate planning and
              execution.
              <p>
                Here in, taking help from Corporate event management companies
                in Delhi will make your overall task quite easy. Whether it is a
                big corporate event for a business or a social gathering, formal
                or informal, big or small, each requires deft planning that
                would turn it into a success. Thus, taking the assistance of
                corporate party organiser will only prove to be beneficial for
                you.
              </p>
              <p>
                If you wonder how corporate event planning in Delhi can be
                carried out deftly, you are at the right place. We at Skylark
                Event are renowned corporate event organisers, and we are here
                to present you with a complete solution. However, you must read
                through the entire section and get a sneak peek of what we offer
                to you.
              </p>
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
          WHY CHOOSE Skylark EVENT AS YOUR CORPORATE EVENT ORGANISERS IN DELHI?
        </h2>
        <p>
          There are many advantages of putting your load of arranging corporate
          events on us at Skylark Event. Being a corporate event planner with
          years of experience, we know what tasks to make a conference or event
          a complete success. First, unlike the usual myth, a corporate event is
          not similar to arranging for get-togethers or a meeting.
        </p>
        <p>
          It is much greater, and the role of corporate does make it a humungous
          task to fulfill. Thus, hiring a corporate event planner will ease your
          work to a great extent. We have the assets, experience, skill and
          present you the economic advantage of setting the entire event within
          the limits of your budget.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h2>We visualize what type of event it is..</h2>
            <p>
              One of the advantages of hiring a corporate event planner is
              getting a complete view of what type of event will best suit your
              objective. There are a million ways to present creative ideas and
              suggestions, and for that, you require somebody who holds the
              necessary vision. Our professional event managers can know your
              requirements, plan a strategy, get your approval, execute a
              successful event that stands by the client's vision, and meet the
              needs with complete finesse.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Coordinate products and services</h2>
            <p>
              As event managers, we have complete knowledge of resources and
              services. Thus, we know how to implement the services by
              considering location and venue, food arrangement, registration,
              payment, entertainment, speakers arrangement, decoration,
              security, sound system, transportation, parking arrangements, and
              much more.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="text-center">
              WE ARE ADEPT WITH PLANNING AND COORDINATION.
            </h2>
            <p>
              Our corporate event managers are well adept at managing crowds
              irrespective of the numbers. So whether it is a small crowd or a
              huge one, we will ensure no confusion and everything is handled
              professionally.
            </p>
            <p>
              Thus, with us, you need not bother about implementing the services
              and enjoy the event participating with guests, entertainment, and
              relishing delicious food served by the best caterers. Moreover,
              based on your list of requirements, we would keep a continuous tab
              and coordinate with others to oversee nothing is mismanaged or
              lagging.
            </p>
            <p>
              If you are looking for a successful corporate event that can turn
              into a bonanza for your business and your guests' enjoyment, do
              not forget to hire Skylark Event as your corporate event
              organisers in Delhi for all corporate party events.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default CorporateEvent;
