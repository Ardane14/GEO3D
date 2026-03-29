import React from "react";

export default function Page5({ goToPage }) {
  
  const days = [
    { label: "Jour 5", page: 4 },
    { label: "Jour 6", page: 4 },
    { label: "Jour 7", page: 6 }
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