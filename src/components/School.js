import React from 'react'
import styled from 'styled-components'
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
const StyledHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
`
const StyledContent = styled.div`
  font-size: 1.1rem;
  display: flex;
  padding: 10px;
  align-items: center;
  margin: 10px;
`
const SchoolSection = styled.section`
  position: absolute;
  background: white;
  opacity: 0.94;
  top: 110px;
  min-height: 240px;
  left: 10px;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
`
const StyledImage = styled.img`
  height: 35px;
  padding-right: 10px;
`
