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
     
const MimicryArtist = () => {
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
        <title>Mimicry Artists in Delhi - Skylark Event</title>
        <meta name="description" content="Hire the best mimicry artists in Delhi with Skylark Event. Perfect for all occasions, including corporate events and kids' parties." />
        <meta name="keywords" content="mimicry artists, Delhi mimicry, event entertainment, Skylark Event, hire artists" />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Unleash the Laughter: Hire the Best Mimicry Artists in Delhi
                  with Skylark Event!
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Mimicry Artist</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Mimicry Artist</h2>
          <p>MIMICRY MAGIC</p>
        </div>
        <p>
          Close your eyes and imagine this: voices, sounds, and quirky acts
          that'll have your crowd in splits. That's the magic of mimicry, my
          friend. And here at Skylark Event, we've gathered a team of seriously
          talented artists who know how to bring the house down with their
          incredible skills.
        </p>
        <p>
          If you're on the hunt for some serious fun and laughter at your
          gathering, then buckle up because you've landed at the right spot. We
          are Skylark Event, and our mission is simple: to make your events
          unforgettable with our fantastic mimicry artists. Whether it's a work
          get-together, your kiddo's birthday bash, or any other special day,
          we've got the talent to turn it into a laughter-packed fiesta. Let's
          dive deep into the world of mimicry and explore how Skylark Event can
          transform your event into a memorable extravaganza.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">WHAT MAKES Skylark EVENT STAND OUT</h1>
              <p className="para">
                Now, you might be wondering, "What sets Skylark Event apart?"
                Well, here's the scoop – we've got the absolute best mimicry
                artists in Delhi. These folks aren't just good at what they do;
                they're downright awesome! Talented, experienced, and on a
                mission to make your event a resounding success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>Meet Our Mimicry Maestros</h2>
            <p>
              Get ready to meet the rockstars of mimicry in Delhi. Our artists
              aren't just your run-of-the-mill performers – they're experts in
              their craft. These fantastic individuals bring a mix of talent,
              experience, and a whole lot of energy to make your event shine.
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <h2>For Every Occasion</h2>
            <p>
              Mimicry isn't a one-size-fits-all kind of entertainment. It's
              versatile! From serious corporate gigs where a touch of humor is
              needed to wild kids' parties where the goal is pure fun, our
              artists can tailor their acts to fit the vibe of any event.
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
          <h2 className="mt-5">KIDS' PARTIES, UPGRADED</h2>
          <p className="mb-5">
            Let's talk about turning kids' birthdays into a riot of fun. Imagine
            your little one's face lighting up as their favorite characters come
            to life – that's the kind of magic our mimicry artists bring to the
            table. It's not just entertainment; it's an experience that your
            kiddo will remember for a lifetime.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Mimicry Comedians Extraordinaire</h2>
            <p>
              Looking to add a sprinkle of humor to your event? Look no further!
              Our mimicry comedians are the perfect blend of wit and mimicry
              skills, ensuring that your crowd stays entertained from the first
              laugh to the last chuckle.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Easy-Breezy Event Planning</h2>
            <p>
              We get it – planning events can be a bit of a headache. But fear
              not, because with Skylark, it's a breeze. From the initial idea
              to the final execution, our dedicated team ensures that every
              detail is on point, so you can relax and enjoy the festivities.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="mt-5">BOOKING MADE SIMPLE</h2>
            <p>
              Ready to snag the best mimicry artist for your event? Booking with
              Skylark Event is as easy as pie. Our user-friendly process
              ensures that you can lock in the perfect entertainer without
              breaking a sweat. We've simplified it because we know your time is
              precious.
            </p>
            <p>
              Keen to sprinkle some laughter into your event? Don't be shy;
              reach out to Skylark Event today, and let's get the ball rolling.
              Book a free chat with us, and together, we'll brainstorm and plan
              the event of your dreams. Because at Skylark Event, we believe in
              turning your vision into reality.
            </p>
            <p>
              Skylark Event is all about turning your event into a
              laughter-packed bash. Don't settle for ordinary – choose us for an
              extraordinary experience. Hit us up for a free chat now, and let's
              start planning the event that folks will talk about for ages!
              Laughter is just a call away!
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default MimicryArtist;
