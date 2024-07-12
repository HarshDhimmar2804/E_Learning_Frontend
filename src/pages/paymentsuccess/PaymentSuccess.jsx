import React from "react";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = ({ user }) => {
  const params = useParams();
  return (
    <div className="flex items-center justify-center h-[75vh] bg-[#f5f5f5]">
      {user && (
        <div className="bg-white p-8 rounded-xl shadow-md text-center w-72">
          <h2 className="text-2xl text-[#8a4baf] mb-4">Payment successful</h2>
          <p className="text-base text-[#8a4baf] mb-5">
            Your course subscription has been activated
          </p>
          <p className="text-base text-[#8a4baf] mb-5">
            Reference no - {params.id}
          </p>
          <Link
            to={`/${user._id}/dashboard`}
            className="bg-[#8a4baf] text-white px-5 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
