import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import currentSchoolImg from '../img/svg/_school.svg'
import * as schoolsData from '../data/schools.json'
import uuid from 'react-uuid'

export default function School(cardSchoolObject, selectedSchoolsName) {
  const schoolsDataAll = schoolsData.schools
  const [NameOfSelectedSchool] = useState(selectedSchoolsName)
  const primeSchools = schoolsDataAll
    .filter(school => school.school_type === 'Grundschule')
    .sort()

  function renderSchoolInformation() {
    return primeSchools
      .filter(school => school.name === NameOfSelectedSchool)
      .map(school => (
        <>
          <StyledHeader key={uuid(school)}>
            <img src={currentSchoolImg} alt="current school"></img>
            <h1></h1>
          </StyledHeader>
          <StyledContent key={uuid(school)}>
            <div>{school.name}</div>
            <div>{school.address}</div>
            <div>{school.phone}</div>
          </StyledContent>
        </>
      ))
  }
  return <SchoolSection key={uuid()}>{renderSchoolInformation()}</SchoolSection>
}
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`
const StyledContent = styled.div`
  margin: 12px;
`
const SchoolSection = styled.section`
  position: absolute;
  background: white;
  top: 120px;
  min-height: 240px;
  left: 10px;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #2b7380;
`
