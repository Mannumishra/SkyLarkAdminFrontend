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
     
const EmceAnchor = () => {
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
        <title>Emcee and Anchor Services - Skylark Events</title>
        <meta name="description" content="Looking for the best emcee or anchor for your corporate event in Delhi NCR? Skylark Events offers experienced hosts to make your event unforgettable." />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Make Your Corporate Event Awesome with the Right Emcee or
                  Anchor in Delhi
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Emcee Or Anchor</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Emcee Or Anchor</h2>
          <p>WHY YOU NEED A GREAT EMCEE OR ANCHOR</p>
        </div>
        <p>
          Organizing a company event is a big deal, and having the right Emcee
          or Anchor can make it a hit. At <b>Skylark Events</b>, we know how
          important it is to have a lively host who can connect with the
          audience and guide the event smoothly. Whether you need a{" "}
          <b>
            {" "}
            female emcee, a male anchor, or a seasoned corporate event host in
            Delhi{" "}
          </b>
          , Gurgaon, Bangalore, Mumbai we've got what you're looking for. Let's
          explore how our friendly hosts can add that special touch to your
          corporate get-togethers.
        </p>
        <p>
          In the world of corporate events, the emcee is like the heartbeat,
          setting the mood and keeping the energy up. These emcees are like the
          friendly experts at your event. They know how to talk with the crowd
          and make the mood awesome. That's what turns a normal work gathering
          into something really cool. At Skylark Event, we believe a skilled
          emcee can turn an ordinary event into an extraordinary one.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">MEET THE BEST EMCEE IN DELHI</h1>
              <p className="para">
                Looking for the <b> Best Emcee in Delhi NCR?</b> Your search
                ends here. Our team has talented and experienced hosts ready to
                make your event stand out. Whether it's a product launch, awards
                ceremony, or team-building event, our MCs bring professionalism
                and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <h2>Adding Elegance – Female Emcees in Delhi NCR</h2>
              <p>
                For events that need a touch of grace,
                <b>
                  {" "}
                  our female emcees in Delhi NCR are the perfect choice.
                </b>{" "}
                With their friendly presence and great communication skills,
                they connect effortlessly with the audience, making your event
                unforgettable.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>Captivating the Audience – Male Emcees in Delhi</h2>
              <p>
                If you want a <b> dynamic male emcee in Delhi </b>, Noida our
                talented hosts can command the stage with confidence. They
                engage the audience and adapt to the event's vibe, making sure
                everyone has a good time.
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
      <Services />
      <Faq />
    </>
  );
};

export default EmceAnchor;
