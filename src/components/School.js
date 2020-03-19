import React from 'react'
import {
  StyledImage,
  SchoolSection,
  StyledContent,
  StyledHeader,
} from './School.styles'
import currentSchoolImg from '../img/svg/_school.svg'
import phone from '../img/svg/_phone.svg'
import mail from '../img/svg/_mail.svg'
import uuid from 'react-uuid'

export default function School({ primeSchools }) {
  const jsonString = localStorage.getItem('schoolOfChoice')
  const data = JSON.parse(jsonString)
  const schoolData = data.split(',')
  const schoolName = schoolData[0]

  function renderSchoolInformation() {
    return primeSchools
      .filter(school => school.name === schoolName)
      .map(school => (
        <React.Fragment key={uuid}>
          <StyledHeader key={uuid(school)}>
            <StyledImage
              src={currentSchoolImg}
              alt="current school"
            ></StyledImage>
            <div>{school.name}</div>
          </StyledHeader>
          <StyledContent key={uuid(school)}>
            <StyledImage src={mail} alt="mail"></StyledImage>
            <div>{school.address}</div>
          </StyledContent>
          <StyledContent key={uuid(school)}>
            <StyledImage src={phone} alt="phone"></StyledImage>
            <div>{school.phone}</div>
            <div>{school.lat}</div>
            <div>{school.lng}</div>
          </StyledContent>
        </React.Fragment>
      ))
  }
  return <SchoolSection key={uuid()}>{renderSchoolInformation()}</SchoolSection>
}
