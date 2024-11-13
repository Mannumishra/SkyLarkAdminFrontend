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
     
const DanceTroup = () => {
    
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
        <title>Dance Troupe | Skylark Event</title>
        <meta name="description" content="Discover the magic of Skylark's Dance Troupe. From contemporary styles to classical ballet, our troupe delivers unforgettable performances." />
        <meta name="keywords" content="Dance Troupe, Dance Performance, Skylark Event, Contemporary Dance, Classical Ballet, Hip-Hop Dance Crew" />
        <meta property="og:title" content="Dance Troupe | Skylark Event" />
        <meta property="og:description" content="Discover the magic of Skylark's Dance Troupe. From contemporary styles to classical ballet, our troupe delivers unforgettable performances." />
        <meta property="og:image" content="URL_TO_IMAGE" /> {/* Replace with a relevant image URL */}
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Let's Turn Your Event into a Dance Extravaganza with Skylark
                  Artist!
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Dance Troup</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Dance Troup</h2>
          <p>FEEL THE RHYTHM: THE ENCHANTING WORLD OF DANCE TROUPE</p>
        </div>
        <p>
          Alright, let's break it down. Our Dance Troupe is not your average
          dance group – it's like a live dance symphony. It's more than just
          people moving; it's about creating moments that stick with your guests
          long after the event is over. Imagine your event not just as a
          gathering but as a dance-filled memory lane, and that's exactly what
          we're here to deliver.
        </p>
        <p>
          Hey there, party people! Welcome to the Skylark Artist crew, where
          we're all about adding that special dance flair to your event. If
          you're on the lookout for a Dance Troupe that can take your shindig
          from zero to hero, you've hit the jackpot. At Skylark Event, we're
          all about making memories through epic Dance Troupe performances. So,
          buckle up, and let's take a journey into the world of dance, from the
          fancy footwork of Classical Ballet to the groovy vibes of our Hip-Hop
          Dance Crew, and a whole lot more.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">
                GROOVE INTO MODERNITY: OUR CONTEMPORARY DANCE TROUPE
              </h1>
              <p className="para">
                Now, let's dive into the magic of our Contemporary Dance Troupe.
                It's not your grandma's ballet; it's a fusion of tradition and
                modern groove. Our dancers bring a fresh, modern vibe to the
                stage that's guaranteed to keep your crowd hooked from the first
                beat to the last move. It's not just dance; it's a visual feast
                of movement and style.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-2">
        <div className="row">
          <div className="col-md-6">
            <h2>Timeless Elegance: The Classical Ballet Troupe</h2>
            <p>
              Picture this: dancers gliding across the stage with timeless
              elegance. That's our <b> Classical Ballet Troupe</b> in action.
              These performers put in the work, day in and day out, to give you
              a performance that's more than just dance – it's a journey through
              the ages. It's not about showing off; it's about creating an
              experience that resonates.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Urban Beats Explosion: Meet Our Hip-Hop Dance Crew</h2>
            <p>
              Brace yourself for the explosion of energy that is our{" "}
              <b> Hip-Hop Dance Crew.</b> They bring the beats of the city to
              your event, turning up the energy like no other. It's not just
              about watching; it's about feeling the rhythm, moving with the
              crew, and creating an atmosphere that's impossible to resist. Get
              ready to witness an urban dance party like never before.
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
            Skylark SPECTACLE: THE ANNUAL DANCE TROUPE SHOWCASE
          </h2>
          <p className="mb-5">
            Hold onto your seats for the highlight of the year – our Annual{" "}
            <b> Dance Troupe Showcase.</b> This is the big shebang, where we
            bring together the best moves, the most incredible routines, and an
            overall spectacle that's hard to beat. It's not just a show; it's an
            experience, a journey through the diverse world of dance that will
            leave your audience in awe.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Local Flavor: Community-Centric Dance Troupe Performances</h2>
            <p>
              Let's talk local! Our <b> Local Dance Troupe Performances</b> are
              where community vibes meet artistic expression. We don't just
              perform; we connect. Each show is tailor-made to resonate with the
              local crowd, creating a celebration that feels like a neighborhood
              block party – full of fun, joy, and shared moments.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Dress to Impress: Unveiling Our Unique Dance Troupe Attire</h2>
            <p>
              Now, let's talk fashion. Our Unique <b> Dance Troupe</b> Attire
              isn't your run-of-the-mill dance gear. It's a statement. Each
              outfit is a work of art, carefully designed to complement the
              artistic flair of our performances. We're not just dancing; we're
              making a visual impact, and our attire plays a crucial role in
              that.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="mt-5">
              YOUR STYLE, YOUR WAY: CUSTOMIZABLE DANCE TROUPE OUTFITS
            </h2>
            <p>
              At Skylark Event, we get it – one size doesn't fit all. That's
              where our Customizable Dance Troupe Outfits come into play. Think
              of it as having your own personal stylist for the event. You get
              to call the shots, ensuring that our dancers not only move
              flawlessly but also blend seamlessly with the theme and ambiance
              of your event.
            </p>
            <p>
              In the vast realm of dance and event planning, Skylark Artist
              emerges as your go-to crew for turning ordinary events into
              jaw-dropping spectacles. We're not just here to perform; we're
              here to create memories that last a lifetime. Ready to take your
              event to the next level? Let's chat about your vision, and
              together, we'll make it happen. Hit us up for a free consulting
              call – let's get this party started!
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default DanceTroup;
