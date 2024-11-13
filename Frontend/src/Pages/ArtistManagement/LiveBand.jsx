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

const LiveBand = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
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
        <title>Live Band Services - Skylark Events</title>
        <meta
          name="description"
          content="Discover the best live band services for your event with Skylark Events. From rock bands to tailored performances, make your event unforgettable."
        />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Elevating Your Event with SKYLARK ARTIST & EVENT's Live Bands
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Live Band</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Live Band</h2>
          <p>SOAK IN THE LIVE BAND VIBE WITH Skylark EVENT</p>
        </div>
        <p>
          Ever been to an event where the music just hits different? That's the
          magic of live bands, and that's what we do best at Skylark Event. We
          get it – whether it's a swanky corporate affair, a love-filled
          wedding, or just a good ol' party, live bands bring that extra spark
          that recorded tunes simply can't match. Your event deserves nothing
          less than that live music charm, and we're here to make it happen.
        </p>
        <p>
          Organizing an event that leaves everyone talking is a dream, right?
          Well, at Skylark Event, we're here to turn that dream into reality!
          Our secret sauce? The enchanting world of live bands. In this guide,
          we'll take you through the whole shebang – from nabbing your dream
          band to setting up a stage that's Insta-worthy. Let's dive deep and
          make your event one for the books!
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">
                UNLEASH THE POWER OF ROCK WITH Skylark EVENT'S ROCK LIVE BAND
                EXPERIENCE
              </h1>
              <p className="para">
                If the idea of guitars wailing and drums beating gets your heart
                racing, then our Rock Live Band experience is tailor-made for
                you. Picture this: our talented musicians rocking the stage,
                delivering an electrifying performance that brings the spirit of
                rock 'n' roll alive. It's not just music; it's an experience,
                and we're here to bring that experience to your event.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <h2>Simplifying Live Band Booking with Skylark Artist</h2>
              <p>
                Now, booking a live band might sound like a massive task, but
                fear not – Skylark Artist is here to simplify the process. No
                complicated hoops to jump through. Our platform is
                user-friendly, making it a breeze to explore and pick from a
                curated selection of top-tier bands. Your dream live band is
                just a few clicks away.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>Crafting an Awe-Inspiring Stage Setup with Skylark Event</h2>
              <p>
                You've got the band; now, let's set the stage for pure
                awesomeness. Our team at Skylark Event is all about creating
                visually stunning stage setups that perfectly complement the
                energy of the live band. We're not just about music; we're about
                creating an immersive experience that turns your event into a
                memorable spectacle.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h2>CHOOSING THE PERFECT VENUE FOR YOUR LIVE BAND EXTRAVAGANZA</h2>
            <p>
              Selecting the right venue is like choosing the perfect frame for a
              masterpiece. Skylark Event guides you through the options, helping
              you find the spot that suits your event's vibe. Whether it's an
              intimate space or a grand auditorium, we've got the know-how to
              make your live band show truly shine.
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
      <Services />
      <Faq />
    </>
  );
};

export default LiveBand;
