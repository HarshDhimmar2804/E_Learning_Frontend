import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/user/reset?token=${params.token}`,
        {
          password,
        }
      );

      toast.success(data.message);
      navigate("/login");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-[80vh] bg-white">
      <div className="bg-[#fff] p-8 rounded-xl shadow-lg text-center w-96">
        <h2 className="text-3xl font-bold text-[#8a4baf] mb-4">
          Reset Password
        </h2>
        <form className="text-left" onSubmit={handleSubmit}>
          <label htmlFor="text" className="block mb-1 text-sm text-[#333]">
            Enter Password
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
            className="bg-[#8a4baf] text-white px-5 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base"
          >
            {btnLoading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
