import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div>
          <h2>&copy;CanadaCustomBlinds</h2>
        </div>
        <div>
          <p>Name: Client Name</p>
          <p>Title: Client Title</p>
          <p>Phone: Client Phone</p>
          <p>Email: Client Email</p>
          <p>Office: Client Office</p>
        </div>
      </div>
      <Link to="/about">
        <div className="footer-about">
          <h2>About Us</h2>
        </div>
      </Link>
      <a href="#">
        <div>
          <img src="https://img.icons8.com/ios/80/000000/send-letter--v1.png" />
        </div>
      </a>
    </div>
  );
}

export default Footer;
