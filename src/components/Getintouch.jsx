import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MailPlus } from 'lucide-react';
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

const GetInTouch = () => {

    const handleClick = () => {
        const name = document.getElementById("name")?.value || "";
        const surname = document.getElementById("surname")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const message = document.getElementById("message")?.value || "";

        if (!name || !surname || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const mailtoLink = `mailto:twinsnpods@gmail.com?subject=Message from ${name} ${surname}&body=Email: ${email}%0A%0A${message}`;
        window.location.href = mailtoLink;

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Show confirmation
        alert("Thanks for your message! Your email app should now be open.");
    };

    return (
        <div className="flex flex-col justify-center items-center bg-black gap-10 pt-10 px-2 md:px-10 pb-20">
            <motion.h1
                initial={{ y: +100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='text-white text-3xl md:text-4xl text-center'
            >
                Get In Touch
            </motion.h1>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-10 w-full max-w-5xl">
                {/* Contact Info */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center items-center gap-15 flex-1 bg-black py-8 px-2"
                >
                    <div className="flex flex-row justify-center items-center gap-4">
                        <FaLocationDot className="text-white text-4xl" />
                        <h1 className="text-gray-500 text-base md:text-lg">Pretoria, Gauteng, South-Africa</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <MailPlus className="text-white text-4xl" />
                        <h1 className="text-gray-500 text-base md:text-lg">twinsnpods@gmail.com</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <PiPhoneCallDuotone className="text-white text-4xl" />
                        <h1 className="text-gray-500 text-base md:text-lg">+2781 317 5691</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <FaWhatsapp className="text-white text-4xl" />
                        <h1 className="text-gray-500 text-base md:text-lg">081 317 5691</h1>
                    </div>
                </motion.div>

                {/* Form */}
                <div className="flex-1 flex flex-col justify-center">
                    <div id="contact-us" className="bg-black h-full flex flex-col items-center justify-center">
                        <h1 className="text-2xl md:text-2xl text-white font-bold text-center pb-6 md:pb-10">
                            Leave me a message
                        </h1>
                        <motion.div
                            initial={{ x: +100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full h-full max-w-xl bg-gray-700 p-6 md:p-8 rounded-2xl border border-gray-300 shadow-2xl flex flex-col gap-4 md:gap-6 pb-10"
                            id="get-in-touch"
                        >
                            <label className="text-lg md:text-xl font-bold text-black">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="border-2 border-gray-400 rounded-xl text-base md:text-lg px-4 py-3 shadow-md"
                            />
                            <label className="text-lg md:text-xl font-bold text-black">Surname</label>
                            <input
                                id="surname"
                                type="text"
                                placeholder="Enter your surname"
                                className="border-2 border-gray-400 rounded-xl text-base md:text-lg px-4 py-3 shadow-md"
                            />
                            <label className="text-lg md:text-xl font-bold text-black">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="border-2 border-gray-400 rounded-xl text-base md:text-lg px-4 py-3 shadow-md"
                            />
                            <label className="text-lg md:text-xl font-bold text-black">Message</label>
                            <textarea
                                id="message"
                                placeholder="Leave us a message"
                                rows={5}
                                className="border-2 border-gray-400 rounded-xl text-base md:text-lg px-4 py-3 shadow-md resize-none"
                            />
                            <button
                                type="button"
                                onClick={handleClick}
                                className="bg-gray-500 text-gray-100 text-lg md:text-xl font-bold py-3 px-6 rounded-2xl hover:bg-gray-800 transition duration-300"
                            >
                                Submit Message
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
