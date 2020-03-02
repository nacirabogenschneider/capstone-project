import React, { useState } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import * as schoolsData from '../data/schools.json'

export default function Filter({ schoolsDataAll }) {
  const primarySchools = filterSchoolsByPrimarySchool()
  const schoolStates = schoolsData.states
  const [selectedState, setSelectedState] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')
  const [selectMarker, setSelectMarker] = useState(null)
  const [selectedSingleMarker, setSelectedSingleMarker] = useState(null)

  let primarySchoolByState = ''

  function filterSchoolsByPrimarySchool() {
    return schoolsDataAll
      .filter(school => school.school_type === 'Grundschule')
      .sort()
  }
  function setStateSelector() {
    return schoolStates.map(state => <option>{state.name}</option>)
  }

  function setPrimarySchoolSelectorByState() {
    primarySchoolByState = primarySchools
      .filter(school => school.state === selectedState)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <option>{sortedSchool}</option>)
    return primarySchoolByState
  }
  function renderMarker() {
    const primarySchoolMarker = primarySchools
      .filter(school => school.state === selectedState)
      .map(sortedSchool => (
        <Marker
          key={sortedSchool.id}
          position={{
            lat: sortedSchool.lat,
            lng: sortedSchool.lon,
          }}
          onClick={() => {
            setSelectMarker(sortedSchool)
          }}
        />
      ))
    return primarySchoolMarker
  }

  return (
    <>
      <SelectSection>
        <Select
          key={selectedState.name}
          onClick={selectedState => {
            setSelectedState(selectedState.target.value)
          }}
        >
          <Option>Wähle dein Bundesland</Option>
          {setStateSelector()}
          {renderMarker()}
        </Select>
        <Select
          key={selectedPrimarySchool.id}
          onClick={selectedPrimarySchool =>
            setSelectedPrimarySchool(selectedPrimarySchool.target.value)
          }
        >
          <Option>Wähle deine Schule</Option>
          {setPrimarySchoolSelectorByState()}
        </Select>
      </SelectSection>
    </>
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
const Option = styled.option`
  font-size: 20px;
`
const Select = styled.select`
  font-family: 'Arial';
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
