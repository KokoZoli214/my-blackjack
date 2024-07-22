import React from "react";
import cardsData from "../../assets/cards.json";



export default function SelectCardFunction() {
  const randomIndex = Math.floor(Math.random() * cardsData.length);
  return cardsData[randomIndex];
}
