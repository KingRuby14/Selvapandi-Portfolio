import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ProgressBar() {
  const progressBarRef = useRef(null);
  const progressFillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // use gsap.context for safe scoping & cleanup (works well with StrictMode)
    const ctx = gsap.context(() => {
      const fill = progressFillRef.current;
      if (!fill) return;

      // animate width with ScrollTrigger
      gsap.to(fill, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          onUpdate(self) {
            // use numeric progress (0..1)
            const p = self.progress;

            // choose color once per update, but use gsap.set to avoid building a tween
            let color = "#C54BBC";
            if (p > 0.75) color = "#7E22CE";
            else if (p > 0.5) color = "#A855F7";
            else if (p > 0.1) color = "#B53389";

            gsap.set(fill, { backgroundColor: color });
          },
        },
      });
    }, progressBarRef);

    // cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={progressBarRef}
      className="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50"
      aria-hidden="true"
    >
      <div
        ref={progressFillRef}
        className="h-full w-0"
        style={{ backgroundColor: "#A1045a", width: "0%" }}
      />
    </div>
  );
}
