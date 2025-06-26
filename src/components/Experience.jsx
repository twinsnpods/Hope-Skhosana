import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className='flex flex-col justify-center items-center bg-black gap-20 pt-25 px-4 md:px-6 pb-20'>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-white text-3xl md:text-4xl text-center'
      >
        Experience
      </motion.h1>

      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-25 text-center md:text-left px-2'>
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-gray-500 text-sm md:text-base'
        >
          Jan 2025 – Mar 2025
        </motion.h2>
        <motion.p 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-sm md:text-lg leading-relaxed text-gray-300 max-w-2xl text-justify'
        >
          Web Designer & Front-End Developer - MDentalStudio
        </motion.p>
      </div>

      <div className='flex flex-col justify-center items-center text-white gap-20'>
        {/* Section 1 */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-2'>
          <motion.img
            src="figmaexp.png"
            alt="figma"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-48 md:h-40 w-auto rounded-2xl shadow-lg"
          />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-sm md:text-lg leading-relaxed text-gray-300 max-w-2xl text-justify"
          >
            Started by designing wireframes and interactive prototypes in Figma, focusing on clean layouts, user-friendly navigation, and mobile responsiveness.
          </motion.p>
        </div>

        {/* Section 2 */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-2'>
          <motion.img
            src="desktoplr.png"
            alt="figma"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-48 md:h-40 w-auto rounded-2xl shadow-lg"
          />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-sm md:text-lg leading-relaxed text-gray-300 max-w-2xl text-justify"
          >
            Transformed the UI design into a real-world web application using React.js, Tailwind CSS, and Vite. Implemented responsive, component-based architecture with accessibility best practices.
          </motion.p>
        </div>

        {/* Section 3 */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-2'>
          <motion.img
            src="figmacid.png"
            alt="figma"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-48 md:h-40 w-auto rounded-2xl shadow-lg"
          />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-sm md:text-lg leading-relaxed text-gray-300 max-w-2xl text-justify"
          >
            Deployed the project using GitHub Pages, with GitHub Actions and a custom YAML workflow for automated CI/CD.
          </motion.p>
        </div>

        {/* Section 4 */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-2'>
          <motion.img
            src="figmawf.png"
            alt="figma"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-48 md:h-40 w-auto rounded-2xl shadow-lg"
          />
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-sm md:text-lg leading-relaxed text-gray-300 max-w-2xl text-justify"
          >
            Managed the project using Git and GitHub, with clean commit history, organized branches, and a structured repo ready for collaboration and future contributions.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
