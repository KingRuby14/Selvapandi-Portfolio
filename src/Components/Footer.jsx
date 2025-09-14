import React from "react";
import logo from "../assets/logo.png";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center gap-10">
          {/* Logo */}
          <div className="h-12 w-28 flex-shrink-0">
            <a href="#Hero" className="block">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <div className="flex flex-col gap-3 text-white text-sm">
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

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                className="text-white hover:text-violet-400 transition-colors"
                href="https://github.com/KingRuby14"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                className="text-white hover:text-violet-400 transition-colors"
                href="https://www.linkedin.com/in/selva-pandi-489981213/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                className="text-white hover:text-violet-400 transition-colors"
                href="https://www.instagram.com/avlesidnapwebdev/"
                target="_blank"
                rel="noreferrer"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                className="text-white hover:text-violet-400 transition-colors"
                href="https://www.facebook.com/avlesidnap"
                target="_blank"
                rel="noreferrer"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white text-sm">
            © 2025 Selvapandi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
