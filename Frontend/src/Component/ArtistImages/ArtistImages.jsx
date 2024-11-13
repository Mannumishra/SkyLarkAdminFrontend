import React, { useEffect, useState } from "react";
import "../ArtistImages/Artist.css";
import axios from "axios";
const ArtistImages = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.api.skylarkartist.com/api/artist"
        );
        setArtists(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>Categories</h2>
        <p>Popular Categories To Explore</p>
      </div>
      <div className="container">
        <div className="row">
          {artists.map((item, index) => (
            <div className="col-md-3 col-sm-3">
              <figure class="snip">
                <img
                  width={"100%"}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  class="snip__image imageGallery"
                  src={item.image}
                  alt="card"
                />
                <figcaption class="snip__figcaption">
                  <h3 class="snip__title">{item.name}</h3>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistImages;
