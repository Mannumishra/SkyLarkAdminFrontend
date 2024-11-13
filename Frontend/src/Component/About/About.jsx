import React, { useEffect } from "react";
import "../About/about.css";
import { Link } from "react-router-dom";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import { Helmet } from "react-helmet";
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>About Us - Skylark Artist & Event Production</title>
        <meta
          name="description"
          content="Learn more about Skylark Artist & Event Production, a leading event management company in India, known for organizing exceptional events and weddings."
        />
      </Helmet>
      <div>
        <div className="bread bg-image">
          <div class="overlay">
            <div className="container">
              <nav aria-label="breadcrumb">
                <h3 className="about-heading">About Us</h3>
                <div className="breadCrumb_names" aria-label="breadcrumb">
                  <Link to="/">Home</Link> /<Link to="/">About</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="container about-content">
        <h1 className="content-heading mb-5">
          <b> Skylark Artist & Event Prodution </b> is a recognized and trusted
          Event Management Company,actively working in every field of event
          organization.
        </h1>

        <p className="mb-4">
          Skylark is a team of powerful flappers, who stumped upon the events to
          make event planning simply amazing. Their love for putting life, in
          any event, reflects in their professional expertise. Together we have
          become the most trusted and top event & wedding planners in India.
          Millions of people outreach us because of the trust we have garnered
          throughout the years of hard work and creative thoughts.
        </p>
        <p className="mb-4">
          It’s more than an event for us when we see those teary eyes with
          smiling faces, it makes us proud of our work. Just, to see that smile,
          we put a little extra effort into our work by consulting, discussing
          and advising a tailored made plan to our clients’ intricate needs.
        </p>
        <p className="mb-4">
          Our team has certain divisions to simplify event planning. We are a
          strong believer of transparency and, therefore, there is no middleman
          to barge upon.
        </p>
        <p className="mb-4">
          We understand the delicacy of the wedding time. Thus, we ensure
          professionalism in every minute details. From venue selection to
          makeup artist or choosing any destination of your choice for a
          destination wedding, there is nothing which we cannot do.
        </p>
        <p className="mb-4">
          As top wedding planners in Delhi NCR, it is our responsibility to put
          zeal in any event. Therefore, we establish a lively environment around
          our audience and guests. All team members are so enthusiastic that
          they won’t fumble to execute even a small-sized event. Eventually, we
          are loved by our clients for our dedication and honest suggestions.
        </p>
        <p className="mb-4">
          Being an old player in the field of top event management companies;
          our expertise makes us a well-recognized leader. This quality comes
          from an approach to consistently re-invent and re-innovate each event,
          making it unique and special in its own.
        </p>
        <p className="mb-4">
          Our comprehensive approach and in-depth knowledge of local markets and
          vendors, to produce block-busters events and give value for money to
          the client.
        </p>
        <p className="mb-4">
          Now that we have successfully covered pan India as best event
          organizers and top wedding planners in India, we have now started
          marking our presence across globally. Yes, that’s right! Couples who
          look for a customized plan for their dream wedding or who want best
          event planners have started recognizing us abroad as well.
        </p>
        <p>
          You will get quality service at affordable prices. Find Skylark event
          as best event planners, event organizers, event management companies,
          wedding event planners in Delhi NCR, Noida, Gurgaon, Faridabad.
        </p>
      </section>

      <WhatWeDo />
    </>
  );
};

export default About;
