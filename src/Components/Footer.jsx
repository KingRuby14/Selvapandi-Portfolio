import React from "react";
import logo from "../assets/logo.png";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiX,
} from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="h-10 w-24">
            <a href="#Hero" className="h-10 w-24">
              <img src={logo} alt="logo" className="cursor-pointer" />
            </a>
          </div>
          {/* social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              connect
            </h3>
            <div className="flex space-x-4">
              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                href="https://github.com/KingRuby14"
                target="_blank"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                href="https://www.linkedin.com/in/selva-pandi-489981213/"
                target="_blank"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                href="https://www.instagram.com/avlesidnapwebdev/"
                target="_blank"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                href="https://www.facebook.com/avlesidnap"
                target="_blank"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Selvapandi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
