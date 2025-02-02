// src/App.tsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./common/Header";
import Footer from "./common/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
