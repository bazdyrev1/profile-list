import React from 'react';
import './CustomTextArea.css';

function CustomTextArea({
  placeholder,
  someText,
  inputHandler,
  classNameArea,

}) {
  return (
    <div className={classNameArea} >
      <span>{someText} </span>
      <textarea
        placeholder={placeholder}
        onChange={(e) => inputHandler(e)}
         >
      </textarea>
    </div>
  );
}

export default CustomTextArea;