import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import Cards from "../../shared/cards/Cards";
import SelectCardFunction from "../select-card-function/SelectCardFunction";
import "../gamePage/gamepage.css";
import "../gameButton/gamebutton.css";

export default function GamePage() {
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [gameResult, setGameResult] = useState("");
  const [playerCash, setPlayerCash] = useState(10000);
  const [aiCash, setAiCash] = useState(1000000);
  const [potValue, setPotValue] = useState(0);
  const [endGame, setEndGame] = useState(false);  //if somebody won or draw
  const [roundEnded, setRoundEnded] = useState(false); //buttons disabled due to round ended
  const [roundContinue, setRoundContinue] = useState(true);

  const [playerCards, setPlayerCards] = useState([
    SelectCardFunction(),
    SelectCardFunction(),
  ]);

  const [aiCards, setAiCards] = useState([
    SelectCardFunction(),
    SelectCardFunction(),
  ]);
  // const maxPlayerCards = 5;

  const calculateHandValue = (cards) => {
    let totalValue = cards.reduce((total, card) => total + card.value, 0);
    let aceCount = cards.filter(card => card.card === "Ace").length;

    while (aceCount > 0 && totalValue + 10 <= 21) {
      totalValue += 10;
      aceCount--;
    }

    return totalValue;
  };
  

  const totalCardValue = calculateHandValue(playerCards);
  const totalAiCardValue = calculateHandValue(aiCards);

    useEffect( () => {
      if (aiCash <= 0 && potValue <= 0 ) {
        setGameResult("Gratulálok, Ön elnyerte az összes zsetont!");
        
  
      } else if (playerCash <= 0 && potValue <= 0) {
        setGameResult("Sajnos most nem volt szerencséd, a ház vitt mindent.");

      }
    }, [aiCash, playerCash, potValue] ) 

  const drawCard = () => {
    if (!endGame && potValue > 0) {
      const nextCard = SelectCardFunction();
      setPlayerCards([...playerCards, nextCard]);
      if (
        playerCards.length === playerCards ||
        totalCardValue + nextCard.value >= 21
      ) {
        setEndGame(true);
        setRoundEnded(true);
        determineWinner(totalCardValue + nextCard.value, totalAiCardValue);
      }
    }
  };

  const endRound = () => {
    setEndGame(true);
    setRoundEnded(true);
    determineWinner(totalCardValue, totalAiCardValue);
  };

  const determineWinner = (playerValue, aiValue) => {

    if (playerValue > 21) {
      setAiScore(aiScore + 1);
      setGameResult("Az AI nyert!");
      setAiCash(aiCash + potValue);
      

    } 

    else if (aiValue > 21 || playerValue > aiValue) {
      setPlayerScore(playerScore + 1);
      setGameResult("Ön nyert!");
      setPlayerCash(playerCash + potValue);

    } else if (playerValue < aiValue) {
      setAiScore(aiScore + 1);
      setGameResult("Az AI nyert!");
      setAiCash(aiCash + potValue);
    } 

    else {
      setGameResult("Döntetlen");
      setPlayerCash(playerCash + potValue / 2);
      setAiCash(aiCash + potValue / 2);
    }
    setPotValue(0);
   console.log("totalAiCardValue")
   console.log(totalAiCardValue)
   console.log("totalCardValue")
   console.log(totalCardValue)
  };

  const bet = () => {
    if (playerCash > 0 && aiCash > 0) {
      const betAmount = 1000;
      setPotValue(potValue + 2 * betAmount);
      setPlayerCash(playerCash - betAmount);
      setAiCash(aiCash - betAmount);
      setRoundContinue(false)
    }
  };

  const double = () => {
    if (playerCash > 0 && aiCash > 0) {
      const betAmount = potValue;
      setPotValue(potValue + 2 * potValue);
      setPlayerCash(playerCash - betAmount);
      setAiCash(aiCash - betAmount);
      setRoundContinue(false)
    }
  };

  const allIn = () => {
    if (playerCash > 0 && aiCash > 0) {
      const betAmount = Math.min(playerCash, aiCash);
      setPotValue(potValue + 2 * betAmount);
      setPlayerCash(playerCash - betAmount);
      setAiCash(aiCash - betAmount);
      setRoundContinue(false)
    }
  };



  const newGame = () => {
    setPlayerCards([SelectCardFunction(), SelectCardFunction()]);
    setAiCards([SelectCardFunction(), SelectCardFunction()]);
    setEndGame(false);
    setRoundEnded(false);
    setGameResult("");
    setPotValue(0);
    setRoundContinue(true)
    if(aiCash <= 0 || playerCash <= 0){
      setAiCash(1000000)
      setPlayerCash(10000)
      setAiScore(0)
      setPlayerScore(0)
   }
  }


  return (
    <div>
      <div className="blackjack-game-area">

      <div className="pot-area">
            <div className="ai-cash">
                <p>A ház zsetonja: {aiCash} </p>
            </div>
            <div className="pot-cash">
                <p>A pot értéke: {potValue} </p>
            </div>
            <div className="player-cash">
                <p>Játékos zsetonja: {playerCash} </p>
            </div>
          </div>

        <div className="left-side">

          <div className="ai-area">
            <Cards card={aiCards[0]} />
            {endGame && <Cards card={aiCards[1]} />}
          </div>

          <div className="left-side-down">

            <div className="player-area">

              {playerCards.map((card, index) => (
                <Cards key={index} card={card} />
              ))}

            </div>

            <div className="nextcard-btn-container">

              <button
                className="nextcard-btn"
                onClick={drawCard}
                disabled={endGame || roundEnded || roundContinue}
              >
                Hit
              </button>

              <button 
                className="nextcard-btn"
                onClick={endRound}
                disabled={roundEnded || roundContinue}>
                Stand
              </button>

              <button
                className="nextcard-btn"
                onClick={bet}
                disabled={roundEnded || playerCash === 0 || aiCash === 0 } >
                Bet
              </button>

              <button
                className="nextcard-btn"
                onClick={double}
                disabled={roundEnded || playerCash === 0 || aiCash === 0 || potValue === 0 || potValue > playerCash || potValue > aiCash} >
                Double
              </button>

              <button
                className="nextcard-btn"
                onClick={allIn}
                disabled={roundEnded || playerCash == 0 || aiCash === 0 } >
                All in
              </button>

            </div>

          </div>
        </div>
       
        <div className="right-side">
          <div className="upper">
            <div className="navbar">
              <NavBar />
            </div>
            <div className="display">
              <div>
                <p>Eredmény:</p>
              </div>

              <p>Ház vs Játékos </p>

              <div>
                <span className="ai-score"> {aiScore} </span>
                <span>:</span>
                <span className="plyer-score"> {playerScore} </span>
              </div>
            </div>
          </div>
          <div className="display">
            <div>
              <p>A kártyáid jelenlegi értéke:</p>
            </div>
            <div>
              <p>{totalCardValue}</p>
            </div>
          </div>
          <div className="game-text">
            <p>{gameResult}</p>
          </div>
          <div className="btn">
            <button
            className="game-button"
            onClick={newGame}
            disabled={potValue > 0 || !endGame}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}