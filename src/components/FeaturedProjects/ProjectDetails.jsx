import React from "react";
import { useParams } from "react-router";
import { FaLongArrowAltLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const projectData = {
  flexora: {
    title: "Flexora",
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
    <section className="bg-[#0f1116] text-white py-20 px-6 md:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => window.history.back()}
          className="flex gap-3 items-center text-lg bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-all duration-200"
        >
         <FaLongArrowAltLeft />

          Back to Projects
        </button>

        <h2 className="text-4xl font-bold mt-6">
          {project.title}
        </h2>

        <p className="text-gray-400 text-base">{project.description}</p>

        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-orange-400">
            🛠️ Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-3">
            {project.tech.map((item, i) => (
              <li
                key={i}
                className="bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-orange-400">
            🔗 Links
          </h3>
          <div className="flex flex-wrap gap-5">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-400 hover:underline"
            >
              <FaExternalLinkAlt /> Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all"
            >
              <FaGithub /> GitHub Repository
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-orange-400">
            💡 Challenges Faced
          </h3>
          <p className="text-gray-400">{project.challenges}</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
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
    <FaGithub /> GitHub (Client)
  </a>
</div>


        <div>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-orange-400">
            🚀 Future Improvements
          </h3>
          <p className="text-gray-400">{project.improvements}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
