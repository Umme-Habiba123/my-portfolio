import React from "react";
import { ArrowRight, Download } from "lucide-react";
import profile from '../../../assets/tayba.png'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0e0f14] text-white pt-32 pb-16  bg-gradient-to-b from-[#0e0f14] via-[#1a1c23] to-[#ff9447]/10">
      <div className="w-5/6 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20">
        
        {/* Left Content */}
        <div className="space-y-6 mt-10 md:mt-0 text-center md:text-left md:w-1/2">
          <p className="text-orange-400 font-medium flex items-center justify-center md:justify-start gap-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Mahiya<span className="text-orange-400">Rehman</span>
          </h1>

          <h2 className="text-base lg:text-2xl sm:text-lg text-gray-400">
            Front-End Developer | React Developer
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I'm a passionate React Developer who loves turning ideas into 
            beautiful and functional web applications. <br />
            I focus on clean code, smooth user experiences, and modern design.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#FF9447] text-black  hover:bg-orange-600 px-5 py-3 rounded-xl font-bold transition-all"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl font-medium transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-3xl"></div>
          <img
            src={profile}
            alt="Mahiya Rehman"
            className="relative rounded-3xl lg:w-[400px] w-[280px] sm:w-[340px] md:w-[400px] object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
