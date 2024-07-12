import React from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="py-20 px-0 text-center min-h-[60vh]">
      <h2 className="text-3xl font-semibold text-[#8a4baf] mb-5">
        Available Courses
      </h2>

      <div className="flex flex-wrap justify-center gap-7">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
