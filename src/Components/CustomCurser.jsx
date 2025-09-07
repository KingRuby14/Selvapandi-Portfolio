import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // Disable on mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;
  if (isMobile) return null;

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // Initial setup
    gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });

    // Movement functions
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power.out",
    });
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", () =>
      gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 })
    );
    document.addEventListener("mouseup", () =>
      gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 })
    );

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", () => {});
      document.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <>
      {/* main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* border cursor */}
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-50"
      />
    </>
  );
}
