import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };
  return (
    <div className="flex items-center justify-center h-[80vh] bg-white">
      <div className="bg-[#fff] p-8 rounded-xl shadow-lg text-center w-96">
        <h2 className="text-3xl font-bold text-[#8a4baf] mb-4">Login</h2>
        <form className="text-left" onSubmit={submitHandler}>
          <label htmlFor="email" className="block mb-1 text-sm text-[#333]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[92%] p-2 mb-4 border-[1px] border-solid border-[#ccc] rounded-md"
          />

          <label htmlFor="password" className="block mb-1 text-sm text-[#333]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-[92%] p-2 mb-4 border-[1px] border-solid border-[#ccc] rounded-md"
          />

          <button
            disabled={btnLoading}
            type="submit"
            className="bg-[#8a4baf] text-white px-5 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base"
          >
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="underline text-[#8a4baf]">
            Register
          </Link>
        </p>
        <p>
          <Link to="/forgot" className="underline text-[#8a4baf]">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
