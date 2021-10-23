import React from 'react';
import styled from 'styled-components';

const CustomInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  font-size: 18px;
  
`
const CustomInputLabel = styled.span`

`
const Input = styled.input`
  height: 60px;
  border-radius: 10px;
  padding: 0 10px;
  font-family: cursive;
`
function CustomInput({
  placeholder,
  inputHandler,
  someText,
  ...rest
}) {
  return (
    <CustomInputWrapper>
      <CustomInputLabel>{someText}</CustomInputLabel>

      <Input
        placeholder={placeholder}
        onChange={(e) => inputHandler(e)}
        {...rest}
      />
    </CustomInputWrapper>
  );
}

export default CustomInput;