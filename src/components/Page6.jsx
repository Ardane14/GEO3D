import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Page6.css";
import MapVideo from "../assets/Maps.mp4";

export default function Page6() {
  const [activeCard, setActiveCard] = useState(null);

  const renderCardContent = (type) => {
    if (type === "video") {
      return (
        <>
          <p className="card-title">Comment ça marche ?</p>
          <div className="media-container">
            <video controls src={MapVideo} autoPlay />
          </div>
        </>
      );
    }
    return (
      <>
        <p className="card-title">En pratique</p>
        <div className="media-container three-container">
          <div className="three-placeholder">Zone 3D</div>
        </div>
      </>
    );
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setActiveCard(null);
  };

  return (
    <div className="page6">
      <h1 className="title">La Tomographie</h1>

      <div className="note">
        <strong>En quelques mots</strong>
        <p>Une méthode qui permet d’analyser le sol sans creuser à l’aide de signaux électriques.</p>
      </div>

      <div className="note">
        <strong>Résultat</strong>
        <p>
          Une carte de{" "}
          <span className="tooltip-word">
            résistivité
            <span className="tooltip-card">
              La résistivité est une mesure de la capacité d’un matériau à s’opposer au passage du courant électrique.
              <br /><br />
              Plus elle est élevée, moins le courant circule facilement.
            </span>
          </span>
        </p>
      </div>

      <div className="bottom">
        <div 
          className={`card sketch ${activeCard === "video" ? "active" : ""}`}
          onClick={() => setActiveCard("video")}
        >
          {activeCard === "video" 
            ? createPortal(
                <div className="card active">
                  <button className="close-btn" onClick={handleClose}>×</button>
                  {renderCardContent("video")}
                </div>, 
                document.body
              )
            : renderCardContent("video")
          }
        </div>

        <div 
          className={`card photo ${activeCard === "three" ? "active" : ""}`}
          onClick={() => setActiveCard("three")}
        >
          {activeCard === "three" 
            ? createPortal(
                <div className="card active">
                  <button className="close-btn" onClick={handleClose}>×</button>
                  {renderCardContent("three")}
                </div>, 
                document.body
              )
            : renderCardContent("three")
          }
        </div>
      </div>
    </div>
  );
}