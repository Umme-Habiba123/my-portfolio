import React from "react";
import { Code, Palette, Rocket } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="bg-[#0e0f14]  text-white py-20 px-6 md:px-20">
      {/* Title */}
     <div className=" ">
         <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-5xl font-bold">
          About <span className="text-orange-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-2   sm:text-lg">
          Get to know more about who I am and what I do
        </p>
      </div>

      {/* Description */}
      <div className="bg-[#1a1c23] rounded-xl p-6 md:p-10 max-w-4xl mx-auto mb-12 text-gray-300 text-sm sm:text-base space-y-4">
        <p>
          I'm a 23-year-old web developer from Bangladesh who enjoys building
          responsive, user-friendly interfaces. Currently, I work with the{" "}
          <span className="text-orange-400 font-medium">MERN Stack</span> and
          explore front-end frameworks like React, Tailwind CSS, and Firebase.
        </p>
        <p>
          I love solving real-world problems through technology and continuously
          learning to improve my skills. When I'm not coding, I enjoy learning
          new languages like Korean and exploring creative design ideas.
        </p>
        <p>
          My goal is to create digital experiences that make a difference,
          combining creativity and technology to build solutions that users love.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#1a1c23] p-6 rounded-xl text-center space-y-4 hover:shadow-lg transition-all">
          <Code className="mx-auto text-orange-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">Clean Code</h3>
          <p className="text-gray-400 text-sm">Writing maintainable and efficient code</p>
        </div>
        <div className="bg-[#1a1c23] p-6 rounded-xl text-center space-y-4 hover:shadow-lg transition-all">
          <Palette className="mx-auto text-orange-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">Modern Design</h3>
          <p className="text-gray-400 text-sm">Creating beautiful user interfaces</p>
        </div>
        <div className="bg-[#1a1c23] p-6 rounded-xl text-center space-y-4 hover:shadow-lg transition-all">
          <Rocket className="mx-auto text-orange-400 w-8 h-8" />
          <h3 className="font-semibold text-lg">Fast Performance</h3>
          <p className="text-gray-400 text-sm">Optimized for speed and efficiency</p>
        </div>
      </div>
     </div>
    </section>
  );
};

export default AboutMe;
