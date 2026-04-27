import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/Mainpage/MainPage";
import Footer from "./components/Footer";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <div className="layout">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;