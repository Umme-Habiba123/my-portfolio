import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed w-5/6  mx-auto top-0 left-0 w-full bg-[#0e0f14]/90 backdrop-blur-md text-white z-50 shadow-sm ">
      <div className="flex w-5/6 mx-auto justify-between w- items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="text-orange-400 text-xl font-bold flex">
          <img onClick='' className="w-20 ml-5" src="https://i.ibb.co.com/bMTY8zXT/m.png" alt="" />
   
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-400 transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:block bg-[#FF9447] hover:bg-orange-600 text-black px-5 py-2 rounded-lg font-medium transition-all"
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-orange-400 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0e0f14] border-t border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-400 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 hover:text-white px-5 py-2 rounded-lg font-medium transition-all"
            >
              Let’s Talk
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
