import React, { useState } from "react";
import PageCard from "./PageCard";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import Page12 from "./components/Page12";
import Page13 from "./components/Page13";
import Page14 from "./components/Page14";
import Page15 from "./components/Page15";
import Page16 from "./components/Page16";
import Page17 from "./components/Page17";
import Page18 from "./components/Page18";
import Page19 from "./components/Page19";
import Page20 from "./components/Page20";

import "./App.css";

const cards = [
  { front: Page1, back: Page2 },
  { front: Page3, back: Page4 },
  { front: Page5, back: Page6 },
  { front: Page7, back: Page8 },
  { front: Page9, back: Page10 },
  { front: Page11, back: Page12 },
  { front: Page13, back: Page14 },
  { front: Page15, back: Page16 },
  { front: Page17, back: Page18 },
  { front: Page19, back: Page20 },
];

export default function App() {

  const [currentCard, setCurrentCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const flipNext = () => {
    if (isAnimating || currentCard >= cards.length) return;

    setIsAnimating(true);
    setCurrentCard(currentCard + 1);

    setTimeout(() => setIsAnimating(false), 900);
  };

  const flipPrev = () => {
    if (isAnimating || currentCard <= 0) return;

    setIsAnimating(true);
    setCurrentCard(currentCard - 1);

    setTimeout(() => setIsAnimating(false), 900);
  };

  // 👉 fonction pour le sommaire
const goToPage = (page) => {

  if (isAnimating) return;

  const targetCard = Math.floor(page / 2);

  if (targetCard === currentCard) return;

  setIsAnimating(true);

  setCurrentCard(targetCard);

  setTimeout(() => setIsAnimating(false), 900);

};

  return (
    <div className="container">
  
        <div className="book">

        {cards.map((card, index) => (
          <PageCard
            key={index}
            FrontComponent={card.front}
            BackComponent={card.back}
            isFlipped={index < currentCard}
            index={index}
            currentCard={currentCard}
            total={cards.length}
            goToPage={goToPage}
          />
        ))}

        <div className="spine"></div>

        </div>

      <div className="controls">

        <button onClick={flipPrev} disabled={currentCard === 0}>
          ← Page précédente
        </button>

        <button onClick={flipNext} disabled={currentCard === cards.length}>
          Page suivante →
        </button>

        </div>

    </div>
  );
}