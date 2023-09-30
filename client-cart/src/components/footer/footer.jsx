import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
              urna quis erat vulputate hendrerit.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2023 Your E-Commerce Store | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
