import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../../assets/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../../assets/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../../assets/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../../assets/img/testimonials/testimonials-4.jpg";
import testimonialbg from '../../assets/img/testimonials-bg.jpg'
import '../Testimonial/Testimonial.css'
const Testimonial = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <div className="swiper-button-next slide-btns" />,
    prevArrow: <div className="swiper-button-prev slide-btns" />,
  };

  return (
    <section className="creative-testimonial--slider ">
      <div className="container">
        <div data-aos="zoom-in"
          className="testimonial-inner"
          style={{
            backgroundImage:
              "url(https://imgpanda.com/upload/ib/2Tgg58L106.png)",
          }}
        >
          <div className="testimonial-row">
            <h2 className="testimonial-heading">
            "What Our Clients Are Saying"
            </h2>
            <p className="text-center">Ready to join our list of success stories? Contact us today and let us help bring your vision to life!</p>
            <div className="testimonial-wrap">
              <Slider {...settings}>
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="swiper-slide--inner">
                    <div className="slide-avatar">
                      <img
                        src="https://imgpanda.com/upload/ib/3T9Coa4eFQ.png"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-detail">
                      <img
                        src="https://imgpanda.com/upload/ib/07fXcY3EIH.png"
                        alt="Company Logo"
                      />
                      <p>
                        Their team are easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks guys
                        for all your hard work. Trust us we looked for a very
                        long time.
                      </p>
                      <span>Herman miller, Monday</span>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="swiper-slide--inner">
                    <div className="slide-avatar">
                      <img
                        src="https://imgpanda.com/upload/ib/EG2hj3Ch4z.png"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-detail">
                      <img
                        src="https://imgpanda.com/upload/ib/VUrKtb4s8h.png"
                        alt="Company Logo"
                      />
                      <p>
                        Their team are easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks guys
                        for all your hard work. Trust us we looked for a very
                        long time.
                      </p>
                      <span>Matthew taylor, invision</span>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className="swiper-slide--inner">
                    <div className="slide-avatar">
                      <img
                        src="https://imgpanda.com/upload/ib/CEnecSuafy.png"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-detail">
                      <img
                        src="https://imgpanda.com/upload/ib/qisrv7T2JJ.png"
                        alt="Company Logo"
                      />
                      <p>
                        Their team are easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks guys
                        for all your hard work. Trust us we looked for a very
                        long time.
                      </p>
                      <span>Leonel mooney, Logitech</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
