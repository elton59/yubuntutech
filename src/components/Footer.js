import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <div >
        <div className='Footer'>
    <div id="waterdrop"></div>

      <div className="footer-top">
        <div className="pt-exebar">

        </div>
        <div className="">
          <div className="row">
            <div className="">
              <div className="widget footer_widget">
                <h5 className="footer-title">ADDRESS</h5>
                <div className="site-navigation">
                  <div className="white"> <FaLocationArrow/> White Angle Building, AcrraRoad, Nairobi                   
                  </div>
                  <h5 className="footer-title">Contacts Us</h5>
                  <div className="white"><FaPhoneAlt/> MERU:+254 741 225424</div>
                  <div className="white"><FaPhoneAlt/> KITUI:+254 725 655602</div>
                  <div className="white"><FaPhoneAlt/>NAIROBI:+254798 307850</div>

                 
                </div>
              </div>

            </div>
         
          
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="">
          <div className="row">

            <div className="col-md-3">
              <div className="footer-site-info">2021 © Ubuntutech</div>
            </div>

            <div className="col-md-6">
              <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                  <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">Support</a></li>
                  <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">Contact Us</a></li>
                  <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">Blog</a></li>
               
                </ul>
              </nav>
            </div>

            <div className="col-md-3">
              <div id="footer-socials">
                <div className="socials inline-inside socials-colored">

                  <a href="#" target="_blank" title="Github" className="socials-item">
                  <FaGithub/>
                  </a>
                  <a href="#" target="_blank" title="Linkedin" className="socials-item">
                    <i className="fab fa-twitter twitter"></i>
                     <FaLinkedin/>
                  </a>
                  <a href="#" target="_blank" title="Facebook" className="socials-item">
                    <FaFacebook/>
                  </a>
                  <a href="#" target="_blank" title="Twitter" className="socials-item">
                  <FaTwitter/>
                  </a>
                  
                  <a href="#" target="_blank" title="Instagram" className="socials-item">
                    <FaInstagram/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
 
 

        </div>
        <div>
  
       </div>
       </div>
    );
}

export default Footer;