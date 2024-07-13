import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const response = await axios.post(
        `${server}/api/course/checkout/${params.id}`,
        {},
        {
          headers: {
            token,
          },
        }
      );

      const order = response.data.order;

      if (!order || !order.id) {
        throw new Error("Order ID is not defined");
      }

      const options = {
        key: "rzp_test_iW3QbqIageT7dd", // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "E learning", // your business name
        description: "Learn with us",
        order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1

        handler: async function (response) {
          console.log("Payment Response:", response);
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
          ) {
            console.error("Razorpay response is missing fields");
            return;
          }
          try {
            const verificationResponse = await axios.post(
              `${server}/api/verification/${params.id}`,
              {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              },
              {
                headers: {
                  token,
                },
              }
            );

            const data = verificationResponse.data;

            await fetchUser();
            await fetchCourses();
            await fetchMyCourse();
            toast.success(data.message);
            navigate(`/payment-success/${razorpay_payment_id}`);
          } catch (error) {
            toast.error(error.response?.data?.message || "Verification failed");
          } finally {
            setLoading(false);
          }
        },
        theme: {
          color: "#8a4baf",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error(error.response?.data?.message || "Checkout failed");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="py-20 px-0 text-center min-h-[55vh]">
              <div className="flex items-center justify-center flex-wrap gap-5 mb-10">
                <img
                  src={`${server}/${course.image}`}
                  alt=""
                  className="w-48 h-40 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h2 className="text-2xl text-[#333]">{course.title}</h2>
                  <p className="text-sm text-[#666] my-1 mx-0">
                    Instructor: {course.createdBy}
                  </p>
                  <p className="text-sm text-[#666] my-1 mx-0">
                    Duration: {course.duration} weeks
                  </p>
                </div>
              </div>

              <p className="text-base text-[#333] text-center max-w-3xl my-0 mx-auto">
                {course.description}
              </p>

              <p className="text-base text-[#333] text-center max-w-3xl my-0 mx-auto">
                Let's get started with course At ₹{course.price}
              </p>

              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="bg-[#8a4baf] text-white px-5 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={checkoutHandler}
                  className="bg-[#8a4baf] text-white px-5 py-3 border-none rounded-md text-lg cursor-pointer [transition:background-color_.3s_ease] mt-3 hover:bg-[#5f357e] md:text-base"
                >
                  Buy Now
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;
