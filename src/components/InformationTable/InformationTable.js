import React from 'react';
import './InformationTable.css';

function InformationTable({
  profileInform,
}) {
  console.log('infomtable',profileInform)
  return (
    
    <div className='user-information'>
      
      <span className='hOneText'>
         {profileInform.userName} 
      </span>
      <span className='hTwoText'>
      {profileInform.userOccupation} 
      </span>
      <span  className='hOneText'>
        About User 
      </span>
      <span className='hTwoText'>
      {profileInform.userAbout} 
      </span>
    </div>
  );
}

export default InformationTable;