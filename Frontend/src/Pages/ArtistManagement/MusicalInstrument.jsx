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
     
const MusicalInstrument = () => {
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
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
        <title>Musical Instrument Players in Delhi - Skylark Event</title>
        <meta
          name="description"
          content="Book the best musical instrument players in Delhi with Skylark Event. Perfect for weddings, parties, and all special occasions."
        />
        <meta
          name="keywords"
          content="musical instrument players, Delhi musicians, event entertainment, Skylark Event, book musicians"
        />
      </Helmet>
      <div>
        <div
          className="bread bg-image"
               
        >
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Book Delhi Best Musical Instrument Players From The Comfort of
                  Your Home
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /
                  <Link to="/">Musical Instrument Players</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Musical Instrument Players</h2>
          <p>MEET OUR AMAZING MUSICIANS: THEY'RE REALLY GOOD!</p>
        </div>
        <p>
          Get ready to be wowed by our awesome{" "}
          <b> musical instrument players.</b> These guys aren't just regular
          musicians; they're like magic with their instruments. They'll make
          your event feel like a fairytale – that's how good they are. Each one
          has their own cool style, making sure your friends and family have a
          blast.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">
                PICKING THE BEST MUSIC FOR YOUR BIG DAY: WE'VE GOT YOUR BACK
              </h1>
              <p className="para">
                Planning a wedding? No worries – we've got your back with the
                lowdown on the best musical instruments for weddings. From
                classy strings to a solo piano vibe, we'll help you choose
                sounds that'll make your special day even more awesome. Let's
                make a playlist that's all about the love you're celebrating.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-2">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>
              Super Skilled Musicians for Your Wedding Bash: They Make the Party
              Rock!
            </h2>
            <p>
              Our crew of skilled wedding musicians isn't just good; they're
              like superheroes of parties. These guys don't just play; they
              create a vibe that'll take your celebration to the next level.
              Imagine your favorite tunes being played live – it's like having
              your own concert at your wedding!
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <h2>Crafting the Ultimate Wedding Ensemble: Your Own Music Mix</h2>
            <p>
              Thinking about a mix of instruments for your wedding? Let us
              handle it! We're all about creating the perfect wedding ensemble
              combinations that match your style. Whether you're into classics
              or something more modern, we've got your back. Your wedding, your
              music – let's make it perfect together.
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
            SOLO ACTS FOR AN INTIMATE FEEL: MOMENTS THAT LAST FOREVER
          </h2>
          <p className="mb-5">
            Want something more personal? Check out our awesome solo{" "}
            <b> musical performances for events.</b> Whether it's a solo violin
            or a chill guitarist, these artists will give you a performance
            you'll remember forever. It's all about creating moments that are
            super special and just for you.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Jam to Your Favorite Genres: Your Kind of Music Party</h2>
            <p>
              We're all about mixing it up! Explore tons of diverse music genres
              for wedding events. From classic tunes that tug at your heart to
              the latest hits that get everyone dancing, our musicians can play
              it all. It's your day, your way – let's create a music party
              that's exactly what you want.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Renting Instruments Made Easy: No Stress, No Mess</h2>
            <p>
              Don't stress about instruments – just rent them from us! Our
              renting musical instruments for events service is super easy.
              Whether you need a fancy piano or some cool drums for a fun vibe,
              we've got your back. It's about making your musical plans as easy
              as pie.
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
          <div className="col-md-12">
            <h2>
              TIPS FOR STRESS-FREE MUSIC PLANNING: BECAUSE PLANNING SHOULD BE
              FUN
            </h2>
            <p>
              Planning the music shouldn't be a headache. Check out our simple
              tips for planning musical performances. We're spilling the beans
              on making your music plans stress-free and, dare we say, fun. From
              picking the right instruments to talking to our cool musicians,
              we've got everything covered.
            </p>
          </div>
          <div className="col-md-12">
            <h2>YOUR EVENT, YOUR JAM: LET'S MAKE IT AWESOME!</h2>
            <p>
              Your life is like a cool song, and at Skylark Artist, we're here
              to make it even cooler. We love creating musical moments that
              become your favorite memories. So, let's turn your event into a
              super fun experience – because you deserve the best.
            </p>
            <p>
              Ready to make your event unforgettable? Give us a shout for a free
              chat. We'll help you create the perfect music vibe because every
              moment needs a bit of melody. Let's start making your event super
              awesome!
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default MusicalInstrument;
