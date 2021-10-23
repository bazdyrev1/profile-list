import React from 'react';
import styled from 'styled-components';
import PersonAddIcon from '@mui/icons-material/PersonAdd';



const AvatarZoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  justify-content: flex-end;
`

const AvatarShell = styled.div`
  width: 230px;
  height: 230px;
  overflow: hidden;
  border-radius: 50%;
  justify-content: center;
`
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function UserAvatar({
  imageSrc,
}) {
  return (
    <AvatarZoneWrapper>
      <AvatarShell>
        {imageSrc==="0" ? <PersonAddIcon  sx={{ fontSize: 200 }}/> : <AvatarImage src={imageSrc} alt='User avatar' />  }
      </AvatarShell>
    </AvatarZoneWrapper>
  );
}

export default UserAvatar;
