import React, { useState } from 'react'
import styled from 'styled-components/macro'
import woman from './woman.svg'
import man from './man.svg'
import child from './child.svg'
import ProfileAddPeople from './ProfileAddPeople'
import pencil from './pencil-alt.svg'

export default function ProfilePeople({ loginData }) {
  const [profilePeople, setProfilePeople] = useState([loginData])
  const [editPeople, setEditPeople] = useState('none')
  function handlePencilClick() {
    setEditPeople('block')
  }

  return (
    <PersonSection>
      <SyledWrapper>
        <h3>Profil Personen</h3>
        <StyledImage
          src={pencil}
          alt="edit note"
          onClick={handlePencilClick}
        ></StyledImage>
      </SyledWrapper>
      <PersonWrapper>
        <StyledImg src={woman} alt="woman"></StyledImg>
        <span>
          {loginData.firstName} {loginData.lastName}
        </span>
      </PersonWrapper>

      <ProfileAddPeople
        setProfilePeople={setProfilePeople}
        editPeople={editPeople}
        woman={woman}
        man={man}
        child={child}
        setEditPeople={setEditPeople}
        profilePeople={profilePeople}
      />
    </PersonSection>
  )
}
const PersonSection = styled.section`
  margin: 12px;
`
const StyledImg = styled.img`
  height: 22px;
`
const PersonWrapper = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  padding: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const StyledImage = styled.img`
  padding: 8px;
`
const SyledWrapper = styled.div`
  display: flex;
`
