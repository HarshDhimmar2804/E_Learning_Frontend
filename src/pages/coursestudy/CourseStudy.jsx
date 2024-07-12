import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="py-12 px-0 bg-[#f5f5f5] flex flex-col items-center min-h-[80vh]">
          <img src={`${server}/${course.image}`} alt="" width={350} />
          <h2 className="text-2xl text-[#8a4baf] items-center">
            {course.title}
          </h2>
          <h4 className="text-xl text-[#8a4baf] items-center">
            {course.description}
          </h4>
          <h5 className="text-xl text-[#8a4baf] items-center">
            by - {course.createdBy}
          </h5>
          <h5 className="text-xl text-[#8a4baf] items-center">
            Duration - {course.duration} weeks
          </h5>
          <Link
            to={`/lectures/${course._id}`}
            className="bg-white py-1 px-2 border-[1px] border-[solid] border-black rounded-md"
          >
            <h2 className="text-2xl text-[#8a4baf] items-center">Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
