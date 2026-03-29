import "./PageCard.css";

export default function PageCard({
  FrontComponent,
  BackComponent,
  isFlipped,
  index,
  currentCard,
  total,
  goToPage
}) {

  let zIndex;

  if (index === currentCard) {
    zIndex = total + 1; // carte qui flip
  } else if (index < currentCard) {
    zIndex = index; // déjà tournée
  } else {
    zIndex = total - index; // pile à droite
  }

  return (
    <div
      className={`page ${isFlipped ? "flipped" : ""} ${
        FrontComponent.name === "Page3" ? "page-sommaire-bulles" : ""
      }`}
      style={{ zIndex }}
    >
      <div className="front">
        <FrontComponent goToPage={goToPage} />
        </div>

        <div className="back">
        <BackComponent goToPage={goToPage} />
        </div>
    </div>

  );
}

