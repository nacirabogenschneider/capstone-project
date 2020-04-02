import React, { useEffect } from 'react'
import {
  StyledImage,
  StyledContent,
  StyledHeader,
  StyledLink,
} from './School.styles'
import uuid from 'react-uuid'
import saveToLocal from '../utils/localStorage'
import globe from './globe.svg'
import at from './at.svg'
import fax from './fax.svg'

export default function School({
  primeSchools,
  selectedSchool,
  currentSchoolImg,
  phone,
  mail,
  setChosenSchool,
  chosenSchool,
}) {
  const selectedSchoolByChoice = findFullSchoolElement() || 'Wähle eine Schule'

  useEffect(() => {
    setChosenSchool(selectedSchoolByChoice)
    saveToLocal('chosenSchool', chosenSchool)
  }, [selectedSchoolByChoice, setChosenSchool, chosenSchool])

  return (
    <React.Fragment key={uuid}>
      <StyledHeader key={uuid()}>
        <StyledImage src={currentSchoolImg} alt="current school"></StyledImage>
        <div>{selectedSchoolByChoice.name || 'Wähle eine Schule'}</div>
      </StyledHeader>
      <StyledContent key={uuid()}>
        <StyledImage src={mail} alt="mail"></StyledImage>
        <div>{selectedSchoolByChoice.address}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={phone} alt="phone"></StyledImage>
        <div>{selectedSchoolByChoice.phone}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={fax} alt="fax"></StyledImage>
        <div>{selectedSchoolByChoice.fax}</div>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={at} alt="mail to"></StyledImage>
        <StyledLink href={`mailto:${selectedSchoolByChoice.email}`}>
          {selectedSchoolByChoice.email}
        </StyledLink>
      </StyledContent>
      <StyledContent key={uuid()}>
        <StyledImage src={globe} alt="website link"></StyledImage>
        <StyledLink href={selectedSchoolByChoice.website} target="_blank">
          {selectedSchoolByChoice.website}
        </StyledLink>
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
