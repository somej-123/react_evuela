import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold tracking-wide">
              EVUELA
            </a>
          </div>
          <div className="hidden md:flex md:justify-between items-center space-x-8">
            {/* <a href="/" className="hover:text-blue-500 transition duration-300">
              HOME
            </a> */}
            <a
              href="/blog"
              className="hover:text-blue-500 transition duration-300"
            >
              BLOG
            </a>
            <a
              href="/resources"
              className="hover:text-blue-500 transition duration-300"
            >
              RESOURCES
            </a>
            <a
              href="/info"
              className="hover:text-blue-500 transition duration-300"
            >
              INFO
            </a>
            <a
              href="/login"
              className="hover:text-blue-500 transition duration-300"
            >
              LOGIN
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 mt-2 pb-4">
              <a
                href="/"
                className="hover:text-blue-500 transition duration-300"
              >
                HOME
              </a>
              <a
                href="/blog"
                className="hover:text-blue-500 transition duration-300"
              >
                BLOG
              </a>
              <a
                href="/resources"
                className="hover:text-blue-500 transition duration-300"
              >
                RESOURCES
              </a>
              <a
                href="/info"
                className="hover:text-blue-500 transition duration-300"
              >
                INFO
              </a>
              <a
                href="/login"
                className="hover:text-blue-500 transition duration-300"
              >
                LOGIN
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
