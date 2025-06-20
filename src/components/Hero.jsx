import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-center items-center px-8 gap-10 gap-x-30 py-10 pt-30 top-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-start text-white max-w-2xl gap-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold">Hope Skhosana</h1>
        <h2 className="text-2xl md:text-4xl mt-2">Full Stack Developer / UI-UX</h2>
        <p className="text-lg md:text-2xl mt-4 leading-relaxed text-justify">
          I'm an aspiring Front-End Developer with a background in UI/UX design.
          I began in Figma, creating clean, user-friendly interfaces, and now
          build responsive websites using HTML, CSS, JavaScript, and front-end
          libraries. I love turning designs into smooth, interactive experiences — from concept to deployment.
        </p>
      </motion.div>

      <motion.img
        src="me.jpg"
        alt="Hope Skhosana"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-64 w-64 md:h-96 md:w-96 rounded-full object-cover shadow-lg mt-8 md:mt-0"
      />
    </div>
  );
}

export default Hero;
