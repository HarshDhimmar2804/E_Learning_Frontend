import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div>
      {user && (
        <div className="bg-white p-5 rounded-lg shadow-md w-[30%] my-44 mx-auto md:p-2 md:w-[80%] md:mx-auto md:my-28">
          <h2 className="text-3xl font-semibold">My Profile</h2>
          <div className="text-left mt-4">
            <p className="mb-3 text-[#333]">
              <strong className="text-[#8a4baf]">Name - {user.name}</strong>
            </p>

            <p className="mb-3 text-[#333]">
              <strong className="text-[#8a4baf]">Email - {user.email}</strong>
            </p>

            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="bg-[#8a4baf] text-white px-9 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base flex items-center justify-center gap-2"
            >
              <MdDashboard />
              Dashboard
            </button>

            <br />

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="bg-[#8a4baf] text-white px-9 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base flex items-center justify-center gap-2"
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}

            <br />

            <button
              onClick={logoutHandler}
              className="bg-red-600 text-white px-9 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-red-500 md:text-base flex items-center justify-center gap-2 "
            >
              <IoMdLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
