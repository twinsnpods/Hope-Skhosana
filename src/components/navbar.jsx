import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

function Navbar() {
  return (
    <nav className="bg-gray-500 p-2 md:p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto">
        {/* Mobile layout: logo and icons in one row */}
        <div className="flex flex-row justify-center items-center gap-2 md:hidden">
          <div className="text-white text-xl font-bold">
            <h1 className="hover:scale-110 transition-transform duration-300">H.s</h1>
          </div>
          <ul className="flex flex-row space-x-2">
            <li><a href="https://www.linkedin.com/in/twinsnpods-undefined-4a2b06345"  className="text-white hover:text-gray-300"><FiLinkedin size={22} /></a></li>
            <li><a href="https://github.com/twinsnpods?tab=repositories" className="text-white hover:text-gray-300"><FaGithub size={22} /></a></li>
            <li><a href="https://www.instagram.com/twinsnpods/" className="text-white hover:text-gray-300"><FaInstagram size={22} /></a></li>
            <li><a href="#get-in-touch" className="text-white hover:text-gray-300"><IoIosMailUnread size={22} /></a></li>
          </ul>
        </div>

        {/* Desktop layout: logo on left, icons on right */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div className="text-white text-3xl md:text-4xl font-bold">H.s</div>
          <ul className="flex flex-row space-x-4 md:space-x-6">
            <li><a href="https://www.linkedin.com/in/twinsnpods-undefined-4a2b06345"  className="text-white hover:text-gray-300"><FiLinkedin size={28} /></a></li>
            <li><a href="https://github.com/twinsnpods?tab=repositories" className="text-white hover:text-gray-300"><FaGithub size={28} /></a></li>
            <li><a href="https://www.instagram.com/twinsnpods/" className="text-white hover:text-gray-300"><FaInstagram size={28} /></a></li>
            <li><a href="#get-in-touch" className="text-white hover:text-gray-300"><IoIosMailUnread size={28} /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
