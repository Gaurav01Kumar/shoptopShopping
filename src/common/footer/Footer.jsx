import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import mLogo from "../../assets/images/MoulikLogo.webp";
//import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer">
          <div className="rowFooter">
            <div className="col-sm-12 col-md-6 about">
              <h6>SHOPTOP</h6>
              <p className="text-justify motto descriptionFooter">
                Our aim is fast deliveries to our customers and to provide best
                quality products and services. We also aim to provide bloggers,
                photographers, artists, creators a platform to showcase their
                art and talent.
              </p>
              <img src= {mLogo} alt="Moulik Logo" className="mLogo" />
            </div>
            
            <div className="col-xs-6 col-md-3 quick">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <div class="dropdown">
                    <div class="dropbtn">Contact Us &#9660;</div>
                    <div class="dropdown-content">
                      <a href="mailto:support@shoptopshopping.com">
                        Email- support@shoptopshopping.com
                      </a>
                      <a href="tel:+7909614625">Number- +91-7909614625</a>
                      <a>
                        Address - 809, near Ashima mall, Hoshangabad road,
                        Bhopal, M.P., INDIA
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="refund">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3 AboutUs">
              <h6>ABOUT US</h6>
              <ul className="footer-links descriptionFooter">
                <li>
                Headquartered in Bhopal, The City Of Lakes. We Are Aiming To Provide Class &amp; Elegant Fashion At Budget. We Want Our  Customers To Make An Impact Through Fashion Wherever They Go. “Be The Trend Setter” Is Our tagline
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="rowSocials">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text motto">
                Copyright © 2022 All Rights Reserved by
                <a href="https://shoptopshopping.com/"> ShopTop Shopping</a>
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="https://www.facebook.com/shoptopshopping">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="https://www.instagram.com/shoptopshopping/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a className="youtube" href="https://www.youtube.com/channel/UCIYYe4UcGYm5okQRYCvHeIQ">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a className="whatsapp" href="https://wa.me/message/IIMVW2MZGOTGF1">
                    <i className="fa fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a className="pinterest" href="https://in.pinterest.com/shoptopshopping/">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
