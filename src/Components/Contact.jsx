import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFormModal from "./ContactForm"; // ✅ reuse modal

export default function Contact() {
  // main refs
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  // contact modal state
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // cleanup existing scrollTriggers
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };
    cleanup();

    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );
    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233,213,255,0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5
    );
    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7
    );

    return cleanup;
  }, []);

  return (
    <>
      <section id="Contact"
        ref={sectionRef}
        className="flex items-center justify-center bg-black relative h-screen overflow-hidden"
        style={{ overscrollBehavior: "none" }}
      >
        {/* Expanding Circle */}
        <div
          ref={circleRef}
          className="absolute w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100 z-0"
        >
          <p
            ref={initialTextRef}
            className="text-black font-bold text-base sm:text-lg md:text-xl flex items-center text-center"
          >
            SCROLL DOWN
          </p>
        </div>

        {/* Final text */}
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center opacity-0 z-10"
        >
          <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
            Step Into The Future With Selvapandi
          </h1>

          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6">
            Front-end developer specialized in crafting modern, responsive web
            interfaces using React, Tailwind CSS, and advanced UI animation
            techniques. Focused on clean code, and pixel-perfect design that
            stand out.
          </p>

          <button
            onClick={openContactForm}
            className="px-6 py-2 rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        contactFormOpen={contactFormOpen}
        closeContactForm={closeContactForm}
      />
    </>
  );
}
