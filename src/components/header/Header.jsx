import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-white shadow-lg relative font-semibold text-[#8a4baf] md:text-lg">
        <span className="text-2xl cursor-pointer">
          <a href="/">E-Learning</a>
        </span>
        <div className="flex gap-8 md:gap-4">
          <Link
            to={"/"}
            className="text-[#333] [transition:0.3s] hover:text-[#8a4baf]"
          >
            Home
          </Link>
          <Link
            to={"/courses"}
            className="text-[#333] [transition:0.3s] hover:text-[#8a4baf]"
          >
            Courses
          </Link>
          <Link
            to={"/about"}
            className="text-[#333] [transition:0.3s] hover:text-[#8a4baf]"
          >
            About
          </Link>
          {isAuth ? (
            <Link
              to={"/account"}
              className="text-[#333] [transition:0.3s] hover:text-[#8a4baf]"
            >
              Account
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="text-[#333] [transition:0.3s] hover:text-[#8a4baf]"
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
