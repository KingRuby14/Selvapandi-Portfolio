import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Import images
import Aqua from "../assets/Aquariumshop.png";
import pilotHorizons from "../assets/pilot horizons.png";
import vikram from "../assets/vikramtrust2.png";
import expense from "../assets/expenses racker.png";
import prabazone from "../assets/prabazone.png";

export default function Project() {
  const projectList = [
    {
      id: 1,
      title: "Aquarium Shop E-commerce",
      description:
        "A full-stack MERN e-commerce website with product search, cart, login system, and payment gateway integration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "MERN Stack"],
      image: Aqua,
      github: "https://github.com/KingRuby14/AquariumShop",
      live: "https://aquariumshop.selvapandi.com/",
    },
    {
      id: 2,
      title: "Pilot Horizons",
      description:
        "A professional WordPress website built for Pilot Horizons with responsive design and optimized SEO.",
      tech: ["WordPress", "Elementor", "SEO", "HTML", "CSS"],
      image: pilotHorizons,
      github: "",
      live: "https://pilothorizons.xyz/",
    },
    {
      id: 3,
      title: "Expenses Tracker",
      description:
        "A full-stack MERN application for tracking expenses with user authentication and data visualization.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "MERN Stack"],
      image: expense,
      github: "https://github.com/KingRuby14/ExpenseTracker",
      live: "https://expensestra.selvapandi.com/",
    },
    {
      id: 4,
      title: "Vikram Trust",
      description:
        "A modern and responsive WordPress site designed for Vikram Trust with donation and contact features.",
      tech: ["WordPress","Elementor", "HTML", "CSS"],
      image: vikram,
      github: "",
      live: "https://vikramtrust.online/",
    },
    {
      id: 5,
      title: "PrabaZone",
      description:
        "A professional WordPress website built for PrabaZone with responsive design and optimized SEO.",
      tech: ["WordPress", "Elementor", "SEO", "HTML", "CSS"],
      image: prabazone,
      github: "",
      live: "https://prabazone.com",
    },
  ];

  return (
    <section id="Projects" className="relative py-20 bg-black">
      {/* Title */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-4">
          Projects
        </h2>
        <div className="w-5/6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 relative">
        {/* Timeline line - animates once */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2 origin-top"
        ></motion.div>

        {projectList.map((p, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-20 flex flex-col md:flex-row items-center relative"
            >
              {/* Dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="hidden md:block absolute left-[49.3%] top-20 w-6 h-6 bg-purple-500 rounded-full border-4 border-black transform -translate-x-1/2"
              />

              {/* Image Side */}
              <div
                className={`w-full md:w-1/2 p-4 ${
                  isLeft ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"
                }`}
              >
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mx-auto w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto rounded-xl transform -rotate-2 hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>

              {/* Details Side */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 p-4 ${
                  isLeft ? "md:pl-10 md:order-2" : "md:pr-10"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm capitalize mt-2">{p.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-900/40 text-purple-300 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-5">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-200 border border-purple-500 px-3 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-lg hover:opacity-90 transition"
                    >
                      <FaExternalLinkAlt /> Live Preview
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
