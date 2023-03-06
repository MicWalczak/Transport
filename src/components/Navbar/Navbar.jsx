import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[["Strona główna","home"], ["O Nas","about"], ["Dlaczego My?","whyus"], ["Kontakt","contact"]].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item[1]}`}>{item[0]}</a>
            {console.log({item})}
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{
              x: [300, 0],
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
            {[["Strona główna","home"], ["O Nas","about"], ["Dlaczego My?","whyus"], ["Kontakt","contact"]].map((item) => (
              <li key={{item}}>
                <a href={`#${item[1]}`} onClick={() => setToggle(false)}>{item[0]}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
