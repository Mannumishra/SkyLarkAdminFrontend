import React, { useState } from "react";
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
     
const Anniversary = () => {
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

  const closeModal = () => {
    setShowModal(false);
  };
    
  return (
    <>
    <Helmet>
        <title>Wedding Anniversary Planners in Delhi | Skylark Event</title>
        <meta
          name="description"
          content="Skylark Event specializes in wedding anniversary planning in Delhi. From venue selection to entertainment, we provide exceptional services to make your special day memorable."
        />
        <meta name="keywords" content="Anniversary, Wedding Planning, Delhi, Skylark Event" />
      </Helmet>
      <div className="bread bg-image"      >
        <div class="overlay">
          <div className="container">
            <nav aria-label="breadcrumb">
              <h3 className="about-heading">
                Wedding Anniversary Planners in Delhi
              </h3>
              <div className="breadCrumb_names" aria-label="breadcrumb">
                <Link to="/">Home</Link> /<Link to="/">Anniversarys</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>Anniversarys</h2>
          <p>MARRIAGE WEDDING ANNIVERSARY EVENT MANAGEMENT</p>
        </div>
        <p>
          The anniversary is a day which is most awaited and exciting for
          married couples. And why it should not? After all, it is the day when
          they got. If it is your anniversary and you are planning to celebrate
          it, you must be excited about this. But with the excitement, there
          comes pressure for the organization of this special day. But do not
          worry about this, Skylark Event will give you all the solution for
          the planning and organizing of your anniversary.
        </p>
      </div>
      <div className="black-bg">
        <div className="overlay">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Anniversarys</h1>
              <p className="para">
                We have wonderful services to fill up your special day with
                perfection. We are known as one of the best wedding anniversary
                planners in Delhi, Gurgaon, Noida, Faridabad. You will get all
                the things which you want to be in your anniversary event.
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
      <div className="container p-2">
        <h2 className="text-center">DECORATION AND VENUE PLANNING</h2>
        <p>
        We are known for our best location selection and decoration services. We have connections with famous vendors by which we are capable of providing the best fabrication and setup items. We are always there to support you and you will get the best places to celebrate your special occasion.
        </p>

        <h2>ENTERTAINMENT</h2>
        <p className="mb-3">
        We have arrangements for every kind of entertainment service. You will get the best music, light, food and artist service to maintain the quality of your event. You will see lots of anniversary event organiser in Delhi, Gurgaon, Noida, Faridabad but do not go with the service which is here only to earn money. We will give you the premium event setup in an affordable budget.
        </p>
        <h2>
          <b>CULTURAL EVENTS</b>
        </h2>
        <p>
        Cultural events are the most demanded events in parties, anniversaries and marriages too. We will organize your cultural event in the required way as you want. We have services for anniversary function organizer in Delhi, Gurgaon, Noida, Faridabad. We will provide the best artist to perform every activity in your events. We also work as sangeet event planner in Delhi, Gurgaon, Noida, Faridabad.
        </p>
        <p>
        Once you hire us for your work, you just have to sit back and see all the requirements fulfilling. Skylark events always focus on customer satisfaction and we think every client also need satisfactory work from their event organizer. If you have any type of query related to anniversary planning then feel free to contact us.
        </p>
      </div>
      <Services />
      <Faq />
    </>
  );
};

export default Anniversary;
