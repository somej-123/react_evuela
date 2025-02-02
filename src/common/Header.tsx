import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              One Page Love
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/inspiration" className="hover:text-red-500">
              Inspiration
            </a>
            <a href="/templates" className="hover:text-red-500">
              Templates
            </a>
            <a href="/resources" className="hover:text-red-500">
              Resources
            </a>
            <a href="/info" className="hover:text-red-500">
              Info
            </a>
            <a href="/hire" className="hover:text-red-500">
              Hire
            </a>
            <a href="/build" className="hover:text-red-500">
              Build a One Pager
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-red-500 focus:outline-none">
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
      </nav>
    </header>
  );
};

export default Header;
