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
     
const BollywoodCelebrity = () => {
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
        <title>Bollywood Celebrities for Your Event - Skylark Artist</title>
        <meta name="description" content="Explore the star-studded lineup of Bollywood celebrities available for your event with Skylark Artist. Custom packages and easy booking to make your event shine." />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Spice Up Your Event: Book Bollywood Celebrities with SKYLARK
                  ARTIST
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /
                  <Link to="/">Bollywood Celebrity</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Bollywood Celebrity</h2>
          <p>BOLLYWOOD STARS – THE SHOWSTOPPERS</p>
        </div>
        <p>
          Ever caught yourself daydreaming about having a Bollywood celebrity at
          your event? We totally get it – there's something special about their
          presence that can light up any gathering. At Skylark Artist, we're on
          a mission to make those dreams a reality by bringing you the magic of
          these showstoppers.
        </p>
        <p>
          Event enthusiasts! Welcome to Skylark Artist, your go-to source for
          turning ordinary events into extraordinary experiences. If you've ever
          dreamt of adding a sprinkle of Bollywood magic to your special day,
          you're in for a treat. Let's dive deep into how we can make your event
          the talk of the town by bringing in the charisma of Bollywood
          celebrities.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">STAR-STUDDED LINEUP</h1>
              <p className="para">
                Hold onto your excitement because we've got a fantastic lineup
                of Bollywood celebrities just waiting to make your event shine.
                From iconic actors who've left an indelible mark on the silver
                screen to dazzling performers who know how to captivate an
                audience, our diverse selection caters to every taste. Navigate
                through our user-friendly platform to discover your perfect
                match.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <h2>Custom Packages, Just for You</h2>
              <p>
                Worried about breaking the bank to make your dream event happen?
                Fear not! Skylark Artist believes in making your dreams come
                true without emptying your pockets. Our customized packages are
                tailor-made to fit your event like a glove, whether it's a
                dreamy wedding, a corporate bash, or a lively party.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>Booking Made Easy</h2>
              <p>
                We get it – the idea of a complicated booking process can be a
                bit daunting. But here's the good news: we've made the entire
                process super simple. From your very first inquiry to the final
                round of applause, our dedicated team is here to ensure a
                hassle-free experience. Your happiness and satisfaction are our
                top priorities.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h2>CHOOSING THE PERFECT VENUE FOR YOUR LIVE BAND EXTRAVAGANZA</h2>
            <p>
              Selecting the right venue is like choosing the perfect frame for a
              masterpiece. Skylark Event guides you through the options,
              helping you find the spot that suits your event's vibe. Whether
              it's an intimate space or a grand auditorium, we've got the
              know-how to make your live band show truly shine.
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
        <h2 className="text-center">EXCLUSIVE STAR POWER</h2>
        <p>
          Imagine the buzz and excitement at your event when a top-tier
          Bollywood celebrity takes the stage. At Skylark Artist, we've got the
          exclusive hook-up with these stars, ensuring that your event becomes
          the talk of the town. Get ready for a dose of star power that will
          leave a lasting impression.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h2>Boost Your Brand with Celeb Glam</h2>
            <p>
              Planning a corporate event? We know that associating with
              Bollywood celebrities can do wonders for your brand. Skylark
              Artist is here to help you choose the perfect star that aligns
              seamlessly with your brand image, creating a memorable and
              impactful experience for your audience.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Journey through Bollywood Classics</h2>
            <p>
              Transport your guests on a delightful journey through the golden
              era of Bollywood. Skylark Artist offers you the unique
              opportunity to book veteran stars who've made an indelible mark on
              Indian cinema. It's like bringing a slice of nostalgia to your
              event, filled with the timeless beauty of Bollywood classics.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="text-center">GLOBAL BOLLYWOOD VIBES</h2>
            <p>
              Guess what? We're not limiting the glamour to just local stars.
              Skylark Artist is all about going big and global. No matter where
              you are, we can bring international Bollywood stars to your event,
              ensuring that the global charm of Bollywood is right at your
              doorstep.
            </p>
            <p>
              Curiosity piqued about what goes on behind the scenes? Us too!
              That's why Skylark Artist gives you an exclusive sneak peek into
              the lives and personalities of your chosen celebrities. It's like
              being part of the backstage buzz, creating a connection between
              the stars and their fans.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="text-center">LET'S PLAN YOUR EVENT TOGETHER</h2>
            <p>
              At Skylark Artist, we're not just event planners; we're
              experience creators. Your vision is our guide, and we're here to
              make it happen. Reach out to us today, and let's start planning an
              event that will be remembered for years to come. Your dream event
              is just a call away.
            </p>
            <p>
              Ready to add some Bollywood sparkle to your event? Skylark Artist
              is your go-to place for a star-studded experience. Don't miss out
              – get in touch today for a free chat about making your event
              shine. Skylark Artist – Where Every Event is a Bollywood
              Blockbuster!
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default BollywoodCelebrity;
