import React from "react";
import { Linkedin, Github, Instagram, MailPlus } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-gray-500 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto">
        {/* Mobile layout: logo and icons in one row */}
        <div className="flex flex-row justify-center items-center gap-4 md:hidden">
          <div className="text-white text-2xl font-bold"><h1 className="hover:scale-120 transition-transform duration-300f">H.s</h1></div>
          <ul className="flex flex-row space-x-4">
            <li><a href="#home" className="text-white hover:text-gray-300"><Linkedin /></a></li>
            <li><a href="#about" className="text-white hover:text-gray-300"><Github /></a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300"><Instagram /></a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300"><MailPlus /></a></li>
          </ul>
        </div>

        {/* Desktop layout: logo on left, icons on right */}
        <div className="hidden md:flex flex-row justify-between items-center">
          <div className="text-white text-4xl font-bold">H.s</div>
          <ul className="flex flex-row space-x-6">
            <li><a href="#home" className="text-white hover:text-gray-300"><Linkedin /></a></li>
            <li><a href="#about" className="text-white hover:text-gray-300"><Github /></a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300"><Instagram /></a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300"><MailPlus /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
