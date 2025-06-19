import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="text-white text-lg font-bold">My Website</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;