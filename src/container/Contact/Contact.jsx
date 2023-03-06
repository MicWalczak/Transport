import React from 'react'
import './Contact.scss'
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wraper";

const Contact = () => {
  return (
   <>
   <div className="app__footer app__flex">
        <div className="app__footer-img ">
          <img src={images.footerTuuck} alt="footerTruck" />
        </div>
        <div className="app__footer-form ">
          <input placeholder="Imię i nazwisko/ Nazwa firmy" />
          <input placeholder="Email" />
          <input placeholder="Temat wiadomości" />
          <textarea placeholder="Twoje wiadomość" />
          <button type="button" className="p-text">
            Send Message
          </button>
        </div>
      </div>
   </>
  )
}
export default AppWrap(
    MotionWrap(Contact, "app__contact"),
    "contact",
    "app__whitebg"
  );
