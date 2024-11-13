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
     
const DrumCircle = () => {
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
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
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
        <title>Drum Circle - Skylark Event</title>
        <meta name="description" content="Experience the magic of drum circles with Skylark Event. Connect through rhythm and make your event unforgettable." />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Elevate Your Event with SKYLARK ARTIST & EVENT's Drum Circle
                  Magic
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Drum Circle</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Drum Circle</h2>
          <p>THE BUZZ ABOUT DRUM CIRCLE</p>
        </div>
        <p>
          <b>Ever wondered what makes drum circles so cool?</b>
        </p>
        <p>
          Well, at <b> Skylark Event,</b> it's all about connecting people
          through beats. Picture this: a group of folks coming together, each
          with a drum, creating a vibe that lingers long after the event ends.
          It's not just about drumming; it's about building a community through
          rhythm, laughter, and shared experiences.
        </p>
        <p>
          Get ready to groove because Skylark Event is all about turning your
          events into unforgettable experiences. If you're searching for that
          unique touch, our <b> Drum Circle activities </b> like Mega Drum
          Circle Jam, Boombastic Mixed, Body Percussion, Stress Busting Office,
          Team Outing Energiser are the ultimate way to bring rhythm and
          excitement to your gatherings. Let's dive into the world of beats and
          see how Skylark Event can make your next event the talk of the town.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">WHY DRUM CIRCLE ACTIVITIES?</h1>
              <p className="para">
                Thinking of adding a twist to your event? Drum circle activities
                are like the secret ingredient for a good time. It's not just
                about hitting drums randomly; it's about breaking the ice,
                creating bonds, and injecting a ton of positive energy into your
                gathering. It's the kind of activity that leaves everyone
                smiling and talking about your event for weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <h2>MEET OUR DRUM FACILITATORS</h2>
              <p>
                Now, let's talk about the heartbeat of our events – our{" "}
                <b> Drum Facilitators.</b> They're not your typical musicians;
                they're experienced guides on this rhythmic journey. Imagine
                having someone who not only knows how to play the drums but can
                also make everyone, from beginners to pros, feel like{" "}
                <b> drumming rockstars.</b> They're the key to turning your
                event into a lively, rhythmic adventure.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>CORPORATE DRUM CIRCLE FOR TEAM BUILDING</h2>
              <p>
                Time to talk business, but in a seriously fun way! Our Corporate
                Drum Circle isn't your usual team-building exercise – it's a
                game-changer. Drumming together is like a team-building party,
                boosting teamwork, lifting spirits, and turning your employees
                into a united, rhythmic force. It's a unique and effective way
                to foster camaraderie and break down barriers.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h2>FEEL THE DRUM CIRCLE RHYTHMS</h2>
            <p>
              <b> Rhythms are the heart and soul</b> of our drum circles.
              Whether you're a drumming newbie or a seasoned pro, we've got a
              groove for everyone. From easy beats that anyone can follow to
              intricate patterns that challenge the pros, it's all about feeling
              the rhythm and having an absolute blast. It's not just a drumming
              session; it's a{" "}
              <b>
                {" "}
                full-on rhythmic experience. School Orientation, Educational
                Interest Building & Rhythmic Learning{" "}
              </b>
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

export default DrumCircle;
