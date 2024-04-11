import React, { useState, useEffect } from 'react';
import './MatchingGame.css'; // Import CSS file for styling

// Define the symbols used in the matching game
const symbols = ['🍷', '🍞', '🕊️', '🌿'];

// Define the MatchingGame component as a functional component
const MatchingGame = () => {
  // Define state variables using useState hook
  const [cards, setCards] = useState([]); // State for storing the cards
  const [selectedCards, setSelectedCards] = useState([]); // State for selected cards
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
    if (selectedCards.length === 2 || cards[index].matched || cards[index].revealed) return; // Return if two cards are already selected or the card is already matched or revealed

    const updatedCards = [...cards]; // Create a copy of the cards array
    updatedCards[index].revealed = true; // Set the selected card to revealed
    setCards(updatedCards); // Update the state of cards
    setSelectedCards([...selectedCards, index]); // Add the selected card to selectedCards

    if (selectedCards.length === 1) { // Check if two cards are selected
      setTimeout(() => checkMatch(), 1000); // Check for a match after a delay of 1 second
    }
  }

  // Function to check if the selected cards match
  const checkMatch = () => {
    const [firstIndex, secondIndex] = selectedCards; // Destructure the selected card indices
    if (cards[firstIndex].symbol === cards[secondIndex].symbol) { // If symbols match
      const updatedCards = [...cards]; // Create a copy of the cards array
      updatedCards[firstIndex].matched = true; // Set the first card as matched
      updatedCards[secondIndex].matched = true; // Set the second card as matched
      setCards(updatedCards); // Update the state of cards
      setMatchedPairs(matchedPairs + 1); // Increment matched pairs count
    } else {
      const updatedCards = [...cards]; // Create a copy of the cards array
      updatedCards[firstIndex].revealed = false; // Hide the first card
      updatedCards[secondIndex].revealed = false; // Hide the second card
      setCards(updatedCards); // Update the state of cards
    }

    setSelectedCards([]); // Reset selectedCards
  }

  // Function to reset the game
  const resetGame = () => {
    generateSymbolCards(); // Regenerate symbol cards
    setMatchedPairs(0); // Reset the matched pairs count
    setSelectedCards([]); // Reset selectedCards
  }

  // Helper function to determine card content based on state
  const getCardContent = (card) => {
    return card.revealed || card.matched ? card.symbol : '?';
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
            {getCardContent(card)} {/* Determine card content */}
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
