import React from "react";
import "../Faq/Faq.css";
const Faq = () => {
  return (
    <>
      <section className="faq">
        <div className="container">
          <div className="container section-title mt-5">
            <h2 style={{ color: "white" }}>FAQ</h2>
            <p style={{ color: "white" }}>Frequently Asked Questions</p>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div data-aos="fade-right" class="accordion-item mb-3" style={{borderRadius:'10px', overflow:'hidden'}}>
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What types of events do you specialize in?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We specialize in planning and organizing a wide range of
                  events, including corporate events, conferences, exhibitions,
                  fashion shows, college events, and YouTube fan meetups. Our
                  expertise extends across various industries and event types,
                  allowing us to deliver exceptional experiences tailored to
                  your specific event requirements.
                </div>
              </div>
            </div>
            <div data-aos="fade-left" class="accordion-item mb-3" style={{borderRadius:'10px', overflow:'hidden'}}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How involved will I be in the event planning process?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We believe in collaboration and transparency, which is why we
                  value your input throughout the entire event planning process.
                  Our team will work closely with you to understand your vision,
                  goals, and preferences, ensuring that we create an event that
                  aligns with your company's values and objectives.
                </div>
              </div>
            </div>
            <div data-aos="fade-right" class="accordion-item mb-3" style={{borderRadius:'10px', overflow:'hidden'}}>
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Can you handle both small and large-scale corporate events?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Absolutely! Whether you're planning an intimate gathering for
                  a small group or a large-scale conference with hundreds of
                  attendees, our team has the expertise and resources to handle
                  events of any size. We have successfully organized events of
                  various scales, ensuring a seamless and memorable experience
                  for all participants
                </div>
              </div>
            </div>
            <div data-aos="fade-left" class="accordion-item mb-3" style={{borderRadius:'10px', overflow:'hidden'}}>
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  How do you ensure the success of corporate events?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We understand the importance of delivering successful
                  corporate events that leave a lasting impression. Our team
                  meticulously plans every aspect, from event design and
                  logistics to catering and entertainment, to ensure a flawless
                  execution. We also conduct thorough post-event evaluations to
                  gather feedback and make improvements for future events.
                </div>
              </div>
            </div>
            <div data-aos="fade-right" class="accordion-item mb-3" style={{borderRadius:'10px', overflow:'hidden'}}>
              <h2 class="accordion-header" id="flush-headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What sets your corporate event services apart from others?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Our corporate event services stand out due to our track record
                  of success and experience working with renowned brands like
                  Physics Wallah, Shobhit Nirwan, Vibrant Viva, and Allen. Our
                  proven expertise in delivering exceptional events for these
                  prominent companies sets us apart and ensures that your event
                  receives the highest level of professionalism, creativity, and
                  attention to detail.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
