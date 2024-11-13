import React, { useEffect } from "react";
import Swiper from "swiper";
import hero from "../../assets/img/singers.jpg";
import cta from "../../assets/img/cta-bg.jpg";
import { Link } from "react-router-dom";
import about from "../../assets/img/aboutimage.webp";
import video from "../../assets/img/video/artist_video.mp4";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120,
        },
      },
    });
  }, []);
  const banner = [
    {
      icon: <i className="bi bi-binoculars"></i>,
      name: "Artist & Entertainment",
    },
    { icon: <i className="bi bi-bullseye"></i>, name: "Event Technical" },
    {
      icon: <i className="bi bi-fullscreen-exit"></i>,
      name: "Gift & Merchandise",
    },
    {
      icon: <i className="bi bi-card-list"></i>,
      name: "Staging & Fabrication",
    },
    {
      icon: <i className="bi bi-gem"></i>,
      name: "Virtual Event Service Provider",
    },
  ];
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <img src={hero} alt="" data-aos="fade-in" />

        <div className="container">
          <div
            className="row justify-content-center text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-8 col-lg-10 headingcontent">
              <h2>
                Find The Best Event Artist in Just Few Clicks
                <span>.</span>
              </h2>
              <p>
                Explore Eventspedia – India’s First & Largest Event Vendor
                Directory
              </p>
            </div>
          </div>

          <div
            className="homeboxes row gy-4 mt-5 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {banner.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <p>{item.icon}</p>
                  <h3>
                    <Link to="">{item.name}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="container section-title mt-5">
            <h2>About</h2>
            <p>Skylark Artist & Event Production</p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <h5>Welcome</h5>
                <h2>Event Artist Management Company in Delhi</h2>
                <h5>
                  Skylark Artist & Event Production is a recognized and trusted
                  service currently active in every field of event organization.
                </h5>
                <p>
                  We are using the latest tools and highly professional staff to
                  finish all of your works. We have a wide range of networks in
                  this industry to give you the required results. We are one of
                  the most selected and rewarded Corporate Event Planners,
                  Wedding event Planners, organizers and best event management
                  company in Delhi NCR, India.
                </p>
                <p>
                  Skylark Artist & Event Production is having vast experience in
                  its field and know every rule to organize great events. We do
                  our works with our full commitment and hard determination. We
                  are working as an event planner and music, light, catering,
                  and decoration service provider as well. Find Skylark event as
                  best event planners, event organizers, event management
                  companies, wedding event planners in Delhi.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={about}
                style={{ borderRadius: "40px" }}
                width={"100%"}
                alt="about-Image"
              />
            </div>
            <div className="col-md-3 mt-5">
              <div>
                <video
                  autoPlay
                  muted
                  style={{ borderRadius: "20px" }}
                  src={video}
                  width="100%"
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}

      <section
        id="call-to-action"
        className="call-to-action section dark-background"
      >
        <img src={cta} alt="" />

        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Direct Contact To Whatsapp</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a
                  class="cta-btn"
                  href="https://api.whatsapp.com/send?phone=919650050012"
                >
                  Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
