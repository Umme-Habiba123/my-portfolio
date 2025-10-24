import React from "react";
import { useParams } from "react-router";
import { FaLongArrowAltLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectData = {
  flexora: {
    title: "Flexora",
    image: "https://i.ibb.co.com/1GY2PtV2/Screenshot-2025-10-17-140707.png", 
    tech: ["React", "Firebase", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    description:
      "Flexora is a freelance task marketplace connecting clients and freelancers for small projects. It features task posting, profile browsing, secure payment integration, and real-time communication.",
    live: "https://inspiring-piroshki-a70fe3.netlify.app/",
    github: "https://github.com/Umme-Habiba123/Assignment-10-client-site",
    challenges:
      "Implementing real-time updates and integrating Stripe for secure payments was challenging. Managing state between client and freelancer dashboards also required optimization.",
    improvements:
      "In future, I plan to add real-time chat, rating systems, and better analytics dashboards for users.",
  },
  landvista: {
    title: "LandVista",
    image: "https://i.ibb.co.com/7JW4NZGF/Screenshot-2025-10-17-141005.png",
    tech: ["React", "Express", "MongoDB", "React Router"],
    description:
      "LandVista is a modern real estate web app allowing users to buy, rent, and list properties. It includes search filtering, dynamic property pages, and an admin panel.",
    live: "https://gilded-dolphin-31e21d.netlify.app/",
    github: "https://github.com/Umme-Habiba123/Assignment-12-land-vista-client-site",
    challenges:
      "The hardest part was implementing dynamic filtering for properties and managing data synchronization between client and backend.",
    improvements:
      "Planning to add map-based property search and user profile verification for better reliability.",
  },
  snowcravebox: {
    title: "SnowCraveBox",
    image: "https://i.ibb.co.com/HDwdS21L/Screenshot-2025-10-24-125324.png" ,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "SnowCraveBox is an online pet shop platform where users can browse and purchase pet food, accessories, and care products securely with a smooth checkout experience.",
    live: "https://keen-zuccutto-a95ba4.netlify.app/",
    github: "https://github.com/Umme-Habiba123/Assignment-9-SnowCraveBox",
    challenges:
      "Implementing a responsive cart system and authentication flow was initially complex. Managing product state across components was another challenge.",
    improvements:
      "Future plans include integrating user reviews, product recommendations, and advanced admin analytics.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project)
    return (
      <div className="text-center text-white py-20">
        <h2>Project not found.</h2>
      </div>
    );

  return (
    <section className="bg-[#0f1116] text-white py-16 px-6 md:px-10 lg:px-20 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-base md:text-lg bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-lg transition-all duration-200"
        >
          <FaLongArrowAltLeft /> Back to Projects
        </button>

        {/* Project Header */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-400">
            {project.title}
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        )}

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">
            🛠️Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">
            🔗Links
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
            >
              <FaExternalLinkAlt /> Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition"
            >
              <FaGithub /> GitHub Repository
            </a>
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">
            💡Challenges Faced
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {project.challenges}
          </p>
        </div>

        {/* Future Improvements */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">
            🚀Future Improvements
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {project.improvements}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
