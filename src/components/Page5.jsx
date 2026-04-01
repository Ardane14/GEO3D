import React from "react";

export default function Page5({ goToPage }) {
  
  const days = [
    { label: "Eléctromagnetique", page: 14 },
    { label: "Sismique", page: 16 },
    { label: "Spectrométrie", page: 18 },
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