import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8a5baf] text-white px-4 py-4 text-center mt-auto">
      <div className="max-w-[1200px] mx-auto">
        <p className="mt-6 text-lg">
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Harsh Dhimmar</a>
        </p>
        <div className="mt-3 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-white text-lg transition-colors duration-300 hover:text-[#f5f5f5]"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            className="text-white text-lg transition-colors duration-300 hover:text-[#f5f5f5]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-white text-lg transition-colors duration-300 hover:text-[#f5f5f5]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-white text-lg transition-colors duration-300 hover:text-[#f5f5f5]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
