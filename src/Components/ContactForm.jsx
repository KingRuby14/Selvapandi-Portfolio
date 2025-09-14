// ContactFormModal.jsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone } from "react-icons/fi";
export default function ContactFormModal({
  contactFormOpen,
  closeContactForm,
}) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form after sending
      setForm({ name: "", email: "", message: "" });
      closeContactForm(); // optional: close modal after success
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {contactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration: 0.8,
            }}
            className="rounded-xl shadow-xl w-full max-w-md p-6 
             bg-white/10 dark:bg-gray-800/20 
             backdrop-blur-xl border border-white/20"
          >
            {/* header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Get In Touch</h1>
              <button onClick={closeContactForm}>
                <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <div className="flex flex-col gap-3 py-4 text-white text-sm">
                <a
                  href="mailto:selvapandi322@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center font-semibold text-white justify-center md:justify-start gap-2 hover:text-violet-400 transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                  <span>selvapandi322@gmail.com</span>
                </a>
                <a
                  href="tel:+919092264342"
                  className="flex items-center font-semibold text-white justify-center md:justify-start gap-2 hover:text-violet-400 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>+91 9092264342</span>
                </a>
              </div>
            </div>

            {/* form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-lg 
             bg-gray-900/50 text-white 
             border border-gray-600 
             focus:border-violet-500 focus:ring-2 focus:ring-violet-400 
             transition-all duration-300
             placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-lg 
             bg-gray-900/50 text-white 
             border border-gray-600 
             focus:border-pink-500 focus:ring-2 focus:ring-pink-400 
             transition-all duration-300
             placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-2 rounded-lg 
             bg-gray-900/50 text-white 
             border border-gray-600 
             focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
             transition-all duration-300
             placeholder-gray-400"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg 
             bg-gradient-to-r from-violet-600 via-pink-500 to-purple-600 
             hover:from-pink-600 hover:via-purple-600 hover:to-violet-600
             text-white font-bold shadow-md 
             transition-all duration-300
             relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Message"}
                </span>
                {/* shine effect */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 
                   opacity-0 group-hover:opacity-100 
                   translate-x-[-100%] group-hover:translate-x-[100%] 
                   transition-transform duration-700 ease-in-out"
                ></span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
