import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+919092264342"; // ✅ Replace with your number
  const message = "Hello! I'm interested in your services."; // ✅ Default message

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={openWhatsApp}
      className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-green-500 shadow-lg text-white hover:bg-green-600 hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={20} />
    </motion.button>
  );
};

export default WhatsAppButton;
