import { useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  // Rotate glow border based on cursor position
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-5 h-5" />);
      } else if (i === fullStars && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400 w-5 h-5" />);
      }
    }
    return stars;
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card rounded-xl p-8 mb-6 break-inside-avoid-column relative bg-black-100 border border-black-50 hover:scale-[1.02] hover:shadow-xl transition"
    >
      {/* Glow effect layer */}
      <div className="glow"></div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {renderStars(card.rating || 5)} {/* default 5 if no rating */}
      </div>

      {/* Review */}
      <p className="text-gray-200 text-base mb-6 leading-relaxed capitalize">
        {card.review}
      </p>
      {children}
    </div>
  );
};

export default GlowCard;
