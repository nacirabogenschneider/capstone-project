import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Nacira from './nacirabogenschneider.jpg'
import phone from './phone.svg'
import mail from './mail.svg'
import TextEditor from './TextEditor'
import ProfilePeople from './ProfilePeople'
import { loadFromLocal } from '../utils/localStorage'

export default function Profile({ persons, setPersons, loginData }) {
  const [profilePeople, setProfilePeople] = useState(
    () => loadFromLocal('profilePeople') || [loginData]
  )

  return (
    <ProfileSection style={{ width: 420, alignSelf: 'center' }}>
      <DescriptionSection>
        <StyledImg src={Nacira} alt="profile"></StyledImg>
        <DataSection>
          <h3>
            {loginData.firstName} {loginData.lastName}
          </h3>
          <StyledRow>
            <img src={phone} alt="phone"></img>
            <StyledSpan>{loginData.phone}</StyledSpan>
          </StyledRow>
          <StyledRow>
            <img src={mail} alt="email"></img>
            <StyledSpan>{loginData.email}</StyledSpan>
          </StyledRow>
        </DataSection>
      </DescriptionSection>
      <TextEditor />
      <ProfilePeople
        persons={persons}
        setPersons={setPersons}
        profilePeople={profilePeople}
        setProfilePeople={setProfilePeople}
        loginData={loginData}
      />
    </ProfileSection>
  )
}

const ProfileSection = styled.section`
  position: absolute;
  top: 120px;
  left: 12px;
  right: 12px;
  bottom: 110px;
  height: auto;
  border-radius: 12px;
  background: white;
  opacity: 0.98;
  box-shadow: 0 0 10px 2px #2b7380;
  overflow-y: scroll;
`
const DescriptionSection = styled.section`
  display: flex;
  align-items: center;
`
const StyledSpan = styled.span`
  margin-left: 8px;
`
const DataSection = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
`
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`
const StyledImg = styled.img`
  height: 100px;
  border-radius: 50%;
  margin: 20px;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
