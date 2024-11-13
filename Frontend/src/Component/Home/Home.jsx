import React from "react";
import Homepage from "../Homepage/Homepage";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import ArtistImages from "../ArtistImages/ArtistImages";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <>
      <Homepage />
      <ArtistImages />
      <WhatWeDo />
      <Services />
      <Testimonial />
      <Faq/>
    </>
  );
};

export default Home;
