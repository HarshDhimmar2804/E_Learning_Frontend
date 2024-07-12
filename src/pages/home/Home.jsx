import React from "react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#f5f5f5] px-24 py-0 pt-5 text-center">
        <div className="max-w-[800px] mx-auto my-auto">
          <h1 className="text-4xl mb-5 md:text-2xl mt-28 font-bold">
            Welcome to our E-learning Platform
          </h1>
          <p className="text-lg text-[#666] mb-10 md:text-base">
            Learn, Grow, Excel
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-[#8a4baf] text-white px-6 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 mb-20 hover:bg-[#5f357e] md:text-base"
          >
            Get Started
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
