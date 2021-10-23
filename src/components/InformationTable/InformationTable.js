import React from 'react';
import styled from 'styled-components';

const UserInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width:  100%;
  height: 450px;

`
const LargeText = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin: 0 20%;
  text-align: center;
`
const SmallText = styled.span`
  font-size: 20px;
  margin: 0px 50px 20px 50px;
  text-align: center;
`
function InformationTable({
  profileInform,
}) {
  return (
    
    <UserInformationWrapper>
      <LargeText>
         {profileInform.userName || 'This is your name'} 
      </LargeText>

      <SmallText>
      {profileInform.userOccupation || 'This yor occupation'} 
      </SmallText>

      <LargeText>
        About User 
      </LargeText>

      <SmallText>
      {profileInform.userAbout || "Some information about your self"}  
      </SmallText>
    </UserInformationWrapper>
  );
}

export default InformationTable;