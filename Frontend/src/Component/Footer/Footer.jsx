import React from "react";
import logo from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer dark-background mt-5">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-6 footer-about">
                <Link
                  to="/"
                  className="logo d-flex align-items-center me-auto me-lg-0"
                >
                  <img src={logo} style={{width:'40%'}} alt="" />
                </Link>
                <div className="footer-contact pt-3">
                  <p>Office Address : </p>
                  <p>A-83, Okhla Industrial Area Okhla Ph-II, New Delhi - 110020</p>
                  <p className="mt-3">
                    <strong>Phone : </strong>
                    <span>
                      <Link to="tel:9650050012">+91 9650050012</Link> &nbsp; <Link to="tel:9990028242">+91 9990028242</Link>
                    </span>
                  </p>
                  <p >
                    <strong>Email : </strong>
                    <span >
                      <Link to="mailto: skylarkartist1@gmail.com"> skylarkartist1@gmail.com
                      </Link> 
                      <span>&nbsp; ,</span>
                      <Link to="mailto: info@skylarkartist.com">  info@skylarkartist.com
                      </Link>
                    </span>
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <Link target="_blank" to="https://x.com/ArtistSkyl99084?t=_sm_5AtsUkTRCVYHkpKRFw&s=08">
                    <i className="bi bi-twitter-x"></i>
                  </Link>
                  <Link target="_blank" to="https://www.facebook.com/profile.php?id=61563536013509&mibextid=ZbWKwL">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link target="_blank" to="https://www.instagram.com/skylarkartistevent/">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link target="_blank" to="https://www.linkedin.com/posts/skylark-artist-a7222831a_skylark-artist-event-production-is-a-recognized-activity-7219974722250289152-aIls?utm_source=share&utm_medium=member_android">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link target="_blank" to="https://www.youtube.com/@skylarkartistandeventproductio">
                    <i className="bi bi-youtube"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/"> Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/about"> About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/gallery"> Gallery</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/our-videos">Video</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/emce-anchor">Artist Management</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/corporate-event">Events</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link to="/pre-wedding-event">Wedding</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright" style={{borderTop:'1px solid white'}}>
          <div className="container text-center">
            <div className="credits">
              Designed by
              <Link to="https://www.digiindiasolutions.com/"> Digi India Solution
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
