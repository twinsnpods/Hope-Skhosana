import React from "react";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <div className="flex flex-col justify-center items-center bg-black gap-10 pt-32 px-6 pb-20">
      <motion.h1 
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl text-white pb-10">About Me</motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-center text-white max-w-6xl gap-20 text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-center gap-4">
          <p className="text-2xl text-gray-600 ">vscode</p>
        {/* Image with motion from left */}
        <motion.img
          src="vscode.png"
          alt="Vscode"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="h-64 w-auto md:h-40 rounded-2xl shadow-lg"
        />
        <p className="text-2xl text-gray-600 ">figma</p>
        {/* Image with motion from left */}
        <motion.img
          src="figma.png"
          alt="figma"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-64 w-auto md:h-40 rounded-2xl shadow-lg"
        />
        </div>

        {/* Paragraph with motion from right */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl text-justify "
        ><br />
          I'm an aspiring Front-End Web Developer with a strong background in UI/UX design.
          My journey began with designing in Figma, where I developed an eye for clean, user-friendly interfaces.
          I later expanded into web development, learning and applying core technologies like HTML, CSS, JavaScript,
          and modern front-end libraries.
          <br /><br />
          I’m passionate about turning great designs into responsive, interactive web experiences.
          From wireframing in Figma to deploying projects with tools like Vite, GitHub Pages, and GitHub Actions,
          I enjoy every step of the process — especially when combining design with code to create seamless user experiences.
        </motion.p> 
      </div>
    </div>
  );
}

export default Aboutme;
