import React from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`
const Label = styled.span`

`
const TextArea = styled.textarea`
  height: 150px;
  border-radius: 10px;
  resize: NONE;
  border: 2px solid black;
  padding: 5px 10px;
  font-family: cursive;
`
function CustomTextArea({
  placeholder,
  someText,
  inputHandler,
}) {
  return (
    <TextAreaWrapper>
      <Label>{someText}</Label>
      <TextArea
        placeholder={placeholder}
        onChange={(e) => inputHandler(e)}
         >
      </TextArea>
    </TextAreaWrapper>
  );
}

export default CustomTextArea;