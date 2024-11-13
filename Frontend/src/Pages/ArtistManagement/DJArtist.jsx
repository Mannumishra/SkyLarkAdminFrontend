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
     
const DJArtist = () => {
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
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
  const closeModal = () => {
    setShowModal(false);
  };
    
  return (
    <>
    <Helmet>
        <title>DJ Artist - Skylark Artist</title>
        <meta name="description" content="Amp up the fun with Skylark Artist - Your ultimate DJ partner in Delhi NCR. We offer DJ services for all types of events, from weddings to corporate gatherings." />
        <meta name="keywords" content="DJ Artist, DJ Services, Delhi DJ, Wedding DJ, Corporate DJ, Bollywood DJ, DJ Gear Rental, DJ Lighting" />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">
                  Amp Up the Fun with Skylark Artist - Your Ultimate DJ Partner
                  in Delhi NCR
                </h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">Dj Artist</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2> Dj Artist</h2>
          <p>DJ ARTIST - CRAFTERS OF GOOD VIBES</p>
        </div>
        <p>
          Ever been to a party where the music just clicks, and everyone's on
          the same wavelength? That's the magic we bring at Skylark Artist.
          We're like the architects of good vibes, weaving a musical tapestry
          that makes your event stand out. Our DJs aren't just about playing
          songs; they're about creating an atmosphere where everyone can't help
          but tap their feet and have a good time. It's not just about the
          beats; it's about making memories that linger long after the event is
          over.
        </p>
        <p>
          Ready to take your event from ordinary to extraordinary? Well, look no
          further because Skylark Artist is here to sprinkle some musical magic
          on your gatherings. We're not just your average DJs; we're your
          partners in creating unforgettable moments. So, let's dive in and see
          how we can turn your event into the talk of the town!
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">DELHI'S GO-TO DJ CREW</h1>
              <p className="para">
                If you're on the lookout for the coolest DJ crew in Delhi, guess
                what? You've just found us! Skylark Artist is more than just a
                bunch of DJs – we're the heartbeat of the party scene in Delhi.
                Our reputation as the go-to DJ crew isn't just about the music;
                it's about the vibe we bring to every event. We know how to turn
                an ordinary gathering into an extraordinary experience, leaving
                your guests raving about the fantastic time they had.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-2">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>Elevate Your Work Events</h2>
            <p>
              Work events don't have to be all about serious faces and
              formalities. Why not sprinkle a bit of fun into the mix? At
              Skylark Artist, we understand that a touch of music can transform
              your work gatherings. Our DJs bring a perfect blend of
              professionalism and fun, making your corporate events lively and
              memorable. We know when to keep it classy and when to let loose,
              ensuring your work event is talked about for all the right
              reasons.
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <h2>Lovey-Dovey Beats for Weddings</h2>
            <p>
              Weddings are all about love, and what better way to celebrate it
              than with some lovey-dovey beats? Our wedding DJ services in Delhi
              are crafted to add that special touch to your big day. From the
              moment you say "I do" to the last dance, our DJs curate a
              soundtrack that mirrors the emotions of your love story. It's not
              just about playing music; it's about creating an enchanting
              atmosphere that complements the romance in the air.
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
          <h2 className="mt-5">BOLLYWOOD BEATS BONANZA</h2>
          <p className="mb-5">
            Get ready to dance like nobody's watching because when it comes to
            Bollywood beats, we've got the perfect recipe for a dance bonanza!
            Our <b> Bollywood DJ in Delhi</b> knows how to bring the energy and
            excitement of Bollywood to your event. We're not just about playing
            the hits; we're about creating an atmosphere where everyone, from
            grandma to the little ones, can groove to the tunes. Let's make your
            event a blockbuster with a Bollywood beats bonanza!
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Sound that Rocks - DJ Gear Rental</h2>
            <p>
              What's a party without good sound? At Skylark Artist, we take
              sound seriously. Our DJ gear rental services in Delhi ensure that
              your event rocks, literally! We offer top-notch equipment that
              guarantees crystal-clear sound, making sure every beat is heard
              and felt. No more worrying about subpar audio – let us take care
              of the sound, so you can focus on having a great time at your
              event.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Club Vibes, Anywhere</h2>
            <p>
              Missing the thumping beats and neon lights of the club scene? Fret
              not; we'll bring the club to you! Our Delhi Nightclub DJ services
              are designed to turn any space into a party zone. Whether it's a
              birthday bash, a wedding after-party, or just a weekend
              get-together, we've got the vibes that will transport you straight
              to the club. Neon lights, thumping beats – let's recreate the
              nightclub vibes wherever you want!
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="mt-5">Your Personal DJ for Private Bashes</h2>
            <p>
              Planning a private bash? We get it; you want it to be epic. That's
              where our personal DJ services come in. At Skylark Artist, we
              understand that private celebrations deserve a personal touch. Our
              DJs work with you to curate a playlist that reflects your style
              and preferences. Whether it's a milestone birthday, an
              anniversary, or just a get-together with close friends, we'll make
              sure your private bash is nothing short of legendary.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Pros at Crafting Memorable Moments</h2>
            <p>
              We're not just DJs; we're memory-makers. Our professional event
              DJs in Delhi bring a wealth of experience and expertise to the
              table, ensuring that every moment becomes a cherished memory. From
              the grand entrance to the final dance, our DJs know how to set the
              right tone for each part of your event. We're not just there to
              play music; we're there to enhance the overall experience, making
              sure your guests leave with smiles on their faces.
            </p>
          </div>
          <div className="col-md-12">
            <h2>TAILORED TUNES FOR YOUR BIG DAY</h2>
            <p>
              Your wedding day is a big deal, and so is the music. That's why we
              offer bespoke <b> Delhi wedding DJ packages</b> that are
              tailor-made for your special day. We understand that every wedding
              is unique, and our packages are designed to add that extra musical
              touch to every moment of your celebration. From the ceremony to
              the reception, we've got the tunes covered, ensuring your wedding
              day is nothing short of magical.
            </p>
          </div>
          <div className="col-md-6">
            <h2>No Surprises, Just Great Entertainment</h2>
            <p>
              Worried about hidden costs putting a damper on your event
              planning? Fret not; at Skylark Artist, we believe in
              transparency. Our pricing is straightforward, with no hidden
              surprises. We understand that quality entertainment shouldn't
              break the bank, and we strive to offer exceptional value for your
              investment. With us, what you see is what you get – great
              entertainment without any unexpected expenses.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Party Like It's Your Birthday</h2>
            <p>
              Birthdays are meant to be special, right? We wholeheartedly agree,
              and that's why our DJ for a birthday party in Delhi is just what
              you need to make your celebration unforgettable. Whether you're
              throwing a big bash or an intimate gathering, our DJs know how to
              read the room and play the tunes that will have everyone on their
              feet. Let's make your birthday bash the talk of the town!
            </p>
          </div>
          <div className="col-md-6">
            <h2>Top-Notch DJ Gear, No Fuss</h2>
            <p>
              Behind every awesome DJ is top-notch gear, and we've got the best
              in the business. Need DJ equipment in Delhi for your event? No
              worries – we've got you covered. Our state-of-the-art gear ensures
              that your event sounds amazing without any fuss. From speakers to
              mixers, we've got the tools to make your event a sonic sensation.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Light Up Your Event with Our DJ Lighting</h2>
            <p>
              Let's not forget the lights! Our{" "}
              <b> DJ lighting services in Delhi </b>add that extra oomph to your
              event. Whether you're going for a neon-filled dance party, a
              disco-themed extravaganza, or just chill vibes, we've got the
              lighting to match your style. Lights aren't just for visibility;
              they're for creating an atmosphere that complements the beats and
              melodies, making your event an unforgettable sensory experience.
            </p>
            <div className="col-md-12">
              <h2>LET'S CONNECT</h2>
              <p>
                So, there you have it – a sneak peek into how Skylark Artist
                can turn your event into a musical marvel. We're not just about
                playing tunes; we're about creating an atmosphere where every
                beat feels just right. From crafting good vibes to bringing the
                club to you, we've got your musical needs covered.
              </p>
              <p>
                If you're ready to take your event to the next level, why not
                give us a shout? We're just a call away, ready to chat about how
                we can make your event the talk of the town. Let's plan an event
                that's not just ordinary but extraordinary – where memories are
                made, and good times are had by all.
              </p>
              <p>
                So, what are you waiting for? Dial us up for a free
                consultation, and let's turn your event into a musical
                masterpiece! After all, at Skylark Artist, we're not just DJs;
                we're your partners in creating moments that last a lifetime.
                Cheers to making your event the best one yet!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default DJArtist;
