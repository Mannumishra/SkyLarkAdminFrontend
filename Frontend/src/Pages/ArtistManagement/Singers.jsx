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
     
const Singers = () => {
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
        <title>Book Singers for Events | Skylark Event</title>
        <meta
          name="description"
          content="Discover top-notch singers for your events with Skylark Event. Book talented artists for weddings, parties, and more in Delhi NCR."
        />
        <meta
          name="keywords"
          content="singers for events, book singers, wedding singers, Delhi NCR singers, Skylark Event"
        />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Elevate Your Event with Skylark Event: Book Singers for
                  Unforgettable Weddings
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Singers</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Singers</h2>
          <p>BOOK SINGERS FOR EVENTS: UNVEILING THE Skylark DIFFERENCE</p>
        </div>
        <p>
          When it comes to booking <b> singers for events,</b> Skylark Event
          stands out as a premier choice that goes beyond the ordinary. Our
          commitment to excellence and a diverse pool of exceptionally talented
          artists ensures that your event will be nothing short of
          extraordinary. Whether it's a wedding, corporate event, or private
          party, our singers are ready to set the perfect tone for any occasion.
          Immerse your guests in a world of musical enchantment, where every
          note is carefully curated for an experience that transcends
          expectations.
        </p>
        <p>
          Creating an exceptional event or wedding requires meticulous planning,
          and one crucial element that can truly elevate the entire experience
          is the choice of music. At Skylark Event, we understand the
          significance of crafting unforgettable moments, and our diverse roster
          of talented singers and bands is here to transform your event into a
          magical celebration. Explore our offerings, ranging from solo singers
          to popular jazz ensembles, all tailored to make your special day
          uniquely memorable.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">
                SOLO SINGERS FOR WEDDING: A SOULFUL SERENADE
              </h1>
              <p className="para">
                Capture the essence of romance and create lasting memories with
                our solo singers. Each performance is crafted to enhance the
                intimate moments of your wedding, making it an affair that will
                be remembered for a lifetime. Our solo singers bring a soulful
                serenade that not only resonates with your emotions but also
                elevates the overall ambiance of your special day. Let our
                talented artists turn your wedding into a melodious journey that
                speaks to the heart.
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
      <div className="container">
        <div>
          <h2 className="mt-5">
            BUDGET-FRIENDLY WEDDING SINGING OPTIONS: QUALITY ON A SHOESTRING
          </h2>
          <p className="mb-5">
            Understanding the importance of staying within budget while{" "}
            <b> planning your dream wedding,</b> Skylark Event offers
            budget-friendly singing options that prioritize quality on a
            shoestring. Dive into a range of options that cater to your unique
            preferences, promising a memorable experience without stretching
            your finances. Discover how our budget-friendly choices let you
            create a celebration that reflects your style and vision without
            compromise.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Book Singers in Delhi NCR: Bringing Melodies to the Capital</h2>
            <p>
              For those hosting events in the bustling capital and its
              surroundings, Skylark Event is your go-to destination to book
              singers in Delhi NCR. Our local artists bring a touch of regional
              flair and cultural richness to your event, ensuring a memorable
              experience for everyone in attendance. Immerse your guests in the
              diverse musical landscape of Delhi NCR as our artists curate
              performances that celebrate the unique spirit of the region.
            </p>
          </div>
          <div className="col-md-6">
            <h2>BOOK BOLLYWOOD SINGERS: A TOUCH OF GLAMOUR TO YOUR EVENT</h2>
            <p>
              Add a touch of Bollywood glamour to your event by booking our
              renowned Bollywood singers. Their mesmerizing performances and
              chart-topping hits will infuse your celebration with the magic of
              Indian cinema, creating an atmosphere of joy and excitement.
              Transport your guests to the dazzling world of Bollywood with
              performances that capture the essence of India's vibrant film
              industry, adding a touch of grandeur to your special day.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="mt-5">
              CUSTOM SONG REQUESTS FOR EVENTS: YOUR PERSONALIZED PLAYLIST
            </h2>
            <p>
              At Skylark Event, we believe in making your event uniquely yours.
              Our custom song request feature allows you to personalize your
              playlist, ensuring that every moment is accompanied by the perfect
              tune. Create memories that resonate with your unique story by
              choosing the songs that matter most to you. Our artists are
              dedicated to bringing your vision to life, crafting a musical
              experience that reflects your individuality and creates lasting
              memories for you and your guests.
            </p>
            <p>
              Your event deserves nothing but the best, and at Skylark Event, we
              are dedicated to making it extraordinary. Elevate your celebration
              with our talented singers and live bands, as we turn every note
              into a celebration. Contact us today to book a free consulting
              call and embark on a journey where every melody is a testament to
              the joy of your special moments. Create memories that last a
              lifetime with Skylark Event - where every note is a celebration!
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default Singers;
