import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">EVUELA</h2>
            <p className="text-sm text-gray-400">
              © 2025 EVUELA. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
            {/* <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-300">
              Terms of Service
            </a> */}
          </div>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
