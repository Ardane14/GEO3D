import React from "react";

export default function Page2({ goToPage }) {

  const days = [
    { label: "Jour 1", page: 6 },
    { label: "Jour 2", page: 6 },
    { label: "Jour 3", page: 8 },
    { label: "Jour 4", page: 8 },
    { label: "Jour 5", page: 10 },
  ];

  return (
    <div className="page-content sommaire">

      <h1>Sommaire</h1>

      <ul className="sommaire-list">

        {days.map((day, i) => (
          <li
            key={i}
            onClick={() => goToPage(day.page)}
          >
            {day.label}
          </li>
        ))}

      </ul>

    </div>
  );
}