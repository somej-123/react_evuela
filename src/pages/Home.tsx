import React from "react";
import image from "../../public/image/HomeBackground.jpg"; // 이미지 경로를 확인하세요

const Home: React.FC = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
      }}
    >
      <div className="text-center p-10 rounded-lg shadow-2xl  backdrop-blur-sm">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold text-white mb-6 drop-shadow-2xl animate-fadeIn">
          Welcome to EVUELA
        </h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-base text-white mb-10 drop-shadow-lg animate-fadeIn delay-200">
          Ready to embark on your next adventure? Let EVUELA guide you to
          unforgettable experiences!
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300 shadow-lg transform hover:scale-110 animate-bounce">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
