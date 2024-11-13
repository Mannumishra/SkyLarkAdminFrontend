import React, { useEffect, useState } from "react";
import "../Contact/Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  const [send, setSend] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e8846f7d-9be2-460b-a4b9-63e5af051512");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res.message);
      setSend(true);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="contact-info">
                <h3 class="title">Let's get in touch</h3>
                <p class="text">
                  If you have question or would like more information on our
                  works, Please complete the form and we'll aim get back to you
                  with in 24 hours.
                </p>

                <div class="info">
                  <div class="information">
                    <i class="bi bi-map-fill"></i>

                    <p>A-83, Okhla Industrial Area Ph-II, New Delhi</p>
                  </div>
                  <div class="information">
                    <i class="bi bi-envelope"></i>
                    <p>
                      <Link
                        style={{ color: "#555" }}
                        to={"mailto:skylarkartist1@gmail.com"}
                      >
                        skylarkartist1@gmail.com
                      </Link>
                    </p>
                  </div>
                  <div class="information">
                    <i class="bi bi-phone"></i>
                    <p>9650050012, 9990028242</p>
                  </div>
                </div>

                <div class="social-media">
                  <p>Connect with us :</p>
                  <div class="social-icons">
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/profile.php?id=61563536013509&mibextid=ZbWKwL"
                    >
                      <i class="bi bi-facebook"></i>
                    </Link>
                    <Link target="_blank" to="https://x.com/@ArtistSkyl99084">
                      <i class="bi bi-twitter"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/skylarkartistevent/"
                    >
                      <i class="bi bi-instagram"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/in/skylark-artist-a7222831a/"
                    >
                      <i class="bi bi-linkedin"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.youtube.com/@skylarkartistandeventproductio"
                    >
                      <i class="bi bi-youtube"></i>
                    </Link>
                    <Link
                      target="_blank"
                      to="https://wa.me/message/YWGZHAJ6YVYTM1"
                    >
                      <i class="bi bi-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form">
                <div class="contact-form">
                  <form action="" onSubmit={onSubmit} autocomplete="off">
                    <h3 class="title">Contact us</h3>
                    <div class="input-container">
                      <input type="text" name="name" placeholder="User Name" id="name" class="input" />
                    </div>
                    <div class="input-container">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="input"
                        placeholder="Email"
                      />
                      <span>Email</span>
                    </div>
                    <div class="input-container">
                      <input placeholder="phone" type="tel" name="phone" id="phone" class="input" />
                      
                      <span>Phone</span>
                    </div>
                    <div class="input-container textarea">
                      <textarea
                        name="message"
                        id="message"
                        class="input"
                        placeholder="Message"
                      ></textarea>
                      <span>Message</span>
                    </div>
                    <input type="submit" value="Send" class="btn" />

                    {send ? (
                      <>
                        <div class="alert alert-success mt-2 text-center" role="alert">
                          Email sent successfully!
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
