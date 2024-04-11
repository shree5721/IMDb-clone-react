import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <button className="sign_btn">Sign in for more accesss</button>
        <div className="handles">
          <div className="social_media">
            <h2>Follow IMDb on social</h2>
            <div className="social_icons">
              <i class="fa-brands fa-tiktok"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="scanner">
            <div className="box1">
              <h2>Get the IMDb app</h2>
              <p>For Android and iOS</p>
            </div>
            <div className="box2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Rd82Gj6j1ebOMPr-Ml2NstEV-_dRzIAb1Q&s"
                alt="Not found"
              />
            </div>
          </div>
        </div>
        <div className="direct_links">
          <span>
            Help <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Site Index <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            IMDb Pro <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Box Office Mojo <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            License IMDb Data <i class="fa-solid fa-location-arrow"></i>
          </span>
        </div>
        <div className="direct_links">
          <span>
            Press Room <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Advetising <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Jobs <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Conditions of use <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Privacy Policy <i class="fa-solid fa-location-arrow"></i>
          </span>
          <span>
            Your Ads Privacy Choices <i class="fa-solid fa-location-arrow"></i>
          </span>
        </div>
        <div className="company_ownership">
          <p>
            an <i class="fa-brands fa-amazon"></i> company
          </p>
        </div>
        <div className="copyright">© 1990-2024 by IMDb.com, Inc.</div>
      </div>
    </>
  );
};

export default Footer;
