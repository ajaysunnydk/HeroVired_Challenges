import React from 'react';

const Popup = ({ challenge, onClose }) => (
  <div className="popup-ctn">
    <h2>{challenge.title}</h2>
    <p>Score: {challenge.score}</p>
    <p>Description: {challenge.description}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default Popup;
