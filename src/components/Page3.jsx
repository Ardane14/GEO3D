import React from "react";

export default function Page3({ goToPage }) {

  const days = [
    { label: "Tomographie", page: 6 },
    { label: "Magnétique", page: 8 },
    { label: "Géoradar", page: 10 },
    { label: "Gravimetrie", page: 12 },
    
  ];

  return (
    <div className="page-content sommaire-bulles">

      <h1>Sommaire</h1>

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