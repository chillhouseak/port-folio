import React, { useEffect, useState } from "react";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://port-folio-5r2r.onrender.com/projects")
      .then(res => res.json())
      .then(data => setProjects(data.reverse()))
      .catch(err => console.error("Failed to fetch projects:", err));
  }, []);

  const filterByCategory = (category) =>
    projects.filter((p) => p.category?.toLowerCase() === category.toLowerCase());

  const ProjectSection = ({ title, category }) => {
    const filtered = filterByCategory(category);
    return (
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-orange-600 mb-10 border-b-4 border-orange-300 inline-block font-sans">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filtered.map((project) => (
            <div
              key={project._id}
              className="rounded-[40px] p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500 flex flex-col items-center bg-[#f1f8f5]"
            >
              <div className="w-full h-[360px]
               flex justify-center items-center mb-4">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="max-h-full max-w-full object-contain rounded-[30px]"
              />
            </div>
              <div className="bg-white px-4 py-3 rounded-lg w-full text-center shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm  mt-1">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center w-full">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-orange-600 text-sm font-medium hover:text-orange-800 transition no-underline"
                >
                  Live Demo
                </a>
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                  {project.techStack}
                </span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-gray-500">No projects available.</p>}
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-[#f9f9f9] py-16 px-6 md:px-20 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-black">🛠 My Work</h1>
      <ProjectSection title="🎨 UI Design Projects" category="ui" />
      <ProjectSection title="💻 MERN Stack Projects" category="mern" />
      <ProjectSection title="🌐 HTML, CSS & JS Projects" category="javascript" />
    </section>
  );
};

export default Work;