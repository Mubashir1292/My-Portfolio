import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mubashir-liaqat-6a3593242/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mubashir1292" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};
export default HeaderSocials;
