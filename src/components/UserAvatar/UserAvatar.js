import React from 'react';
import './UserAvatar.css';

function UserAvatar({
  imageSrc,
}) {
  return (
    <div  className='zone-avatar' >
      <div className="avatar-img">
        <img src={imageSrc} alt='img' />
      </div>
    
    </div>
  );
}

export default UserAvatar;
