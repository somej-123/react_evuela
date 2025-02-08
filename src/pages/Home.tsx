import React from "react";
import image from "../../public/image/HomeBackground.jpg"; // 이미지 경로를 확인하세요

const Home: React.FC = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
      }}
    >
      <div className="text-center p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to EVUELA
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow-md">
          Ready to embark on your next adventure? Let EVUELA guide you to
          unforgettable experiences!
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
