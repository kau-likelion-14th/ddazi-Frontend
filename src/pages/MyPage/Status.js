import React from "react";
import StatCard from "./StatCard";

function Status() {
  const stats = [
    {
      icon: "🔥",
      title: "연속 달성일",
      value: 0,
      unit: "일",
    },
    {
      icon: "🎯",
      title: "최근 30일 달성률",
      value: 0,
      unit: "%",
    },
    {
      icon: "⭐",
      title: "가장 많이 완료한 요일",
      value: "토요일",
      unit: "",
    },
  ];

  return (
    <section className="status-section">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </section>
  );
}

export default Status;