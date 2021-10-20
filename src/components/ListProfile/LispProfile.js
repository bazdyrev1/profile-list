import React, { useState } from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import InformationTable from '../InformationTable/InformationTable'
import CustomButtons from '../CustomButtons/CustomButtons'
import CustomInput from '../CustomInput/CustomInput'
import CustomTextArea from '../CustomTextArea/CustomTextArea'
import ImageDonwloadInput from '../ImageDonwloadInput/ImageDonwloadInput'
import './ListProfile.css';

const initialProfileInform = {
  userName: '',
  userOccupation: '',
  userAbout: '',
  userAvatar: '',

}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileInform, setProfileInform] = useState(initialProfileInform);

  console.log(profileInform)
  const inputHandleName = (e) => setProfileInform((prevState) => ({ ...prevState, userName: e.target.value }))
  const inputHandleOccupation = (e) => setProfileInform((prevState) => ({ ...prevState, userOccupation: e.target.value }))
  const inputHandleAbout = (e) => setProfileInform((prevState) => ({ ...prevState, userAbout: e.target.value }))
  const handleOpenDialogWindow = () => setIsOpen(!isOpen);
  const saveImg = (e) => {
     const file = e.target.files[0];
     const blob = URL.createObjectURL(file)
    console.log('blop', blob)
    setProfileInform((prevState) => ({ ...prevState, userAvatar: blob }))

  }
  
  return (
    <div className='main-div'>
      {
        isOpen && (
          <div className='modal-edit-window'>
            <div>
              <span>Create Account</span>
            </div>
            <CustomInput
              someText='Name'
              placeholder='Write your name'
              inputHandler={inputHandleName}
              classNameInput='handleInput'
            />

            <CustomInput
              someText='Occupation'
              placeholder='Write your occupation'
              inputHandler={inputHandleOccupation}
              classNameInput='handleInput'
            />

            <CustomTextArea
              someText='About'
              placeholder='Write something about you'
              inputHandler={inputHandleAbout}
              classNameArea='handleArea'
            />

            <ImageDonwloadInput
              saveImg={saveImg}
            />

            <CustomButtons label='Add profile' handleSomething={handleOpenDialogWindow} />
          </div>
        )
      }
      <div className="profile-wrapper">
        <UserAvatar
          imageSrc={profileInform.userAvatar}
        />

        <InformationTable
          profileInform={profileInform}
        />

        <CustomButtons label='Change' classNameBtn="changeBtn"  handleSomething={handleOpenDialogWindow} />
      </div>
    </div>
  );
}

export default App;
