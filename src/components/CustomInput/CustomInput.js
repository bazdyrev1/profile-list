import React from 'react';
import './CustomInput.css';

function CustomInput({
  placeholder,
  inputHandler,
  someText,
  ...rest
}) {
  return (
    <div>
      <span>{someText} </span>
      <input 
        placeholder={placeholder} 
        onChange={(e) => inputHandler(e)}
        {...rest}
      />
    </div>
  );
}

export default CustomInput;