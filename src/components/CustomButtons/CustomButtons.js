import React from 'react';
import './CustomButtons.css';

function CustomButtons({
  label,
  handleSomething,
  classNameBtn
}) {
  console.log(classNameBtn)
  return (
    <div>
     <button onClick={handleSomething} className={classNameBtn}>{label}</button>
     
    </div>
  );
}

export default CustomButtons;
