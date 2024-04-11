 import React from 'react';
import './House.css'; // Import CSS file for styling

// Define the House component as a functional component
const House = ({ onRoomClick }) => {
  // Define the JSX structure of the House component
  return (
    <div className="house">
      {/* Render clickable rooms with event handler */}
      <div className="room" onClick={() => onRoomClick(1)}>
        <img src="/master-bedroom.jpg" alt="Room 1" className="room-image" />
        <div className="room-label">Room 1</div>
      </div>
      <div className="room" onClick={() => onRoomClick(2)}>
        <img src="/living-room.jpg" alt="Room 2" className="room-image" />
        <div className="room-label">Room 2</div>
      </div>
	   <div className="room" onClick={() => onRoomClick(3)}>
        <img src="/kitchen.jpg" alt="Room 3" className="room-image" />
        <div className="room-label">Room 3</div>
      </div>
	   <div className="room" onClick={() => onRoomClick(4)}>
        <img src="/kids-room.jpg" alt="Room 4" className="room-image" />
        <div className="room-label">Room 4</div>
      </div>
	   <div className="room" onClick={() => onRoomClick(5)}>
        <img src="/home-office.jpg" alt="Room 5" className="room-image" />
        <div className="room-label">Room 5</div>
      </div>
      {/* Add more rooms as needed */}
    </div>
  );
}

// Export the House component to make it available for use in other files
export default House;

