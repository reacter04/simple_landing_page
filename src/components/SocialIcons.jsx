import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="http://linkedin.com">
          <FaLinkedin />
        </a>
      </li>

      <li>
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="http://instagram.com">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
