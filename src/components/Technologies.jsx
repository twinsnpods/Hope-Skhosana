import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaNpm, FaFigma } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs, TbBrandFramerMotion, TbBrandVite } from "react-icons/tb";
import { BiLogoCss3 } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BsFiletypeYml } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

function Technologies() {
  return (
    <div className="flex flex-col justify-center items-center bg-black gap-10 pt-10 px-4 pl-25 pr-25">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl text-white pb-8 md:pb-10 text-center"
      >
        Technologies
      </motion.h1>

      {/* First Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-20 w-full text-center md:text-left pt-10">
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <FaReact className="text-6xl md:text-9xl text-blue-500" />
          <p className="text-lg md:text-2xl text-gray-600">React</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <TbBrandJavascript className="text-6xl md:text-9xl text-yellow-400" />
          <p className="text-lg md:text-2xl text-gray-600">Javascript</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <BiLogoCss3 className="text-6xl md:text-9xl text-blue-700" />
          <p className="text-lg md:text-2xl text-gray-600">Css</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <TiHtml5 className="text-6xl md:text-9xl text-orange-600" />
          <p className="text-lg md:text-2xl text-gray-600">HTML</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <FaNodeJs className="text-6xl md:text-9xl text-green-600" />
          <p className="text-lg md:text-2xl text-gray-600">Node.js</p>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-20 w-full text-center md:text-left pt-6">
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <FaGithub className="text-6xl md:text-9xl text-white" />
          <p className="text-lg md:text-2xl text-gray-600">Github</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <FaNpm className="text-6xl md:text-9xl text-red-600" />
          <p className="text-lg md:text-2xl text-gray-600">Npm</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <TbBrandNextjs className="text-6xl md:text-9xl text-white" />
          <p className="text-lg md:text-2xl text-gray-600">Nextjs</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <SiExpress className="text-6xl md:text-9xl text-gray-400" />
          <p className="text-lg md:text-2xl text-gray-600">Express.js</p>
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-20 w-full text-center md:text-left pt-6">
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <FaFigma className="text-6xl md:text-9xl text-pink-400" />
          <p className="text-lg md:text-2xl text-gray-600">Figma</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <TbBrandFramerMotion className="text-6xl md:text-9xl text-purple-500" />
          <p className="text-lg md:text-2xl text-gray-600">Framer-M</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <BsFiletypeYml className="text-6xl md:text-9xl text-blue-300" />
          <p className="text-lg md:text-2xl text-gray-600">.YML</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <RiTailwindCssFill className="text-6xl md:text-9xl text-blue-500" />
          <p className="text-lg md:text-2xl text-gray-600">TailwindCss</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col justify-center items-center gap-2 md:gap-4 flex-1 min-w-[120px]"
        >
          <TbBrandVite className="text-6xl md:text-9xl text-yellow-300" />
          <p className="text-lg md:text-2xl text-gray-600">Vite</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;