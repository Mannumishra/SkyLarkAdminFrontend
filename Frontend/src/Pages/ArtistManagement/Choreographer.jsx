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
     
const Choreographer = () => {
    
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Helmet>
        <title>Best Choreographer in Delhi NCR - Skylark Event</title>
        <meta
          name="description"
          content="Discover top choreographers in Delhi NCR with Skylark Event. Elevate your event with bespoke dance performances and memorable choreography."
        />
        <meta
          name="keywords"
          content="Choreographer, Dance, Wedding Choreography, Delhi NCR, Skylark Event"
        />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Best Choreographer in Delhi NCR for your next dream wedding
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Choreographer</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Choreographer</h2>
          <p>A SYMPHONY OF DANCE: Skylark'S SIGNATURE CHOREOGRAPHERS</p>
        </div>
        <p>
          Step into a realm where dance is not just an art; it's a symphony
          conducted by the maestros at Skylark Event. Our choreographers,
          seasoned and skilled, bring forth a unique blend of grace, elegance,
          and storytelling.
        </p>
        <p>
          In the heart of Delhi, where vibrant celebrations echo through the
          streets, a unique chapter unfolds - one that's crafted with finesse
          and adorned with the art of dance. Enter Skylark Event, the unrivaled
          maestro of dance, where every movement is a brushstroke painting a
          canvas of unforgettable memories.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">
                A SYMPHONY OF DANCE: SKYLARK SIGNATURE CHOREOGRAPHERS
              </h1>
              <p className="para">
                Step into a realm where dance is not just an art; it's a
                symphony conducted by the maestros at Skylark Event. Our
                choreographers, seasoned and skilled, bring forth a unique blend
                of grace, elegance, and storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-2">
        <div className="row">
          <div className="col-md-6">
            <h2>The Skylark Difference: Corporate Brilliance</h2>
            <p>
              Imagine a corporate event that goes beyond the ordinary – where
              every step is a testament to sophistication and professionalism.
              This is the essence of Skylark Event's corporate choreography. Our
              choreographers collaborate with you to understand the ethos of
              your brand, weaving a performance that not only entertains but
              leaves a lasting impression, setting your event apart in the
              corporate landscape.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Wedding Waltz: A Dance of Love</h2>
            <p>
              As the sun sets over the city, the stage is set for a dance that
              mirrors the union of hearts. Our wedding dance choreographers are
              not just instructors; they are the architects of love stories told
              through movement. Each step is meticulously crafted to reflect the
              unique narrative of the couple, turning your wedding dance into a
              timeless expression of love.
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
      <div className="container">
        <div>
          <h2 className="mt-5">
            SANGEET SPECTACLE: WHERE JOY TAKES CENTER STAGE
          </h2>
          <p className="mb-5">
            Step into the world of Sangeet, where joy becomes the focal point,
            and laughter becomes the melody. Skylark Event's Wedding Sangeet
            Choreographers are the magicians who transform this night into a
            spectacular show. With a perfect blend of tradition and innovation,
            they choreograph performances that resonate with the celebratory
            spirit, turning your Sangeet into an unforgettable spectacle.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Delhi's Dance Haven: Booking Simplified</h2>
            <p>
              Planning an event in Delhi becomes a seamless journey with Skylark
              Event. Booking a choreographer is not just a transaction; it's an
              experience of luxury made simple. Our team brings a touch of
              opulence to every performance, ensuring that your event stands out
              in the bustling city. Convenience is at your fingertips – Skylark
              Event simplifies the process, allowing you to focus on the joy of
              your celebration.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Elevate Your Event: Skylark's Commitment</h2>
            <p>
              At Skylark Event, we don't merely plan events; we craft
              experiences that linger in the hearts of those who attend. From
              corporate galas to wedding celebrations, our commitment to
              excellence is unwavering. Your event is not just another date on
              our calendar; it's an opportunity for us to paint moments that
              will be remembered for a lifetime.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="mt-5">READY TO DANCE INTO ELEGANCE? LET'S TALK!</h2>
            <p>
              Your event deserves more than just choreography; it deserves a
              touch of luxury, a dash of magic, and the expertise of Skylark
              Event's renowned choreographers. Ready to turn your celebration
              into a dance of elegance? Book a free consulting call now. Reach
              out to us. Skylark Event – Where Every Dance Step is a Brushstroke
              on the Canvas of Celebration.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default Choreographer;
