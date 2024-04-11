 import React from 'react';
import './ChametzCounter.css'; // Import CSS file for styling

// Define the ChametzCounter component as a functional component
const ChametzCounter = ({ count }) => {
  // Define the JSX structure of the ChametzCounter component
  return (
    <div className="chametz-counter">
      {/* Render chametz icons based on the count */}
      {Array.from({ length: count }, (_, index) => (
        <img
          key={index}
          src="/chametz-icon.png"
          alt="Chametz Icon"
          className="chametz-icon"
        />
      ))}
    </div>
  );
}

// Export the ChametzCounter component to make it available for use in other files
export default ChametzCounter;

