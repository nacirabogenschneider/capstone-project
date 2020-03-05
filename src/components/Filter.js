import React, { useState, useEffect } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import * as schoolsData from '../data/schools.json'
import currentSchool from '../img/solid-sm/school-selected.svg'
import schoolBuilding from '../img/solid-sm/school-all.svg'
import Card from './Card'

export default function Filter() {
  const schoolsDataAll = schoolsData.schools
  const primarySchools = filterSchoolsByPrimarySchool()
  const schoolStates = schoolsData.states

  const [selectedState, setSelectedState] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')
  const [schoolLatLon, setSchoolLatLon] = useState({ lat: 0, lon: 0 })

  useEffect(() => {
    renderMarker() && setPrimarySchoolSelectorByState()
  }, [selectedState])

  useEffect(() => {
    setLatLonOfSelectedSchool()
  }, [selectedPrimarySchool])
  console.log(schoolLatLon)

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

  function setLatLonOfSelectedSchool() {
    const filterByName = getNameOfSelectedSchool()
    const schools = primarySchools.filter(
      school => school.name === filterByName
    )
    if (schools.length > 0) {
      setSchoolLatLon({ lat: schools[0].lat, lon: schools[0].lon })
    }
  }

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

  return (
    <>
      <SelectSection key={selectedPrimarySchool.name}>
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <Card
              currentSchool={currentSchool}
              schoolName={getNameOfSelectedSchool()}
              schoolAdress={getAddressOfSelectedSchool()}
            />
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
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <Marker
              key={Math.random()}
              position={{
                lat: schoolLatLon.lat,
                lng: schoolLatLon.lon,
              }}
              icon={{
                url: currentSchool,
              }}
              zoom={20}
            />
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

  bottom: 54px;
  width: 100%;
`
const Option = styled.option`
  font-size: 20px;
`
const Select = styled.select`
  font-family: 'Arial';
  height: 48px;
  width: 92vw;
  border-radius: 12px;
  border: none;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`
// const SchoolCard = styled.section`
//   display: flex;
//   width: 92vw;
//   flex-direction: column;
//   font-family: 'Arial';
//   border-radius: 12px;
//   padding: 10px;
//   margin: 5px 0;
//   font-size: 1.1rem;
//   background: white;
//   opacity: 0.94;
//   box-shadow: 0 0 10px 2px #a4b0af;
// `
