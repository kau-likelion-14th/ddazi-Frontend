import React from "react";
import Profile from "./Profile";
import Status from "./Status";
import "../../styles/MyPage.css";

function MyPage() {
  return (
    <main className="mypage">
      <section className="mypage-container">
        <h1 className="mypage-title">마이페이지</h1>

        <Profile />
        <Status />
      </section>
    </main>
  );
}

export default MyPage;