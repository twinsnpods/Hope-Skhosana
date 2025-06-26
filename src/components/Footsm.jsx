import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion as Motion } from 'framer-motion';

const Footsm = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black gap-8 pt-8 px-2 md:gap-10 md:pt-10 md:px-4 pb-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full'>
        <Motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}>
          <a href='https://web.facebook.com/profile.php?id=61562081638419'><FaFacebookSquare className='text-white text-2xl md:text-3xl' /></a>
        </Motion.div>
        <Motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}>
          <a href='https://x.com/TwinsNPods'><FaTwitter className="text-white text-2xl md:text-3xl" /></a>
        </Motion.div>
        <Motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}>
          <a href='https://www.instagram.com/twinsnpods/'><FaInstagram className='text-white text-2xl md:text-3xl' /></a>
        </Motion.div>
        <Motion.div
          whileInView={{ y: [0, -20, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
          }}>
          <a href='https://www.youtube.com/channel/UClYSDhGuPhxtm2ZfzKtGc7w'><FaYoutube className='text-white text-2xl md:text-3xl' /></a>
        </Motion.div>
      </div>
      <Motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-lg md:text-2xl text-gray-500 text-center'>
        Designed By TwinProduction SA
      </Motion.h1>
      <Motion.p
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-base md:text-3xl text-center text-gray-400 '>
        © 2025 MDentalStudio. All rights reserved.
      </Motion.p>
    </div>
  );
}

export default Footsm;