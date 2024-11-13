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
     
const CollegeEvents = () => {
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
        <title>College Events Management | Skylark Artist</title>
        <meta name="description" content="Expert college event management services by Skylark Artist. From college fests to annual days, we handle it all with professionalism." />
        <meta name="keywords" content="college events, event management, college fests, annual days, farewell parties, cultural events" />
      </Helmet>
      <div>
        <div className="bread bg-image"      >
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">College Event</h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">College Event</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>College Event</h2>
          <p>COLLEGE EVENT MANAGEMENT</p>
        </div>
        <p>
          College events are the sort of events which are organized for the
          purpose of entertainment, appreciation, and motivation of the students
          and the staff. These events are majorly celebrated as farewells,
          annual days, college fests, fashion shows, award nights etc. If you
          are planning to organize any type of big college events then you
          should contact the best college event organisers in Delhi, Gurgaon,
          Noida, Faridabad.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">COLLEGE EVENT MANAGEMENT</h1>
              <p className="para">
                Skylark Event is providing the services as a college event's
                organizer with full dedication and hard work. Our services are
                spread in all type of events organization but we are dealing
                very great with school and college events. Our staff always
                comes with the latest ideas and set up to make every college
                event unique and different from others.
              </p>
            </div>
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
        <h2 className="text-center">COLLEGE FESTS</h2>
        <p>
          A huge college fest cannot be done without a good fest organizer. But
          if you select us, we will give you the best platform and service to
          finish your college fest. We deal with different kinds of fests like
          technical fests, management fests etc. We will give you the best
          music, audio, catering, and security services. We are always ready to
          serve you with perfection and you should give us a chance if you want
          it to be done for you.
        </p>

        <h2>ANNUAL DAYS AND FAREWELL ORGANIZATION</h2>
        <p className="mb-3">
          Annual days and farewell parties are the most awaited events in
          colleges and schools too. If you are searching for someone who can
          plan and organize these events for you then Skylark events are the
          best choice for you. We will give you the best stage, sittings,
          artists, and celebrity to spark your event with perfection.
        </p>
        <h2>
          <b>CULTURAL EVENTS</b>
        </h2>
        <p>
          Cultural events are mostly organized in college to showcase the
          different cultures from all around the world by students and artists.
          If you are looking to organize a cultural event then we will give you
          the best service for these events with the help of our innovative team
          members.
        </p>
        <p>
          We are the best college event Planners in Delhi, Gurgaon, Noida,
          Faridabad and we respect your requirement and emotions attached to
          these events. If you have any type of question and queries regarding
          our service then feel free to contact us.
        </p>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default CollegeEvents;
