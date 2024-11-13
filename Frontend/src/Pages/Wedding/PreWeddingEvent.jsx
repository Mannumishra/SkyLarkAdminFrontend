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
     
const PreWeddingEvent = () => {
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
        <title>Pre Wedding Photoshoot in Delhi | Skylark Event</title>
        <meta
          name="description"
          content="Skylark Event offers professional pre-wedding photoshoot services in Delhi, Noida, Gurgaon, and Faridabad. We ensure memorable and enjoyable pre-wedding events with expert planning and execution."
        />
        <meta name="keywords" content="Pre Wedding Photoshoot, Event Planning, Delhi, Skylark Event" />
      </Helmet>
      <div className="bread bg-image"      >
        <div class="overlay">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h3 className="about-heading">Pre Wedding Photoshoot in Delhi</h3>
              <div className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /<Link to="/">Pre Wedding</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Pre Wedding</h2>
          <p>PROFESSIONAL WEDDING PHOTOSHOOT SERVICE</p>
        </div>
        <p>
          A wedding is the biggest day for a couple and a family but the{" "}
          <b> pre wedding photoshoot</b> event is also one of the exciting
          things for all of us. There are lots of things to do in a pre wedding
          photoshoot event. You must have something in your mind about these
          events but, you will require good prewedding event planners to
          organize all the activities and functions in these events in Delhi,
          Noida, Gurgaon and Faridabad.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Pre Wedding</h1>
              <p className="para">
                Skylark Event is working for these kinds of events and have
                given lots of wonderful events to the clients. We promise you
                also to give you the wanted results from your pre wedding shoot
                event. We work for perfection and these events require this
                thing the most. Our staff will plan everything after getting all
                the details about the venue, guests, budget and type of event.
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
        <h2 className="text-center">ENGAGEMENT PARTIES</h2>
        <p>
          An engagement party is the most important <b> pre-wedding</b> event
          for every couple. If you are planning to do an engagement party too
          then we will help you to plan it in an interesting way. We are here
          with lots of ideas and themes to make your engagement party a big
          enjoyable event for everyone in the areas of Delhi, Noida etc.
        </p>

        <h2>BACHELOR AND BACHELORETTE PARTIES</h2>
        <p className="mb-3">
          These Bachelorette Party are done before the marriage for the guy and
          girls who are going to get married soon. These parties should be done
          in a way that they should be entertaining for every guest. We will
          provide you the best service for these Bachelor parties. You will get
          the best services for food, decoration, drinks, music and other fun
          activities.
        </p>
        <h2>
          <b>BRIDAL SHOWER EVENTS</b>
        </h2>
        <p>
          A bridal shower is an event organized to honour the bride. All the
          guests, friends and relatives enjoy this party as a pre-wedding event.
          We will give all kinds of plans and services to make this day
          entertaining and memorable for everyone. We will serve you with the
          best kind of tenting, food, gifts and other important things.
        </p>
        <p>
          If you want that good events fun should be organized for your
          pre-wedding event then choosing us as your prewedding event planners
          in Delhi, Gurgaon, Noida and Faridabad will be the best decision. We
          will serve you with full dedication and uniqueness. If you have any
          type of query then feel free to contact us anytime.
        </p>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default PreWeddingEvent;
