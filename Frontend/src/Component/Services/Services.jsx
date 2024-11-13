import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { title: "Emcee/Anchor", path: "/emce-anchor" },
    { title: "Drum Circle", path: "/drum-circle" },
    { title: "Live Band", path: "/live-band" },
    { title: "Bollywood Celebrity", path: "/bollywood-celebrity" },
    { title: "Dance Troup", path: "/dance-troup" },
    { title: "Choreographer", path: "/choreographer" },
    { title: "Musical Instrument Players", path: "/musical-instrument" },
    { title: "Corporate Events", path: "/dj-artist" },
    { title: "Fashion Show", path: "/fashion-show" },
    { title: "Conferences", path: "/conferences" },
    { title: "College Events", path: "/collage-events" },
  ];

  return (
    <>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="container">
            <div className="row gy-4">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <Link to={item.path} className="stretched-link">
                                <h3>{item.title}</h3>
                            </Link>
                            <p>
                                Provident nihil minus qui consequatur non omnis maiores. Eos
                                accusantium minus dolores iure perferendis tempore et
                                consequatur.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Services;
