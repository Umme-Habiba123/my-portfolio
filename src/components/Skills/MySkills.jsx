import { Code2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function MySkills() {
  const technicalSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "DaisyUI",
    "Bootstrap",
    "Git & GitHub",
    "REST APIs",
    "JSON",
    "Stripe Integration",
  ];

  const softSkills = [
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Critical Thinking",
    "Attention to Detail",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="skills"
      className="bg-[#0f0f12] text-white py-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-2"
        >
          My <span className="text-orange-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12 text-sm lg:text-xl md:text-base"
        >
          Technologies and expertise I bring to the table
        </motion.p>

        {/* Technical Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-[#1b1b1f] rounded-2xl p-8 md:p-10 mb-10 text-left shadow-md border border-[#2a2a2f]/50 hover:border-orange-500/40 transition-all"
        >
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="text-orange-400" />
            <h3 className="text-xl md:text-2xl font-semibold">Technical Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={fadeUp}
                className="bg-[#2a2a30] hover:bg-orange-500/20 border border-transparent hover:border-orange-500 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-[#1b1b1f] rounded-2xl p-8 md:p-10 text-left shadow-md border border-[#2a2a2f]/50 hover:border-orange-500/40 transition-all"
        >
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="text-orange-400" />
            <h3 className="text-xl md:text-2xl font-semibold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={fadeUp}
                className="bg-[#2a2a30] hover:bg-orange-500/20 border border-transparent hover:border-orange-500 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
