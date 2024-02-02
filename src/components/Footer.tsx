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

          <div className="footer-elems">
            <h6>Developer:</h6>
            <div className="footer-icons">
              <Link to="https://danieldeweb.com/" target="_blank">
                <TbWorld className="social-icon" />
              </Link>
              <Link to="https://github.com/Dani-RG" target="_blank">
                <IoLogoGithub className="social-icon" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/daniel-rondon-garcia-"
                target="_blank"
              >
                <FaLinkedinIn className="social-icon" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </StyledFooter>
  );
};

export default Footer;
