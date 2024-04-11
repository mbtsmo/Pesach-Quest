import React, { useState, useEffect } from 'react';
import './MatchingGame.css'; // Import CSS file for styling

// Define the symbols used in the matching game
const symbols = ['🍷', '🍞', '🕊️', '🌿'];

// Define the MatchingGame component as a functional component
const MatchingGame = () => {
  // Define state variables using useState hook
  const [cards, setCards] = useState([]); // State for storing the cards
  const [firstCard, setFirstCard] = useState(null); // State for the first selected card
  const [secondCard, setSecondCard] = useState(null); // State for the second selected card
  const [matchedPairs, setMatchedPairs] = useState(0); // State for the number of matched pairs

  // useEffect hook to initialize the game when the component mounts
  useEffect(() => {
    generateSymbolCards(); // Call the function to generate symbol cards
  }, []);

  // Function to generate symbol cards for the game
  const generateSymbolCards = () => {
    const newCards = symbols.concat(symbols).sort(() => Math.random() - 0.5); // Duplicate and shuffle symbols
    const initialCardsState = newCards.map(symbol => ({ symbol, revealed: false, matched: false })); // Create initial state for cards
    setCards(initialCardsState); // Set the initial state of cards
  }

  // Function to reveal a card when clicked
  const revealCard = (index) => {
    if (firstCard !== null && secondCard !== null) return; // Return if two cards are already selected
    if (cards[index].matched) return; // Return if the card is already matched

    const updatedCards = [...cards]; // Create a copy of the cards array
    updatedCards[index].revealed = true; // Set the selected card to revealed
    setCards(updatedCards); // Update the state of cards

    if (firstCard === null) {
      setFirstCard(index); // Set the first selected card
    } else {
      setSecondCard(index); // Set the second selected card
      checkMatch(); // Call the function to check if the selected cards match
    }
  }

  // Function to check if the selected cards match
  const checkMatch = () => {
    if (cards[firstCard].symbol === cards[secondCard].symbol) { // If symbols match
      const updatedCards = [...cards]; // Create a copy of the cards array
      updatedCards[firstCard].matched = true; // Set the first card as matched
      updatedCards[secondCard].matched = true; // Set the second card as matched
      setCards(updatedCards); // Update the state of cards
      setMatchedPairs(matchedPairs + 1); // Increment matched pairs count
    } else {
      setTimeout(() => {
        const updatedCards = [...cards]; // Create a copy of the cards array
        updatedCards[firstCard].revealed = false; // Hide the first card
        updatedCards[secondCard].revealed = false; // Hide the second card
        setCards(updatedCards); // Update the state of cards
      }, 1000); // Delay hiding unmatched cards for 1 second
    }

    setFirstCard(null); // Reset the first selected card
    setSecondCard(null); // Reset the second selected card
  }

  // Function to reset the game
  const resetGame = () => {
    generateSymbolCards(); // Regenerate symbol cards
    setFirstCard(null); // Reset the first selected card
    setSecondCard(null); // Reset the second selected card
    setMatchedPairs(0); // Reset the matched pairs count
  }

  // Define the JSX structure of the MatchingGame component
  return (
    <div className="matching-game">
      <h2>Matching Game</h2>
      <div className="symbol-grid">
        {/* Render symbol cards */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`symbol-card ${card.revealed ? 'revealed' : ''} ${card.matched ? 'matched' : ''}`}
            onClick={() => revealCard(index)} // Attach event handler to reveal card on click
          >
            {card.revealed || card.matched ? card.symbol : '?'} {/* Display symbol if revealed or matched, otherwise display '?' */}
          </div>
        ))}
      </div>
      {/* Display message when all pairs are matched */}
      {matchedPairs === symbols.length / 2 && <p>Congratulations! You matched all the pairs!</p>}
      {/* Render reset button */}
      <button onClick={resetGame}>Reset Matching Game</button>
    </div>
  );
}

// Export the MatchingGame component to make it available for use in other files
export default MatchingGame;
 
