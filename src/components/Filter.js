import React, { useState } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import * as schoolsData from '../data/schools.json'
import Geocode from 'react-geocode'

export default function Filter({ schoolsDataAll }) {
  const primarySchools = filterSchoolsByPrimarySchool()
  const schoolStates = schoolsData.states
  const [selectedState, setSelectedState] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')
  const [
    selectedPrimarySchoolObject,
    setSelectedPrimarySchoolObject,
  ] = useState('')
  const [selectMarker, setSelectMarker] = useState(null)
  const [getLocation, setGetLocation] = useState({})

  function filterSchoolsByPrimarySchool() {
    return schoolsDataAll
      .filter(school => school.school_type === 'Grundschule')
      .sort()
  }
  function setStateSelector() {
    return schoolStates.map(state => <option>{state.name}</option>)
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
      .map(sortedSchool => <option>{sortedSchool}</option>)
  }
  function renderSchoolCard() {
    return (
      <SchoolCard>
        <h2>{selectedPrimarySchool}</h2>
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
  console.log(getPositionOfSelectedSchool())

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

  function getSchoolLocation() {
    if (
      selectedState &&
      selectedPrimarySchool &&
      selectedPrimarySchool !== 'Wähle deine Schule'
    ) {
      Geocode.fromAddress(getPositionOfSelectedSchool()).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location
          const location = { lat, lng }
          return setGetLocation(location)
        },
        error => {
          console.error(error)
        }
      )
    }
  }
  function renderSelectButton() {
    return <AddPointButton>&#10003;</AddPointButton>
  }
  return (
    <>
      <SelectSection>
        {selectedPrimarySchool && <div>{renderSchoolCard()}</div>}
        {selectedPrimarySchool === '' && (
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
        )}

        <Select
          key={selectedPrimarySchool.id}
          onClick={selectedPrimarySchool =>
            setSelectedPrimarySchool(selectedPrimarySchool.target.value)
          }
        >
          <Option>Wähle deine Schule</Option>
          {setPrimarySchoolSelectorByState()}
        </Select>

        {selectedPrimarySchool && renderSelectButton()}
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
const SchoolCard = styled.div`
  font-family: 'Arial';
  height: auto;
  width: auto;
  block-size: inline;
  border-radius: 12px;
  border: none;
  padding: 10px;
  margin: 5px 8px;
  font-size: 1.1rem;
  background: white;
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
