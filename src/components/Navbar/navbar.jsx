import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Contact", "Blogs"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0e0f14]/90 backdrop-blur-md text-white z-50 shadow-sm">
      <div className="flex w-11/12 sm:w-5/6 mx-auto justify-between items-center px-4 sm:px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center text-orange-400 text-xl font-bold cursor-pointer">
          <img
            className="w-10 sm:w-12 md:w-16 lg:w-20"
            src="https://i.ibb.co/bMTY8zXT/m.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-300 ml-auto">
          {links.map((item) => (
            <li key={item}>
              {item === "Blogs" ? (
                <Link
                  to="/blogs"
                  className="hover:text-orange-400 transition-all"
                >
                  {item}
                </Link>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-orange-400 transition-all"
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#FF9447] hover:bg-orange-600 text-black px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-medium transition-all ml-4"
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
        <div className="md:hidden bg-[#0e0f14]/95 border-t border-gray-700 backdrop-blur-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            {links.map((item) => (
              <li key={item}>
                {item === "Blogs" ? (
                  <Link
                    to="/blogs"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-orange-400 transition-all text-lg sm:text-base"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-orange-400 transition-all text-lg sm:text-base"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 hover:text-white px-6 py-2 sm:px-5 sm:py-3 rounded-lg font-medium transition-all"
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
