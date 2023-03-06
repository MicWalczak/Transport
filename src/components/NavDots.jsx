import React from "react";

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {["home", "about", "whyus", "contact"].map(
          (item, index) => (
            <a
              href={`#${item}`}
              key={item + index}
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: "#F4B511" } : {}}
            />
          ))}
    </div>
  );
};

export default NavDots;