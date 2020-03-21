import React from 'react'
import { StyledImage, StyledContent, StyledHeader } from './School.styles'
import uuid from 'react-uuid'

export default function School({
  primeSchools,
  selectedSchool,
  currentSchoolImg,
  phone,
  mail,
}) {
  const selectedSchoolByChoiceInArray = findFullSchoolElement()
  console.log(selectedSchool)
  return (
    <React.Fragment key={uuid}>
      <StyledHeader key={uuid()}>
        <StyledImage src={currentSchoolImg} alt="current school"></StyledImage>
        <div>{selectedSchoolByChoiceInArray[0].name}</div>
      </StyledHeader>
      <StyledContent key={uuid()}>
        <StyledImage src={mail} alt="mail"></StyledImage>
        <div>{selectedSchoolByChoiceInArray[0].address}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={phone} alt="phone"></StyledImage>
        <div>{selectedSchoolByChoiceInArray[0].phone}</div>
      </StyledContent>
    </React.Fragment>
  )

  function findFullSchoolElement() {
    const selectedSchoolNameAndAddress = selectedSchool.split(',')
    const selectedSchoolName = selectedSchoolNameAndAddress[0]
    const selectedSchoolByChoiceInArray = primeSchools.filter(
      school => school.name === selectedSchoolName
    )
    return selectedSchoolByChoiceInArray
  }
}
