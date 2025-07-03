import React from "react";
import "./Footer.css";
import logo from '../assets/whitelogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="The Tavern Logo" />
          <h2>The Tavern</h2>
          <p>Coffeehouse</p>
        </div>

        <div className="footer-column">
          <h4>The Tavern Coffee House</h4>
          <a href="#">12302 Buckeye Rd</a>
          <a href="#">Cleveland, OH 44120</a>
          <a href="tel:2162917620">(216) 291-7620</a>
          <p><strong>Open Monday–Friday</strong></p>
          <p>8am–2pm</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <a href="#">Home</a>
          <a href="#">Our Story</a>
          <a href="#">Mission</a>
          <a href="#">Vision</a>
          <a href="#">Values</a>
          <a href="#">Pay It Forward</a>
        </div>

        <div className="footer-column">
          <a href="#">Order Online</a>
          <a href="#">Full Menu</a>
          <a href="#">Tavern</a>
          <a href="#">Merch</a>
          <a href="#">Host an Event</a>
          <a href="#">The Drip</a>
          <a href="#">Donate</a>
        </div>

        <div className="footer-column footer-text">
          <p>
            Once a neighborhood bar, now a nonprofit coffeehouse, The Tavern is
            where strong coffee fuels stronger careers and the strongest
            community. Join us in transforming Buckeye—one cup, one connection
            at a time.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          ©2025 The Tavern Coffee House. All Rights Reserved. Privacy Policy |
          Terms of Use | Refund Policy. Website Designed by Baruch Design & Co.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
