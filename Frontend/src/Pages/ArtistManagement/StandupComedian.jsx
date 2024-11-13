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
     
const StandupComedian = () => {
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
  //   
  return (
    <>
    <Helmet>
        <title>Standup Comedian Booking | Skylark Artist</title>
        <meta name="description" content="Book top standup comedians for your event with Skylark Artist. Create a memorable comedy experience with our talented comedians." />
        <meta name="keywords" content="standup comedian, comedy event, book comedian, Skylark Artist, Delhi standup comedy" />
      </Helmet>
      <div>
        <div className="bread bg-image" >
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="textwhite about-heading">
                  Crafting Laughter: Your Blueprint for a Standup Comedy
                  Extravaganza with Skylark Artist!
                </h3>
                <div className=" textwhite breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Standup Comedian</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Standup Comedian</h2>
          <p>THE COMEDY ALCHEMY</p>
        </div>
        <p>
          Let's peel back the curtain and dive headfirst into the mesmerizing
          world of standup comedy – where laughter reigns supreme! Uncover the
          fundamental Comedy Skills that, truth be told, aren't as mysterious as
          they may seem. These skills, when mastered, transform our comedians
          into true maestros. Ever wondered about the wizardry behind crafting
          those spot-on jokes? We're about to unravel the basics of Joke
          Crafting and why it's the secret sauce to a laugh that lingers.
        </p>
        <p>
          Ready to turn your gathering into a laughter-filled spectacle? Well,
          buckle up because SkylarkArtist.com is your ultimate ticket to an
          event that's not just good but downright unforgettable! We're not just
          here to host events; we're here to orchestrate experiences that people
          will be raving about for ages. Stick with me as we navigate the path
          to effortlessly booking the finest <b> standup comedian</b> for your
          upcoming bash.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">TAILORING COMEDY TO YOUR EVENT</h1>
              <p className="para">
                Planning a Comedy Show that's not just good but downright
                extraordinary? Fantastic! At Skylark Artist Best Standup
                Comedians in India, we're all about customizing the show to
                match your unique style. Whether it's a campus bash, a college
                spectacle, or a school event that needs that extra kick of
                humor, consider it done. Let's chat about how we can make your
                event not just an occasion but the absolute highlight of your
                celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>Beyond the Chuckles - Comedy with Substance</h2>
            <p>
              We're not here solely for the laughs; we're here to serve up
              laughs with a side of wisdom. Delve into how our comedians bring
              more to the table with Educational Standup Comedy. It's the kind
              of entertainment that leaves your audience not just entertained
              but also enlightened. Imagine your event being the talk of the
              town for all the right reasons!
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <h2>Unveiling the Comedy Craftsmanship</h2>
            <p>
              Ever dreamt of being the wizard of wit in the room? Well, dreams
              do come true! Explore our Standup Comedy Workshop Classes – the
              insider's guide to turning that dream into reality. Whether you're
              a budding comedian ready to steal the spotlight or simply aiming
              to spice up that office presentation with humor, consider this
              your golden ticket.
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
          <h2 className="mt-5">THE CAPITAL'S COMEDY CHRONICLES</h2>
          <p className="mb-5">
            If you're in Delhi, get ready for a dose of laughter like never
            before! Discover how you can bring the vibrant Delhi comedy scene to
            your event. Booking <b> Standup Comedy in Delhi </b> isn't just an
            event move; it's an injection of energy into your celebration,
            making it a vibrant and laughter-filled affair.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>The Stress-Free Booking Symphony</h2>
            <p>
              We get it – event planning can be a hassle. But worry not! Our
              Stress-Free Booking Process is designed to make your life simpler
              than ever. From choosing your favorite comedian to ironing out the
              details, consider the process streamlined. Focus on enjoying the
              laughter at your event, and leave the rest to us.
            </p>
          </div>
          <div className="col-md-6">
            <h2>NCR's Comedy Royalty - Elevate Your Event</h2>
            <p>
              Discover why hiring a Standup Comedy Artist in NCR is the ultimate
              move. We've handpicked the region's finest comedians ready to turn
              your event into a laughter-packed extravaganza. Trust us; your
              audience deserves nothing but the best in comedic entertainment.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="mt-5">CRAFTING EVERLASTING MEMORIES</h2>
            <p>
              Let's wrap things up. Your event isn't just another date on the
              calendar; it's an opportunity to create memories that last a
              lifetime. At Skylark Artist, we're committed to delivering
              top-notch Male and Female comedians, personalized service, and
              ensuring your event is the one everyone talks about for years to
              come.
            </p>
            <p>
              Excited to turn your event into the funniest show in town?
              Skylark Artist is here to make it happen. Don't miss out – hit us
              up to Book a Free Consulting Call. Let's chat about bringing the
              best Indian Standup Comedian to your event and crafting an
              experience that's nothing short of legendary.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default StandupComedian;
