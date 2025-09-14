import React from "react";
import { motion } from "framer-motion";
import { GrPersonalComputer } from "react-icons/gr";
import { GoCodeSquare } from "react-icons/go";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import motionLogo from "../assets/motion.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwindcss.png";
import brain from "../assets/brain3.png";
import canva from "../assets/canva.png";
import photoshop from "../assets/photoshop.png";
import wordpress from "../assets/wordpress.png";
import shopify from "../assets/shopify.png";
import webflow from "../assets/webflow.png";
import framer from "../assets/framer.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import node from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import postman from "../assets/postman.png";

const skillsLogos = [
  html,
  css,
  js,
  github,
  motionLogo,
  figma,
  canva,
  photoshop,
  react,
  tailwind,
  express,
  node,
  mysql,
  mongodb,
  firebase,
  postman,
  wordpress,
  shopify,
  webflow,
  framer,
];

const Skills = () => {
  return (
    <section id="Skills" className="flex flex-col items-center relative py-16">
      {/* Skills Box */}
      <div className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center mt-10 overflow-hidden gap-8 md:gap-0">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black opacity-70 z-0" />

        {/* Brain image */}
        <motion.img
          src={brain}
          alt="skills"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[80%] md:w-[65%] mix-blend-screen relative z-10 mb-6 md:mb-0"
        />

        {/* Designer Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:absolute md:top-[20%] md:left-[5%] max-w-[320px] flex flex-col items-start 
          bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 z-20
          shadow-[0_0_20px_rgba(0,200,255,0.5)]"
        >
          <h1 className="text-3xl md:text-5xl flex items-center gradient">
            Designer <GrPersonalComputer className="ml-2" />
          </h1>
          <p className="leading-6 mt-3 text-sm md:text-base text-gray-200">
            I design user-friendly, modern, and creative interfaces with a focus
            on clean aesthetics and seamless usability.
          </p>
          <ul className="list-disc list-inside text-gray-200 mt-3 space-y-1 text-sm md:text-base">
            <li>Figma, Framer, Photoshop, Canva</li>
            <li>WordPress, Shopify, Webflow</li>
            <li>HTML, CSS, TailwindCSS, Motion</li>
          </ul>
        </motion.div>

        {/* Coder Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:absolute md:top-[20%] md:right-[5%] max-w-[320px] flex flex-col items-start 
          bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 z-20
          shadow-[0_0_20px_rgba(255,0,200,0.5)]"
        >
          <h1 className="text-3xl md:text-5xl flex items-center gradient">
            Coder <GoCodeSquare className="ml-2" />
          </h1>
          <p className="leading-6 mt-3 text-sm md:text-base text-gray-200">
            I build scalable, full-stack web applications with modern tools and
            frameworks.
          </p>
          <ul className="list-disc list-inside text-gray-200 mt-3 space-y-1 text-sm md:text-base">
            <li>ReactJS, NodeJS, ExpressJS</li>
            <li>JavaScript (ES6+)</li>
            <li>MySQL, MongoDB</li>
            <li>REST API, Firebase, Postman</li>
            <li>Git, GitHub</li>
          </ul>
        </motion.div>

        {/* Auto-scrolling Skills Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[90%] md:w-[60%] h-[80px] md:h-[100px] overflow-hidden relative mt-8 md:mt-0 md:absolute md:bottom-[5%] px-2 z-20"
        >
          <div className="flex gap-5 animate-marquee">
            {[...skillsLogos, ...skillsLogos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`skill-${index}`}
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CSS Animation */}
        <style>{`
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 20s linear infinite;
  }

  /* Hide scrollbar */
  .overflow-hidden::-webkit-scrollbar {
    display: none;
  }
  .overflow-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
      </div>
    </section>
  );
};

export default Skills;
