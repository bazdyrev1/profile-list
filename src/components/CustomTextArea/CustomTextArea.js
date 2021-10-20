import React from 'react';
import './CustomTextArea.css';

function CustomTextArea({
  placeholder,
  someText,
  inputHandler,
  

}) {
  return (
    <div>
      <span>{someText} </span>
      <textarea placeholder={placeholder} onChange={(e) => inputHandler(e)} >
        
      </textarea>
      
      
  
      
    </div>
  );
}

export default CustomTextArea;