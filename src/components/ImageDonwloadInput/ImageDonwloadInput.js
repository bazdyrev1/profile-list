import React from 'react';
import styled from 'styled-components';

const InputFileWrapper = styled.div`
font-family: cursive;
width: 350px;
`
const InputFile = styled.input`
display: none;
`
const InputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const ChooseSpan = styled.span`
border: 1px solid black;
border-radius: 10px;
height: 25px;
width: 100px;
text-align: center;

padding: 10px 0px;
`
const FileName = styled.span`
padding: 10px 0;
`

function ImageDonwloadInput({
  saveImg,
  fileName,
}) {

  return (
    <InputFileWrapper>
      <InputLabel htmlFor='img1'>

        <ChooseSpan>Choose </ChooseSpan>

        <FileName>{fileName || 'Some your file'}</FileName>

      </InputLabel>

      <InputFile type="file" id="img1" onChange={(e) => saveImg(e)} />
    </InputFileWrapper>
  );
}

export default ImageDonwloadInput;