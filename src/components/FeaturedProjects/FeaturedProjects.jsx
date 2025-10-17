import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const projects = [
  {
    id: "flexora",
    title: "Flexora",
    image: "https://i.ibb.co.com/n8PS6FTw/f-2.webp",
    description:
      "A freelance task marketplace connecting clients and freelancers for small projects. Users can post tasks, browse freelancer profiles, send proposals, and make secure payments.",
  },
  {
    id: "landvista",
    title: "LandVista",
    image: "https://i.ibb.co.com/Cph2X1ry/savar.webp",
    description:
      "A modern real estate platform where users can explore, buy, rent, and list properties with ease. It includes advanced property search and detailed listings.",
  },
  {
    id: "snowcravebox",
    title: "SnowCraveBox",
    image: "https://i.ibb.co.com/9JxsBWr/pic-2.jpg",
    description:
      "A responsive e-commerce platform for pet lovers to browse, buy, and manage pet-related products online with secure checkout and authentication.",
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
    <section id="projects" className="bg-[#0f1116] text-white py-20 px-6 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="text-orange-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg mt-3">
          Explore some of my favorite works built with modern web technologies.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="bg-[#14161c] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <Link
                to={`/projects/${project.id}`}
                className="flex items-center gap-2 justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-all"
              >
                <Info size={16} />
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
