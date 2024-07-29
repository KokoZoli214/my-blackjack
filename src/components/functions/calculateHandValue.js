export const calculateHandValue = (cards) => {
    let totalValue = cards.reduce((total, card) => total + card.value, 0);
    let aceCount = cards.filter((card) => card.card === "Ace").length;

    while (aceCount > 0 && totalValue + 10 <= 21) {
      totalValue += 10;
      aceCount--;
    }

    return totalValue;
  };