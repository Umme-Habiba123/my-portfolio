import React from "react";
import { Code, Palette, Rocket } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0f1116] text-white py-20 px-6 md:px-20">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-5xl font-bold">
          About <span className="text-orange-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-2 text-base lg:text-xl sm:text-lg">
          A glimpse into my journey, passion, and what drives me as a developer.
        </p>
      </div>

      {/* Description */}
      <div className="bg-[#1a1c23] rounded-2xl p-8 md:p-10 max-w-5xl mx-auto mb-14 text-gray-300 text-base space-y-4 leading-relaxed">
        <p className="text-lg">
          Hi, I’m a <span className="text-orange-400 font-medium">web developer from Bangladesh</span> 
          with a passion for crafting clean, responsive, and interactive websites. 
          My programming journey started out of curiosity, but soon turned into a deep love for building 
          user-focused digital experiences.
        </p>

        <p>
          I specialize in the <span className="text-orange-400 font-medium">MERN Stack</span> — 
          creating scalable front-end interfaces with React and Tailwind CSS, 
          while also working on powerful back-end solutions with Node.js and MongoDB. 
          I enjoy learning new technologies and continuously improving my craft.
        </p>

        <p>
          Beyond coding, I love exploring <span className="text-orange-400 font-medium">creative design ideas</span>, 
          learning new languages like Korean, and occasionally spending time with art and music.  
          I believe in combining creativity with technology to build meaningful and enjoyable user experiences.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#1a1c23] p-6 rounded-xl text-center space-y-4 hover:bg-gray-900 transform transition duration-300 hover:scale-105">
          <Code className="mx-auto text-orange-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">Clean Code</h3>
          <p className="text-gray-400 text-sm">Writing efficient, maintainable, and scalable code.</p>
        </div>

        <div className="bg-[#1a1c23] p-6 rounded-xl text-center space-y-4 hover:bg-gray-900 transform transition duration-300 hover:scale-105">
          <Palette className="mx-auto text-orange-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">Modern Design</h3>
          <p className="text-gray-400 text-sm">Building visually appealing and user-friendly interfaces.</p>
        </div>

        <div className="bg-[#1a1c23] p-6 rounded-xl text-center space-y-4 hover:bg-gray-900 transform transition duration-300 hover:scale-105">
          <Rocket className="mx-auto text-orange-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">Fast Performance</h3>
          <p className="text-gray-400 text-sm">Optimizing web apps for speed and smooth performance.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
