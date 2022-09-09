import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  SocialMediaWrap,
  SocialIconLink2,
  SocialIcons,
  SocialIconLink,
  Img,
} from "./Footer.elements";

import Turkey from "../images/turkey.svg";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterContainer className={theme}>
      <SocialIcons>
        <SocialIconLink2
          href="https://reactjs.org/"
          target="_blank"
          aria-label="React"
        >
          <Img src={Turkey} />
        </SocialIconLink2>

        <SocialIconLink
          href="https://www.linkedin.com/in/enes-g%C3%BCng%C3%B6r-658895205/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIconLink>

        <SocialIconLink
          href="https://github.com/CodderEnesG"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIconLink>
      </SocialIcons>

      <SocialMediaWrap></SocialMediaWrap>
    </FooterContainer>
  );
}

export default Footer;
