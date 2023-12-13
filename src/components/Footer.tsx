import React from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { StyledFooter } from "./styles/Footer.styled";

const Footer: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <StyledFooter>
      {location.pathname !== "/login" && (
        <div>
          <hr></hr>
          <div className="footer-sections">
            <div className="footer-elems">
              <h6>Cloud District Copyright ©</h6>
              <div className="footer-icons">
                <Link to="https://clouddistrict.com/" target="_blank">
                  <TbWorld />
                </Link>
                <Link
                  to="https://twitter.com/clouddistrict?lang=en"
                  target="_blank"
                >
                  <FaSquareXTwitter />
                </Link>
                <Link
                  to="https://www.facebook.com/clouddistrict/"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
            <div className="footer-elems">
              <h6>Evaluated Developer</h6>
              <div className="footer-icons">
                <Link to="https://danieldeweb.com/" target="_blank">
                  <TbWorld />
                </Link>
                <Link to="https://github.com/Dani-RG" target="_blank">
                  <IoLogoGithub />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/daniel-rondon-garcia-"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledFooter>
  );
};

export default Footer;
