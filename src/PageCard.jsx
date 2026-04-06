import "./PageCard.css";

export default function PageCard({
  FrontComponent,
  BackComponent,
  isFlipped,
  index,
  currentCard,
  total,
  goToPage,
  animatingIndex
}) {

  let zIndex;

  if (index === animatingIndex) {
    zIndex = 1000;

  } else if (index < currentCard) {
    // pages à gauche
    zIndex = index;

  } else {
    // pages à droite
    zIndex = total - index;
  }

const isCover = index === 0 || index === total - 1;

  return (
    <div
     className={`page 
      ${isFlipped ? "flipped" : ""} 
      ${isCover ? "cover" : ""}
      ${FrontComponent.name === "Page3" ? "page-sommaire-bulles" : ""}
    `}
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

