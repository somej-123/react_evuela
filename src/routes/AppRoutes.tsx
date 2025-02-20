// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Chat from "../pages/Chat";
import Test from "../pages/Test";
import MainInfo from "../pages/info/Maininfo";
import MainLogin from "../pages/login/Mainlogin";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test" element={<Test />} />
        {/* 정보 페이지 */}
        <Route path="/info" element={<MainInfo />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<MainLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
