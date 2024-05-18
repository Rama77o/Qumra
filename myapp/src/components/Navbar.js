import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.png";
import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  // const [active, setActive] = useState('navLinks flex')
  const [count, setCount] = useState(false);
  // const showNav = () => {
  //   setActive('navLinks flex')
  //   setCount(!count)
  // }

  const [active, setActive] = useState("navLinks flexx");

  const showNav = () => {
    setActive("navLinks flexx active");
    setCount(!count);
  };

  const removeNav = () => {
    setActive("navLinks flexx");
    setCount(!count);
  };

  return (
    <div className="navBar flexx">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* <div onClick={showNav} className="togglenavBar">
        <TbGridDots className="icon" />
      </div> */}

      <div className="links">
        <ul className={active}>
          <li className="link">
            <a href="#we"> نحن</a>
          </li>
          <li className="link">
            <a href="#state">احاىياتنا</a>
          </li>
          <li className="link">
            <a href="#cards">خدماتنا</a>
          </li>
          <li className="link">
            <a href="#footer">عملاىنا</a>
          </li>
          <li className="link">
            <a href="#">أعمالنا</a>
          </li>
        </ul>
      </div>

      {count === false ? (
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      ) : (
        <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      )}

      {/* <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div> */}
    </div>
  );
};

export default Navbar;
