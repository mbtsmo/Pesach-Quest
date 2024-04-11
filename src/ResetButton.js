 import React from 'react';
import './ResetButton.css'; // Import CSS file for styling

// Define the ResetButton component as a functional component
const ResetButton = ({ onClick }) => {
  // Define the JSX structure of the ResetButton component
  return (
    <button className="reset-button" onClick={onClick}>
      Reset Game
    </button>
  );
}

// Export the ResetButton component to make it available for use in other files
export default ResetButton;

