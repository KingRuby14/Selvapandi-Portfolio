import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "./ContactForm";
import AnimatedCounter from "./AnimateCounter";
import Selvapandi from "../assets/Selvapandi.png";

export default function Hero() {
  const splineRef = useRef();
  const words = [
    "Full Stack Developer",
    "Graphic Designer",
    "Ui/Ux Designer",
    "Mentor",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <section
        id="Hero"
        className="relative min-h-screen bg-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-6 overflow-hidden"
      >
        {/* Floating gradient bubbles */}
        <div className="absolute inset-0 z-10 overflow-hidden">
  {/* Top Left */}
  <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full opacity-30 blur-3xl animate-float-slow"></div>

  {/* Top Right */}
  <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 rounded-full opacity-25 blur-2xl animate-float-medium"></div>

  {/* Middle Left */}
  <div className="absolute top-1/2 left-16 w-52 h-52 bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl animate-float-fast"></div>

  {/* Bottom Right */}
  <div className="absolute bottom-16 right-32 w-72 h-72 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full opacity-25 blur-3xl animate-float-slow"></div>

  {/* Bottom Left */}
  <div className="absolute bottom-24 left-28 w-64 h-64 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 rounded-full opacity-30 blur-2xl animate-float-medium"></div>

  {/* Center (behind text, faint) */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 rounded-full opacity-15 blur-3xl animate-float-fast"></div>
</div>


        {/* Left: text */}
        <div className="relative z-30 w-full sm:px-8 md:px-12 xl:mb-0 mb-10 mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 text-white"
          >
            Hi I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent uppercase">
              Selvapandi
            </span>
            <br />
            <span className="text-purple-400 h-12 inline-flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 max-w-2xl leading-relaxed capitalize backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg"
          >
            I craft modern, responsive websites and web apps that are fast,
            reliable, and user-friendly. With a focus on clean code, clear
            communication, and on-time delivery, I turn ideas into impactful
            digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 2,
              duration: 1.5,
            }}
            className="flex gap-4 mt-5"
          >
            <a href="#Projects">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 transition duration-300 inline-block">
                <button className="bg-black text-white py-2 px-8 rounded-full font-semibold shadow-lg transition duration-200 hover:scale-105">
                  View my work
                </button>
              </div>
            </a>
            <button
              onClick={openContactForm}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white py-2 px-8 rounded-full font-semibold shadow-lg transition duration-200 hover:scale-105 border-none "
            >
              Hire me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 2.2,
              duration: 1.5,
            }}
          >
            <AnimatedCounter />
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 1 }}
          className="z-20 w-full  justify-center items-center xl:justify-end hidden xl:flex"
        >
          <img
            className="xl:h-[40rem] lg:h-[30rem] md:h-[22rem] h-[16rem] rounded-full"
            src={Selvapandi}
            alt="Selvapandi"
          />
        </motion.div>
      </section>

      <div className="flex justify-center items-center mt-8 xl:hidden">
        <img
          className="h-[16rem] sm:h-[22rem] md:h-[30rem] lg:h-[40rem] rounded-full"
          src={Selvapandi}
          alt="Selvapandi"
        />
      </div>

      <ContactFormModal
        contactFormOpen={contactFormOpen}
        closeContactForm={closeContactForm}
      />
    </>
  );
}
