import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceEducation() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-[#0f1116] text-gray-200 py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Experience <span className="text-orange-500">& Education</span>
        </h2>
        <p className="text-gray-400 mt-3">
          My professional journey and academic background
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {/* Front-End Developer */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#1a1d25] rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-600/10 p-3 rounded-xl">
              <Briefcase className="text-orange-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Front-End Developer</h3>
          </div>
          <p className="text-orange-400 mb-4">
            Freelance Projects & Academic Works
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              Built multiple web applications using React, Firebase, and Node.js.
            </li>
            <li>
              Designed responsive UI using Tailwind CSS and DaisyUI.
            </li>
            <li>
              Implemented user authentication, payment integration, and admin dashboards.
            </li>
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#1a1d25] rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-600/10 p-3 rounded-xl">
              <GraduationCap className="text-orange-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science in CSE
            </h3>
          </div>
          <p className="text-orange-400">Daffodil International University</p>
          <p className="text-gray-400 mb-4">Session: 2021 – 2025</p>
          <p className="text-gray-400">
            Focused on Web Development, Software Engineering, and Database Systems.
            Built a strong foundation in computer science fundamentals while specializing
            in modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
