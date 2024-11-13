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
     
const PhotoVideo = () => {
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
        <title>Professional Photography & Videography Services - Skylark Event</title>
        <meta name="description" content="Capture your special moments with Skylark Event's professional photography and videography services. Best photographers and videographers in Delhi." />
        <meta name="keywords" content="photography, videography, wedding photographers, event videographers, Skylark Event, Delhi photographers" />
      </Helmet>
      <div>
        <div className="bread bg-image"      >
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  ECrafting Timeless Memories with Skylark Event
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /
                  <Link to="/">Photographer & Videographer</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Photographer & Videographer</h2>
          <p>TREND SETTING WEDDING PHOTOGRAPHY WITH AFFORDABLE PRICE</p>
        </div>
        <p>
          Best Wedding Photographers in Delhi - To capture and record the
          special moments in any event or marriage, you will need a good
          photography and videography service. Skylark Event is providing you
          the same with expert and professional people. Whenever you do an
          event, you would need the correct service to the work of photography
          and finding them is the most difficult task.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Photographer & Videographer</h1>
              <p className="para">
                We are providing you the best photographers and videographers
                for your events, marriages, parties and birthdays. We have lots
                of connections in this industry and we are capable to give you
                the suitablev best wedding photographers in Delhi, Gurgaon for
                your event. We provide you the best and professional individual
                in this industry and they will give you the best results as you
                need from us.
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
        <h2 className="text-center">WE HAVE BEST CAMERAS</h2>
        <p>
          We use the best and premium camera to capture everything in detail.
          Our <b> Wedding photographers</b> and videographers use the latest and
          famous cameras to finish their work with perfection. We always try to
          be advanced in every industry and this field is not an exception for
          us.
        </p>
        <h2>BEST EDITING SERVICE</h2>
        <p className="mb-3">
          After capturing every detail in the event, we also provide the best
          editing tools and systems to get beautiful effects and impression in
          the photos and videos. Our professionals will give you the customized
          video and albums as per your requirements. A good photographer and
          videographer for wedding and pre wedding events also need good editing
          skills otherwise there are no reasons to hire them.
        </p>
        <h2>FAST DELIVERY OF PHOTOS AND VIDEOS</h2>
        <p>
          If you have done any event in the past then you may experience one
          thing that the photography service takes very long to give us our
          albums, DVD or any sort of required data. But we are fast in this
          field of photographers and videographers for weddings. Our advanced
          systems are capable to process all the raw data and convert it to mean
          things like wedding videos and photo albums.
        </p>
        <p>
          You may require us as photographer and videographer for a birthday
          party or any event in Delhi, Noida, Gurgaon, Faridabad. We are always
          ready to help you. We have a wonderful customer support team which
          will help you by resolving all of your queries. Feel free to contact
          us any time on the given numbers.
        </p>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default PhotoVideo;
