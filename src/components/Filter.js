import React, { useState } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import * as schoolsData from '../data/schools.json'
import currentSchool from '../img/solid-sm/sm-location-marker.svg'
import schoolBuilding from '../img/solid-sm/sm-office-building.svg'

export default function Filter() {
  const schoolsDataAll = schoolsData.schools
  const primarySchools = filterSchoolsByPrimarySchool()
  const schoolStates = schoolsData.states
  const [selectedState, setSelectedState] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')

  function filterSchoolsByPrimarySchool() {
    return schoolsDataAll
      .filter(school => school.school_type === 'Grundschule')
      .sort()
  }

  function filterPrimarySchoolByState() {
    return primarySchools.filter(school => school.state === selectedState)
  }

  function setPrimarySchoolSelectorByState() {
    return filterPrimarySchoolByState()
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }

  function getNameOfSelectedSchool() {
    const schoolValues = selectedPrimarySchool.split(',')
    const selectedValueName = schoolValues[0]
    return selectedValueName
  }

  function getAddressOfSelectedSchool() {
    const schoolAddress = selectedPrimarySchool.split(',')
    const selectedSchoolAddress =
      schoolAddress[schoolAddress.length - 2] +
      ',' +
      schoolAddress[schoolAddress.length - 1]

    return selectedSchoolAddress
  }
  function getLatLonOfSelectedSchool() {
    const filter = getNameOfSelectedSchool()
    const schools = primarySchools.filter(school => school.name === filter)[0]

    return console.log(schools)
  }
  getLatLonOfSelectedSchool()

  function renderMarker() {
    return primarySchools
      .filter(school => school.state === selectedState)
      .map(sortedSchool => (
        <Marker
          key={sortedSchool.id}
          position={{
            lat: sortedSchool.lat,
            lng: sortedSchool.lon,
          }}
          icon={{
            url: schoolBuilding,
          }}
        />
      ))
  }

  console.log('selectedState im Hook: ' + selectedState)
  return (
    <>
      <SelectSection key={selectedPrimarySchool.name}>
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <SchoolCard>
              <h2>{getNameOfSelectedSchool()}</h2>
              <p>{getAddressOfSelectedSchool()}</p>
            </SchoolCard>
          )}
        <Select
          key={selectedState.name}
          onClick={selectedState =>
            setSelectedState(selectedState.target.value)
          }
        >
          <Option key={selectedState}>Wähle dein Bundesland</Option>
          {schoolStates.map(state => (
            <Option key={state.name}>{state.name}</Option>
          ))}
          {selectedState !== 'Wähle dein Bundesland' && renderMarker()}
        </Select>
        <Select
          key={selectedPrimarySchool.id}
          onClick={selectedPrimarySchool =>
            setSelectedPrimarySchool(selectedPrimarySchool.target.value)
          }
        >
          <Option key={selectedPrimarySchool}>Wähle deine Schule</Option>
          {selectedState !== 'Wähle dein Bundesland' &&
            setPrimarySchoolSelectorByState()}
        </Select>
        <Select key={Math.random()}>
          <Option>Wähle einen Meetpoint</Option>
        </Select>
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <Marker
              key={Math.random()}
              position={{
                lat: 53.551086,
                lng: 9.993682,
              }}
              icon={{
                url: currentSchool,
              }}
            />
          )}
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <AddPointButton>&#10003;</AddPointButton>
          )}
      </SelectSection>
    </>
  )
}

const ContentWrapper = styled.main`
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
const SchoolCard = styled.section`
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
