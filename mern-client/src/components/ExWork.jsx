import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExWork = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://port-folio-5r2r.onrender.com//projects").then((res) => {
      setProjects(res.data.slice(0, 3));
    });
  }, []);

  return (
    <div className="px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10 px-2">
  <h2 className="text-4xl font-bold text-orange-600">MY WORK</h2>
  <Link
    to="/work"
    className="bg-orange-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-orange-700 transition duration-300 shadow-md"
  >
    See All
  </Link>
</div>


      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-[#ebf4ec] rounded-[40px] p-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 flex flex-col items-center"
          >
            {/* Project Image */}
            <div className="w-full h-[400px] flex justify-center items-center mb-4">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="max-h-full max-w-full object-contain rounded-[30px]"
              />
            </div>

            {/* Project Text Box */}
            <div className="bg-[#fff7e6] w-full px-4 py-4 rounded-[30px] text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>

              {/* Live Demo Link */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-orange-600 font-medium hover:underline text-sm"
              >
                🔗 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExWork;