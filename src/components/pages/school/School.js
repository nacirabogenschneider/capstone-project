import React, { useEffect } from 'react'
import { StyledImage, StyledContent, StyledHeader } from './School.styles'
import uuid from 'react-uuid'

export default function School({
  primeSchools,
  selectedSchool,
  currentSchoolImg,
  phone,
  mail,
  setChosenSchool,
}) {
  const selectedSchoolByChoice = findFullSchoolElement()
  console.log('selectedSchool', selectedSchoolByChoice)

  useEffect(() => {
    setChosenSchool(selectedSchoolByChoice)
  }, [selectedSchoolByChoice])

  return (
    <React.Fragment key={uuid}>
      <StyledHeader key={uuid()}>
        <StyledImage src={currentSchoolImg} alt="current school"></StyledImage>
        <div>{selectedSchoolByChoice.name}</div>
      </StyledHeader>
      <StyledContent key={uuid()}>
        <StyledImage src={mail} alt="mail"></StyledImage>
        <div>{selectedSchoolByChoice.address}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={phone} alt="phone"></StyledImage>
        <div>{selectedSchoolByChoice.phone}</div>
      </StyledContent>
    </React.Fragment>
  )

  function findFullSchoolElement() {
    const selectedSchoolNameAndAddress = selectedSchool.split(',')
    const selectedSchoolName = selectedSchoolNameAndAddress[0]
    const selectedSchoolByChoiceInArray = primeSchools.filter(
      school => school.name === selectedSchoolName
    )
    const selectedSchoolByChoice = selectedSchoolByChoiceInArray[0]
    return selectedSchoolByChoice
  }
}
