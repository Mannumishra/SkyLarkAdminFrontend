import axios from "axios";
import React, { useEffect, useState } from "react";

const Video = () => {
  const [video, setvideo] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.api.skylarkartist.com/api/video"
        );
        setvideo(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-5">Our Media</h2>

        {/* <div className="row">
          {video.map((item, index) => (
            <div className="col-md-3">
              <div key={index} className="video-item">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ))}
        </div> */}
        <div className="row">
  {video.map((item, index) => (
    <div className="col-md-3" key={index}>
      <div className="video-item">
        <iframe
          width="100%"
          height="100%"
          src={item.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen // Correct way to set allowFullScreen
        ></iframe>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default Video;
