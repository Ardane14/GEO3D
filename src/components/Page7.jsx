import React from "react";
import "./Page7.css";
import imgTomographie from "../assets/tomographie.png";

export default function Page7() {
  return (
    <div className="page7">

      <div className="image-block">
        <div className="image-placeholder">
          <img src={imgTomographie} alt="Ajouter Three JS ici" />
        </div>
      </div>

      <div className="note">
        <strong>Interprétation</strong>
        <p>
          Grâce à cette représentation, on peut guider l’analyse vers des zones
          spécifiques présentant des anomalies intéressantes.
        </p>
      </div>

      <div className="note">
        <strong>Une journée bien productive !</strong>
        <p>
          Zone de commentaire :
        </p>
      </div>

    </div>
  );
}