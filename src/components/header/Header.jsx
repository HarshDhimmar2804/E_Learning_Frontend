import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="flex justify-between items-center p-4 relative font-semibold text-[#8a4baf] md:text-lg">
        <span className="text-2xl cursor-pointer">
          <a href="/">E-Learning</a>
        </span>
        <button
          className="md:hidden text-[#8a4baf] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:gap-4 md:items-center`}
        >
          <Link
            to="/"
            className="text-[#333] [transition:0.3s] hover:text-[#8a4baf] mt-2 md:mt-0"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-[#333] [transition:0.3s] hover:text-[#8a4baf] mt-2 md:mt-0"
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="text-[#333] [transition:0.3s] hover:text-[#8a4baf] mt-2 md:mt-0"
          >
            About
          </Link>
          {isAuth ? (
            <Link
              to="/account"
              className="text-[#333] [transition:0.3s] hover:text-[#8a4baf] mt-2 md:mt-0"
            >
              Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-[#333] [transition:0.3s] hover:text-[#8a4baf] mt-2 md:mt-0"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
