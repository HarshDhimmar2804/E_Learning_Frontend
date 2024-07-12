import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
    setShow(true);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };
  return (
    <div className="flex items-center justify-center h-[80vh] bg-white">
      <div className="bg-[#fff] p-8 rounded-xl shadow-lg text-center w-96">
        <h2 className="text-3xl font-bold text-[#8a4baf] mb-4">
          Verify Account
        </h2>
        <form className="text-left" onSubmit={submitHandler}>
          <label htmlFor="otp" className="block mb-1 text-sm text-[#333]">
            OTP
          </label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-[92%] p-2 mb-4 border-[1px] border-solid border-[#ccc] rounded-md"
          />
          <ReCAPTCHA
            sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          ,
          {show && (
            <button
              disabled={btnLoading}
              type="submit"
              className="bg-[#8a4baf] text-white px-5 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base"
            >
              {btnLoading ? "Please Wait..." : "Verify"}
            </button>
          )}
        </form>
        <p>
          Go to <Link to="/login">Login</Link> page
        </p>
      </div>
    </div>
  );
};

export default Verify;
