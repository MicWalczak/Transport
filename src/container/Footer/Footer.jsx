import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import "./Footer.scss";
import images from "../../constants/images";

const Footer = () => {
  return (
    <>
      <div className="app__footer-footer app__flex">
        <img src={images.logo} alt="logo" />
        <div className="app__footer-ikons">
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
        <p>Copyrights © 2023</p>
      </div>
    </>
  );
};
export default Footer

