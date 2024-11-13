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
     
const FashionShow = () => {
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
        <title>Fashion Show Organisers in Delhi | Skylark Event</title>
        <meta
          name="description"
          content="Skylark Event provides expert fashion show management services in Delhi. From venue selection to model arrangements, we handle all aspects to ensure a successful event."
        />
        <meta name="keywords" content="Fashion Show, Event Management, Delhi, Skylark Event" />
      </Helmet>
      <div className="bread bg-image"      >
        <div class="overlay">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h3 className="about-heading">Fashion Show Organisers</h3>
              <div className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /<Link to="/">Fashion Shows</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Fashion Shows</h2>
          <p>FASHION SHOW EVENT MANAGEMENT COMPANY IN DELHI</p>
        </div>
        <p>
          If you are looking for a perfect fashion show organizer then you
          should choose the one who is fully experienced in this. Fashion Shows
          are generally organized to showcase new brands and fashions to the
          people. We organize different type of shows like fashion shows,
          fashion events and fashion exhibition for different fashion houses and
          corporates.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Fashion Shows</h1>
              <p className="para">
                We will handle all the activities which are to be done in your
                fashion show. We will do everything responsibly and accurately
                with the help of our experienced staff members. You will get
                everything which is required to make a fashion show wonderful.
                There are lots of fashion show organisers in Delhi but we are
                different from others because of some reasons.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>VENUE SELECTION AND DECORATION</h2>
            <p>
              If you are thinking about the location of the event and its
              decoration then do not worry, we provide the best venues and
              fabrication service to our clients. Our selected locations will be
              easy for transportation also. There are lots of different design
              and setup of the fashion shows. We are the best fashion show
              organisers in Gurgaon for this reason too.
            </p>
          </div>
          <div className="col-md-12">
            <h2>ARRANGEMENT OF MODELS</h2>
            <p>
              Models are required in a fashion show. If you want best and
              experienced models to come to your event then we will provide you
              the same. We have a number of local and foreigner models who can
              come to your fashion show and make it splendid. You will get the
              best models from the industry on affordable prices.
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
        <h2 className="text-center">MANAGEMENT AND SECURITY</h2>
        <p>
          After setting up everything for the show, you will need good
          management for the show its security service. We will give the best
          solution for both of these services. We have very talented volunteers
          to handle all type of functions and activities performed in a fashion
          show. You will get a number of benefits after selecting us as fashion
          show event organisers in Delhi.
        </p>
        <p>
          Our versatile services for fashion show events are unmatched and best
          as compared to other fashion show event organisers in Gurgaon, Delhi,
          Noida, and Faridabad. If you have any type of question or queries or
          you want to discuss booking purpose then feel free to contact us
          anytime.
        </p>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default FashionShow;
