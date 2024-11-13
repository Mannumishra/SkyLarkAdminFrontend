import React, { useEffect } from "react";
import "../AllDetailPage/AllDetailPage.css";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import Faq from "../Faq/Faq";
const AllDetailPage = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
  return (
    <>
      <div>
        <div >
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
      <Services/>
      <Faq/>
    </>
  );
};

export default AllDetailPage;
