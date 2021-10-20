import React from 'react';
import './ImageDonwloadInput.css';

function ImageDonwloadInput({
  saveImg,
}) {
  
  return (
    <div>
      <input type="file" id="imge1"  onChange={ (e) =>saveImg(e)} >
      
      
      </input>
    </div>
  );
}

export default ImageDonwloadInput;