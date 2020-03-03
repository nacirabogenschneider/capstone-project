import React, { useState } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import * as schoolsData from '../data/schools.json'
import currentSchool from '../img/solid-sm/sm-location-marker.svg'
import schoolBuilding from '../img/solid-sm/sm-office-building.svg'

//#CD1076
export default function Filter({ schoolsDataAll }) {
  const primarySchools = filterSchoolsByPrimarySchool()
  const schoolStates = schoolsData.states
  const [selectedState, setSelectedState] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')
  const [selectMarker, setSelectMarker] = useState(null)
  const [singleMarler, setSingleMarker] = useState(null)
  const [getLocation, setGetLocation] = useState({})

  function filterSchoolsByPrimarySchool() {
    return schoolsDataAll
      .filter(school => school.school_type === 'Grundschule')
      .sort()
  }
  function setStateSelector() {
    return schoolStates.map(state => <Option>{state.name}</Option>)
  }

  function filterPrimarySchoolByState() {
    const primarySelectedByState = primarySchools.filter(
      school => school.state === selectedState
    )
    return primarySelectedByState
  }

  function setPrimarySchoolSelectorByState() {
    return filterPrimarySchoolByState()
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option>{sortedSchool}</Option>)
  }
  function renderSchoolCard() {
    const schoolValues = selectedPrimarySchool.split(',')
    const selectedValueName = schoolValues[0]
    return (
      <SchoolCard>
        <h2>{selectedValueName}</h2>
        <p>{getPositionOfSelectedSchool()}</p>
      </SchoolCard>
    )
  }

  function getPositionOfSelectedSchool() {
    const schoolAddress = selectedPrimarySchool.split(',')
    const selectedSchoolAddress =
      schoolAddress[schoolAddress.length - 2] +
      ',' +
      schoolAddress[schoolAddress.length - 1]

    return selectedSchoolAddress
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
          icon={{
            url: schoolBuilding,
          }}
        />
      ))
    return primarySchoolMarker
  }

  function renderSingleMarker() {
    return (
      <Marker
        key={Math.random()}
        position={{
          lat: 53.62036,
          lng: 9.89396,
          draggable: true,
          title: 'Drag me!',
        }}
        icon={{
          url: currentSchool,
        }}
      />
    )
  }

  function renderSelectButton() {
    return <AddPointButton>&#10003;</AddPointButton>
  }
  return (
    <>
      <SelectSection>
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <div>{renderSchoolCard()}</div>
          )}
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
        {selectedPrimarySchool && renderSingleMarker()}
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' &&
          renderSelectButton &&
          console.log(selectedPrimarySchool)}
        {renderSelectButton()}
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
  width: 100vw;
  min-width: 380px;
  max-width: 380px;
  border-radius: 12px;
  border: none;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
const SchoolCard = styled.div`
  font-family: 'Arial';
  height: auto;
  width: 100vw;
  min-width: 380px;
  max-width: 380px;
  block-size: inline;
  border-radius: 12px;
  border: none;
  padding: 10px;
  margin: 5px 8px;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
const AddPointButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 48px;
  width: 48px;
  border: none;
  margin: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
`
