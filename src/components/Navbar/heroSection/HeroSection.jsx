import React from "react";
import { ArrowRight, Download } from "lucide-react";
import profile from "../../../assets/tayba.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <section className="min-h-screen flex items-center bg-[#0e0f14] text-white pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-[#0e0f14] via-[#1a1c23] to-[#ff9447]/10">
      <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 px-4 sm:px-6 md:px-20">
        
        {/* Left Content */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 text-center md:text-left md:w-1/2"
        >
          <p className="text-orange-400 font-medium flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            👋 Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Mahiya <span className="text-orange-400">Rehman</span>
          </h1>

          <h2 className="text-sm sm:text-lg lg:text-2xl text-gray-400">
            Front-End Developer | React Developer
          </h2>

          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            I'm a passionate React Developer who loves turning ideas into
            beautiful and functional web applications. <br />
            I focus on clean code, smooth user experiences, and modern design.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#FF9447] text-black hover:bg-orange-600 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-bold transition-all"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-medium transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative md:w-1/2 flex justify-center mb-8 md:mb-0"
        >
          <div className="absolute -inset-3 sm:-inset-4 bg-orange-500/20 blur-3xl rounded-3xl"></div>
          <img
            src={profile}
            alt="Mahiya Rehman"
            className="relative rounded-3xl w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px] xl:w-[450px] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
