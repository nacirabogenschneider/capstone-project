import React from 'react'
import { StyledImage, StyledContent, StyledHeader } from './School.styles'
import uuid from 'react-uuid'

export default function School({
  primeSchools,
  currentSchoolImg,
  phone,
  mail,
}) {
  const jsonString = localStorage.getItem('schoolOfChoice')
  const data = JSON.parse(jsonString)
  const schoolData = data.split(',')
  const schoolName = schoolData[0]

  return primeSchools
    .filter(school => school.name === schoolName)
    .map(school => (
      <React.Fragment key={uuid}>
        <StyledHeader key={uuid()}>
          <StyledImage
            src={currentSchoolImg}
            alt="current school"
          ></StyledImage>
          <div>{school.name}</div>
        </StyledHeader>
        <StyledContent key={uuid()}>
          <StyledImage src={mail} alt="mail"></StyledImage>
          <div>{school.address}</div>
        </StyledContent>
        <StyledContent key={uuid()}>
          <StyledImage src={phone} alt="phone"></StyledImage>
          <div>{school.phone}</div>
        </StyledContent>
      </React.Fragment>
    ))
}
