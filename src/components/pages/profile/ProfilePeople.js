import React, { useState } from 'react'
import styled from 'styled-components/macro'
import woman from './woman.svg'
import man from './man.svg'
import child from './child.svg'
import ProfileAddPeople from './ProfileAddPeople'
import pencil from './pencil-alt.svg'
import RenderProfilePeople from './RenderProfilePeople'

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
      <RenderProfilePeople
        loginData={loginData}
        profilePeople={profilePeople}
      />

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

const StyledImage = styled.img`
  padding: 8px;
`
const SyledWrapper = styled.div`
  display: flex;
`
