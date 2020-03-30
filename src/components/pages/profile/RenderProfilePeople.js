import React from 'react'
import styled from 'styled-components/macro'
import woman from './woman.svg'
import man from './man.svg'
import child from './child.svg'
import uuid from 'react-uuid'

export default function RenderProfilePeople({ profilePeople }) {
  return profilePeople.map(person => (
    <PersonWrapper key={uuid()} id={uuid()}>
      {person.state === 'woman' ? (
        <StyledImg
          src={woman}
          style={{ display: 'block' }}
          alt={person.state}
        ></StyledImg>
      ) : person.state === 'man' ? (
        <StyledImg
          src={man}
          style={{ display: 'hidden' }}
          alt={person.state}
        ></StyledImg>
      ) : (
        <StyledImgChild
          src={child}
          style={{ display: 'hidden' }}
          alt={person.state}
        ></StyledImgChild>
      )}
      <span>
        {person.firstName} {person.lastName}
      </span>
      <StyledSpan>{person.class}</StyledSpan>
    </PersonWrapper>
  ))
}
const PersonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  height: 36px;
  align-items: center;
  padding: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #cfcfcf;
`
const StyledImg = styled.img`
  height: 22px;
`
const StyledImgChild = styled.img`
  height: 18px;
`
const StyledSpan = styled.span`
  margin-left: 16px;
`
