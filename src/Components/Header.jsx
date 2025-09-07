import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import ContactFormModal from "./ContactForm"; // ✅ imported

export default function Header() {
  // toggle the menu Open/Close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // contact form
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <header
        id="Home"
        className="absolute w-full z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-24">
              <a href="#Hero" className="h-10 w-24">
                <img src={logo} alt="logo" className="cursor-pointer" />
              </a>
            </div>
          </motion.div>

          {/* list */}
          <nav className="lg:flex hidden md:flex space-x-8 lg:space-x-5 md:space-x-4 md:text font-bold md:px-6 lg:px-8 ">
            {[
              { name: "Home", href: "#Hero" },
              // { name: "About", href: "#About" },
              { name: "Skills", href: "#Skills" },
              { name: "Work", href: "#Projects" },
              { name: "Posters", href: "#Poster" },
              { name: "Testimonials", href: "#Testimonials" },
              // { name: "Contact", href: "#Contact" },
            ].map((item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                key={item.name} // ✅ FIXED
                className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href={item.href}
              >
                {item.name} {/* ✅ FIXED */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* social */}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="https://github.com/KingRuby14"
              target="_blank"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="https://www.linkedin.com/in/selva-pandi-489981213/"
              target="_blank"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="https://www.instagram.com/avlesidnapwebdev/"
              target="_blank"
            >
              <FiInstagram className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="https://www.facebook.com/avlesidnap"
              target="_blank"
            >
              <FiFacebook className="w-5 h-5" />
            </motion.a>

            {/* hire me button */}
            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 1.6,
                duration: 0.8,
              }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
             text-white py-2 px-8 rounded-full font-semibold shadow-lg 
             transition duration-200 transform hover:scale-105 border-none"
            >
              Hire Me
            </motion.button>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className="text-gray-300"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col space-y-3">
            {[
              { name: "Home", href: "#Hero" },
              // { name: "About", href: "#About" },
              { name: "Skills", href: "#Skills" },
              { name: "Work", href: "#Projects" },
              { name: "Posters", href: "#Poster" },
              { name: "Testimonials", href: "#Testimonials" },
              // { name: "Contact", href: "#Contact" },
            ].map((item) => (
              <a
                onClick={toggleMenu}
                className="text-gray-300 font-medium py-2"
                key={item.name} // ✅ FIXED
                href={item.href} // ✅ FIXED
              >
                {item.name} {/* ✅ FIXED */}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
              <a href="https://github.com/KingRuby14" target="_blank">
                <FiGithub className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/selva-pandi-489981213/"
                target="_blank"
              >
                <FiLinkedin className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/avlesidnapwebdev/"
                target="_blank"
              >
                <FiInstagram className="h-5 w-5 text-gray-300" />
              </a>
              <a href="https://www.facebook.com/avlesidnap" target="_blank">
                <FiFacebook className="h-5 w-5 text-gray-300" />
              </a>
            </div>

            <button
              onClick={() => {
                toggleMenu();
                openContactForm();
              }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white py-2 px-8 rounded-full font-semibold shadow-lg transition duration-200 hover:scale-105 border-none w-full mt-5"
            >
              Hire Me
            </button>
          </div>
        </motion.div>

        {/* contact form modal */}
        <ContactFormModal
          contactFormOpen={contactFormOpen}
          closeContactForm={closeContactForm}
        />
      </header>
    </>
  );
}
