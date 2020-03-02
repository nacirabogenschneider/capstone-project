import React, { useState } from 'react'
import styled from 'styled-components'
import * as schoolsData from '../data/schools.json'

export default function Filter() {
  const schoolsDataAll = schoolsData.schools
  const primarySchools = filterSchoolsByPrimarySchool()
  const schoolStates = schoolsData.states
  const [selectedState, setSelectedState] = useState('')

  function filterSchoolsByPrimarySchool() {
    return schoolsDataAll
      .filter(school => school.school_type === 'Grundschule')
      .map(school => school.name + ', ' + school.address)
      .sort()
    // .map(sortedPrimarySchool => <option>{sortedPrimarySchool}</option>)
  }
  function setStateSelector() {
    return schoolStates.map(state => <option>{state.name}</option>)
  }
  function filterSchoolByState() {
    return
  }

  return (
    <SelectSection>
      <Select>
        <option>Wähle dein Bundesland</option>
        {setStateSelector()}
      </Select>
      <Select>
        <option>Filter 2</option>
      </Select>
    </SelectSection>
  )
}

const ContentWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 54px;
  width: 100%;
`
const SelectSection = styled(ContentWrapper)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 54px;
  width: 100%;
`
const Select = styled.select`
  height: 48px;
  width: 95vw;
  block-size: inline;
  border-radius: 12px;
  border: none;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  box-shadow: 0 0 10px 2px #a4b0af;
`
