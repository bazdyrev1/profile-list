import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`

`
const Button = styled.button`
  width: 115px;
  height: 50px;
  font-size: 18px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;}
  margin: 14px;
  font-family: cursive;
`

function CustomButtons({
  label,
  handleSomething,
}) {
  return (
    <ButtonWrapper>
      <Button onClick={handleSomething}>{label}</Button>
    </ButtonWrapper>
  );
}

export default CustomButtons;
