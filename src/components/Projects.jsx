import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-black gap-10 pt-10 px-2 md:px-10">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl text-white text-center"
            >Projects
            </motion.h1>
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-2xl text-white text-center"
            >Website-portfolio
            </motion.h2>
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-lg md:text-2xl text-gray-400 text-center break-all"
            ><a href="https://twinsnpods.github.io/MDentalStudio/">https://twinsnpods.github.io/MDentalStudio/</a>
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-10 w-full">
                {/* Figma Prototypes */}
                <div className="flex flex-col justify-center items-center gap-6 pt-6 px-2 flex-1">
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-base md:text-2xl mt-4 leading-relaxed text-justify text-white text-center md:text-left"
                    >
                        Figma-prototypes
                    </motion.p>
                    <motion.img
                        src="figma.png"
                        alt="figma"
                        initial={{ x: +100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                    <motion.img
                        src="figmawcu.png"
                        alt="figma"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                    <motion.img
                        src="figmalm.png"
                        alt="figma"
                        initial={{ x: +100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                </div>
                {/* Desktop View */}
                <div className="flex flex-col justify-center items-center gap-6 pt-6 px-2 flex-1">
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-base md:text-2xl mt-4 leading-relaxed text-justify text-white text-center md:text-left"
                    >
                        Desktop-view
                    </motion.p>
                    <motion.img
                        src="vscode.png"
                        alt="figma"
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                    <motion.img
                        src="desktoplr.png"
                        alt="figma"
                        initial={{ x: +100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                    <motion.img
                        src="desktopsm.png"
                        alt="figma"
                        initial={{ y: +100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                </div>
                {/* Mobile View */}
                <div className="flex flex-col justify-center items-center gap-6 pt-6 px-2 flex-1">
                    <motion.p
                        initial={{ x: +100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-base md:text-2xl mt-4 leading-relaxed text-justify text-white text-center md:text-left"
                    >
                        Mobile view
                    </motion.p>
                    <motion.img
                        src="mobilein.png"
                        alt="figma"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                    <motion.img
                        src="mobilelr.png"
                        alt="figma"
                        initial={{ x: +100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                    <motion.img
                        src="mobilesm.png"
                        alt="figma"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="h-40 md:h-40 w-auto rounded-2xl shadow-lg"
                    />
                </div>
            </div>
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl text-white text-center"
            >MDentalStudio Website
            </motion.h1>
            <motion.p
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-xs md:text-sm text-white px-2 md:px-32 text-center md:text-justify"
            >
                A fully responsive dental website designed and developed from scratch. I began with UI/UX design in Figma, creating wireframes and high-fidelity prototypes, then developed the site using React.js, Tailwind CSS, and Vite for a fast, modern front-end workflow. The project was deployed using GitHub Pages, with automated CI/CD powered by GitHub Actions and a custom YAML workflow. This project showcases my ability to take a design from concept to live, production-ready website
            </motion.p>
        </div>
    );
};

export default Projects;