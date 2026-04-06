import React from "react";
import "./Page6.css";

export default function Page6() {
  return (
    <div className="page6">

      <h1 className="title">La Tomographie</h1>

      <div className="note">
        <strong>En quelques mots</strong>
        <p>
          Une méthode qui permet d’analyser le sol sans creuser à l’aide
          de signaux électriques.
        </p>
      </div>

      <div className="note">
        <strong>Résultat</strong>
        <p>Une carte de résistivité</p>
      </div>

      <div className="bottom">

        <div className="card sketch">
          <p className="card-title">Comment ça marche ?</p>
          <div className="fake-drawing"></div>
        </div>

        <div className="card photo">
          <p className="card-title">En pratique</p>
          <div className="fake-image"></div>
        </div>

      </div>

    </div>
  );
}