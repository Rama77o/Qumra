import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaSnapchatSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import whats from "./images/whatsApp.png";

const Footer = () => {
  return (
    <div className=" countainer footer">
      <h1>تواصل معنا</h1>
      <div className="icons">
        <a href="#">
          <FaFacebookSquare className="icon" />
        </a>
        <a href="#">
          <FaInstagramSquare className="icon" />
        </a>
        <a href="#">
          <FaTwitterSquare className="icon" />
        </a>
        <a href="#">
          <FaSnapchatSquare className="icon" />
        </a>
        <a href="#">
          <MdEmail className="icon" />
        </a>
        <a href="#">
          <FaWhatsappSquare className="icon" />
        </a>
      </div>
      <a href="#">
        <div className="whats">
          <img src={whats} alt="whats" />
        </div>
      </a>
    </div>
  );
};

export default Footer;
