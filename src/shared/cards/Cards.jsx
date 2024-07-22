import React from "react";
import "../cards/cards.css";

export default function Cards({ card }) {
  if (!card) {
    return null;
  }

  return (
    <button className="card-button">
      <article className="card">
        <header>
          <h2>{card.card} </h2>
        </header>
        <div className="symbols"> {card.symbols} </div>
        <div className="signal"> {card.signal} </div>
        <div class="content">
          <p>
            {" "}
            <sub>" </sub>
            {card.value} "{" "}
          </p>
        </div>
      </article>
    </button>
  );
}
