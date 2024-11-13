import React, { useState } from "react";
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
     
const DestinationWedding = () => {
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
        <title>Destination Wedding Planners in Delhi | Skylark Event</title>
        <meta
          name="description"
          content="Skylark Event offers comprehensive destination wedding planning services in Delhi, India, and abroad. From location selection to decoration and entertainment, we ensure your dream wedding is unforgettable."
        />
        <meta name="keywords" content="Destination Wedding, Wedding Planning, Delhi, Skylark Event" />
      </Helmet>
      <div className="bread bg-image"      >
        <div class="overlay">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h3 className="about-heading">
                Destination Wedding Planners - Complete wedding services in your
                Budget
              </h3>
              <div className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /
                <Link to="/">Destination Wedding</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Destination Wedding</h2>
          <p>DESTINATION WEDDING PLANNERS IN DELHI</p>
        </div>
        <p>
          Is the destination wedding is your dream which you want to come true.
          Do not worry if you are thinking about how to plan and do it. Skylark
          Event is working as a <b> destination wedding organizer</b> and
          providing the people most wanted services in this field in the areas
          on Delhi, India. We are capable of doing a destination wedding in most
          of the famous places like Goa, Rishikesh, Jim Corbett, Shimla, Kerala,
          Udaipur etc.
        </p>
        <p>
          We are also dealing with overseas destination weddings. We have done
          so many <b> destination wedding in India</b> and Foreign countries on
          unbelievable budgets. We will make it happen in the famous forts,
          hotels, palaces, and beaches.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Destination Wedding</h1>
              <p className="para">
                We are committed to giving approach towards unmatched and best
                destination wedding services. Handling the works of a wedding to
                any service provider is a difficult and risk-taking task but we
                promise to give you the required output from us. Hundreds of
                satisfied clients are the attestors of our best destination
                wedding service.
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
        <h2 className="text-center">SELECTION AND BOOKING OF LOCATION</h2>
        <p>
          If you have a location in your mind then we will arrange that location
          for your wedding event or we can help you in finding the best places
          for your Indian destination wedding. We will do arrangements for
          famous and best places all around the globe.
        </p>

        <h2>PLANNING AND EXECUTION OF DECOR</h2>
        <p className="mb-3">
          We will plan every little thing about the decoration and marriage set
          up. We have all kinds of equipment and strategies to give you a good
          platform for your wedding.
        </p>
        <h2>GUEST MANAGEMENT</h2>
        <p>
          Guests are easy to manage if you are doing the wedding in own house or
          a hotel. But in a destination wedding, you have to do extra
          arrangements for the guests, friends, and relatives. We will give you
          best hotels, food and entertainment in your wedding event.
        </p>
        <h2>ENTERTAINMENT</h2>
        <p>
          Entertainment is the highly required thing in a wedding and if it's a
          <b> Destination wedding planners in Delhi,</b> India, it gets
          necessary to have a good entertainment system and setup. We will give
          you world-class music, games and a light system for your wedding.
        </p>
        <p>
          If you want to make your destination wedding much more fun with the
          help of a <b> destination wedding planner packages </b>then contact
          us. Our customer support team is always ready to help you.
        </p>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default DestinationWedding;
