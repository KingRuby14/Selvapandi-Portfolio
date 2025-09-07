import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Selvapandi from "../assets/Selvapandi.png";

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]); // FIX: initialize as array

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    starsRef.current = []; // reset on mount

    // title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // intro animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // stars animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      id="About"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* stars */}
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: `white`,
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl sm:text-2xl font-bold sm:mb-16 text-center text-white"
        >
          About Me
        </h1>
      </div>
      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-20rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0"
      >
        <h3
          className="backdrop-blur-md bg-white/10 border border-white/20 
             rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center 
             shadow-lg hover:scale-105 transition-transform duration-300 capitalize
             text-white text-base sm:text-sm md:text-xl lg:text-1xl xl:text-3xl xl:max-w-2xl leading-relaxed text-center sm:max-w-1xl md:max-w-2xl lg:max-w-3xl max-w-1xl mb-0 md:mb-0 md:mr-10 lg:mr-20"
        >
          <span className=" font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent uppercase">
            I’m Selvapandi
          </span>
          a Web Developer and Designer passionate about turning ideas into
          sleek, high-performing digital experiences.
          <span className="font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            with React, Tailwind, and the MERN stack, I build fast, responsive apps
          </span>
           that feel great to use. I also mentor
          developers, create standout resumes, and guide projects delivering
          clean code, creative solutions, and on-time delivery.
        </h3>

        <img
          className="lg:h-[40rem] md:h-[25rem] sm:mt-0 h-[18rem] mix-blend-lighten rounded-full"
          src={Selvapandi}
          alt="Selvapandi"
        />
      </div>
    </section>
  );
}
