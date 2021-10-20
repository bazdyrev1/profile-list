import React from 'react';
import './CustomButtons.css';

function CustomButtons({
  label,
  handleSomething
}) {
  return (
    <div>
     <button onClick={handleSomething}>{label}</button>
    </div>
  );
}

export default CustomButtons;
