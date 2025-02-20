import React, { useEffect } from "react";
import { create } from "zustand";
import image from "../../../public/image/HomeBackground.jpg"; // 이미지 경로를 확인하세요

const useStore = create<any>((get, set) => ({
  isLoggedIn: false,
  loggedName: "",
  loggedEmail: "",
  loggedPhone: "",
  loggedAddress: "",
  loggedBirth: "",
  loggedGender: "",
  loggedProfile: "",

  setIsLoggedIn: (isLoggedIn: boolean) => {
    console.log("Setting isLoggedIn to", isLoggedIn);
    set({ isLoggedIn: isLoggedIn });
  },

  toggleLogin: () => {
    const { isLoggedIn } = get();
    const newIsLoggedIn = !isLoggedIn;
    set({ isLoggedIn: newIsLoggedIn });
    console.log("Toggled isLoggedIn to", newIsLoggedIn);
  },
}));

const MainLogin: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn, toggleLogin } = useStore();

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
      }}
    >
      <div className="text-center p-10 rounded-lg shadow-2xl backdrop-blur-sm max-w-md w-full">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold text-white mb-6 drop-shadow-2xl animate-fadeIn">
          EVUELA
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="ID"
            className="w-full text-white px-4 py-2 border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-white px-4 py-2 border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-full bg-blue-600 mt-6 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            onClick={() => {
              console.log("로그인버튼 클릭 ");
              toggleLogin();
            }}
          >
            Login
          </button>
          <button className="w-full bg-gray-600 mt-1 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
