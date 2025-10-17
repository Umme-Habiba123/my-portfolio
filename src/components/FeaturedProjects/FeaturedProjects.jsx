import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Flexora",
    description:
      "A web-based platform that connects clients with freelancers for small tasks and projects.Users can post tasks, browse freelancer profiles, send proposals, and make secure payments.",
    image: "https://i.ibb.co.com/n8PS6FTw/f-2.webp",
    tech: ["React", "Firebase", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://inspiring-piroshki-a70fe3.netlify.app/", 
    github: "https://github.com/Umme-Habiba123/Assignment-10-client-site", 
  },
  {
    title: "LandVista",
    description:
      "A modern real estate platform that allows users to explore, buy, rent, and list properties with ease.It features advanced property search, location-based filtering, image galleries, and detailed listings for a smooth user experience.",
    image: "https://i.ibb.co.com/Cph2X1ry/savar.webp",
    tech: ["React", "Express", "MongoDB", "React Router"],
    link: "https://gilded-dolphin-31e21d.netlify.app/",
    github: "https://github.com/Umme-Habiba123/Assignment-12-land-vista-client-site",
  },
  {
    title: "SnowCraveBox",
    description:
      "A responsive e-commerce platform designed for pet lovers to browse, buy, and manage pet-related products online.The system includes product listings, shopping cart functionality, secure checkout, and user authentication.",
    image: "https://i.ibb.co.com/9JxsBWr/pic-2.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://keen-zuccutto-a95ba4.netlify.app/",
    github: "https://github.com/Umme-Habiba123/Assignment-9-SnowCraveBox",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0e0f14] text-white py-20 px-6 md:px-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="text-orange-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg mt-3">
          Check out some of my recent work and side projects
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="bg-[#14161c] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </a>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 font-semibold hover:underline"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
