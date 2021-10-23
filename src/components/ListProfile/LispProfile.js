import React, { useState } from 'react';
import styled from 'styled-components'
import UserAvatar from '../UserAvatar/UserAvatar';
import InformationTable from '../InformationTable/InformationTable'
import CustomButtons from '../CustomButtons/CustomButtons'
import CustomInput from '../CustomInput/CustomInput'
import CustomTextArea from '../CustomTextArea/CustomTextArea'
import ImageDonwloadInput from '../ImageDonwloadInput/ImageDonwloadInput'
import CloseIcon from '@mui/icons-material/Close';


const initialProfileInform = {
  userName: '',
  userOccupation: '',
  userAbout: '',
  userAvatar: '0',
  fileName: ''
}

const ListProfileWrapper = styled.div`
  font-family: cursive;
`
const BacketModalWindow = styled.div`

`

const BackgroundModalWindow = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000b8;
    
`
const ModalWindow = styled.div`
  width: 500px;
  height: 800px;
  background-color: white;
  border: 2px solid black;
  margin: 20px auto;
  z-index: 5;
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
`
const ModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;s
`
const ModalHeader = styled.span`
  font-size: 30px;
  margin: 0 20%;
`
const ProfileWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 800px;
  background-color: white;
  border: 2px solid black;
  margin: 20px auto;
  position: absolute;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 0;
`

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileInform, setProfileInform] = useState(initialProfileInform);

  const inputHandleName = (e) => setProfileInform((prevState) => ({ ...prevState, userName: e.target.value }))
  const inputHandleOccupation = (e) => setProfileInform((prevState) => ({ ...prevState, userOccupation: e.target.value }))
  const inputHandleAbout = (e) => setProfileInform((prevState) => ({ ...prevState, userAbout: e.target.value }))
  const handleOpenDialogWindow = () => setIsOpen(!isOpen);
  const saveImg = (e) => {
    const file = e.target.files[0];
    console.log('file', file)
    const blob = URL.createObjectURL(file)
    setProfileInform((prevState) => ({ ...prevState, userAvatar: blob }))
    const fileName = file.name
    setProfileInform((prevState) => ({ ...prevState, fileName: fileName }))
  }

  return (
    <ListProfileWrapper>
      {
        isOpen && (
          <BacketModalWindow>
            <BackgroundModalWindow onClick={handleOpenDialogWindow}>
            </BackgroundModalWindow>
            <ModalWindow>
              <ModalHeaderWrapper>
                <ModalHeader>Create Account</ModalHeader>
                <CloseIcon onClick={handleOpenDialogWindow}></CloseIcon>
              </ModalHeaderWrapper>

              <CustomInput
                someText='Name'
                placeholder='Write your name'
                inputHandler={inputHandleName}
              />

              <CustomInput
                someText='Occupation'
                placeholder='Write your occupation'
                inputHandler={inputHandleOccupation}
              />

              <CustomTextArea
                someText='About'
                placeholder='Write something about you'
                inputHandler={inputHandleAbout}
              />

              <ImageDonwloadInput
                saveImg={saveImg}
                fileName={profileInform.fileName}
              />

              <CustomButtons label='Add profile' handleSomething={handleOpenDialogWindow} />
            </ModalWindow>
          </BacketModalWindow>
        )
      }

      <ProfileWrapper>
        <UserAvatar
          imageSrc={profileInform.userAvatar}
        />

        <InformationTable
          profileInform={profileInform}
        />

        <CustomButtons
          label='Change'
          handleSomething={handleOpenDialogWindow}
        />
      </ProfileWrapper>
    </ListProfileWrapper>
  );
}

export default App;
