import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageZoomPopup = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.api.skylarkartist.com/api/gallery"
        );
        setImages(response.data.data); // Assuming response.data is an array of images
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-5">Image Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 mb-3">
            <img
              data-aos="zoom-in"
              src={image.gallery}
              width={"100%"}
              alt={image.alt}
              className="img-thumbnail img-fluid"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={`modal fade ${showModal ? "show d-block" : ""}`}
          id="imageModal"
          tabIndex="-1"
          aria-labelledby="imageModalLabel"
          aria-hidden={!showModal}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="imageModalLabel">
                  {selectedImage.alt}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  data-aos="zoom-in"
                  src={selectedImage.gallery}
                  alt={selectedImage.alt}
                  className="img-fluid"
                  style={{ maxHeight: "80vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoomPopup;
