import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/Mainpage/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;