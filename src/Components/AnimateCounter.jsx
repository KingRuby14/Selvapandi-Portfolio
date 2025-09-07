import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import CountUp from "react-countup";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "", label: "Satisfied Clients" },
    { value: 2, suffix: "", label: "Completed Projects" },
    { value: 2, suffix: "", label: "Students Mentored" },
  ];

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Just trigger once when visible
      ScrollTrigger.create({
        trigger: "#counter",
        start: "top center",
        once: true,
        onEnter: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div
      id="counter"
      ref={counterRef}
      className="px-4 py-0 sm:px-6 lg:px-1 md:px-1"
    >
      <div className="grid grid-cols-2 gap-4 text-center mt-6 max-w-md ml-0">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="backdrop-blur-md bg-white/10 border border-white/20 
                   rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center 
                   shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="counter-number text-white text-xl sm:text-2xl font-bold mb-1 drop-shadow-md">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white/80 text-xs sm:text-sm font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
