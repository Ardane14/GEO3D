import React from "react";

export default function Page3({ goToPage }) {

  const days = [
    { label: "Jour 1", page: 4 },
    { label: "Jour 2", page: 4 },
    { label: "Jour 3", page: 6 },
    { label: "Jour 4", page: 6 }
  ];

  return (
    <div className="page-content sommaire-bulles">

      {days.map((day, i) => (
        <div
          key={i}
          className={`bubble-row bubble-${i}`}
          onClick={() => goToPage(day.page)}
        >
          <span className="bubble-label">{day.label}</span>
          <div className="bubble"></div>
        </div>
      ))}

    </div>
  );
}