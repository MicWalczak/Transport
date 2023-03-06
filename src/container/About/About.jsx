import React, { useState, useEffect } from "react";
import { Reviews } from '../../container'
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wraper";
import Counter from "./counter";

const About = () => {
  return (
    <>
      <div className="app__about">
        <div className="app__about-text app__flex">
          <h2>O Nas</h2>
          <p>
            Importujesz/eksportujesz towar z/do Włoch? Zachęcamy do stałej
            współpracy – transport ładunków cało-pojazdowych lub częściowych.
            Możemy przewozić ładunki do 24 ton na 38 miejscach paletowych.
          </p>
        </div>
        <div className="app__about-counters app__flex">
          <div className="app__about-counter">
            <h1><Counter number={10}/></h1>
            <p>Milionów Kilometrów</p>
          </div>
          <div className="app__about-counter">
            <h1><Counter number={120}/></h1>
            <p>Zadowolonych Klientów</p>
          </div>
          <div className="app__about-counter">
            <h1><Counter number={15}/></h1>
            <p>Lat na rynku</p>
          </div>
        </div>


        <Reviews />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "O Nas",
  "app__whitebg"
);
