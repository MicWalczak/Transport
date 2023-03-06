import React, { useState, useEffect } from "react";
import "./Header.scss";
import { AppWrap, MotionWrap } from "../../wraper";
import { images } from "../../constants";

const Header = () => {
  const [abouts, setAbouts] = useState([]);

  return (
    <>
      <div className="app__head app__flex">
        <div className="app__head-text">
          <h1>Łączymy Twoją Firmę z Światem:</h1>
          <p>Zoptymalizowane Rozwiązania Logistyczne</p>
          <div className="app__head-number">
            <h4>Contact Us</h4>
            <p>+48 000 000 000</p>
          </div>
        </div>
        <div className="app__head-img">
          <img src={images.headTruck} alt="headtrack" />
        </div>
      </div>
    </>
  );
};
export default AppWrap(Header, "home");
