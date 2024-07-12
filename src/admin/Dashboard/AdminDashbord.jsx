import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <Layout>
        <div className="flex justify-center items-center flex-wrap">
          <div className="ml-10 bg-[#8a4baf] p-10 rounded-md text-center mt-1 text-white hover:bg-[#432456]">
            <p className="text-2xl">Total Courses</p>
            <p className="text-2xl">{stats.totalCoures}</p>
          </div>
          <div className="ml-10 bg-[#8a4baf] p-10 rounded-md text-center mt-1 text-white hover:bg-[#432456]">
            <p className="text-2xl">Total Lectures</p>
            <p className="text-2xl">{stats.totalLectures}</p>
          </div>
          <div className="ml-10 bg-[#8a4baf] p-10 rounded-md text-center mt-1 text-white hover:bg-[#432456]">
            <p className="text-2xl">Total Users</p>
            <p className="text-2xl">{stats.totalUsers}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashbord;
