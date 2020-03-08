import React, { useEffect, useState } from 'react'
import { Marker } from 'react-google-maps'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Filter({
  setSelectedState,
  schoolStates,
  selectedPrimarySchool,
  primarySchools,
  setCardSchoolObject,
}) {
  const [isPrimarySchools] = useState(primarySchools)
  const [isSelectedState, setIsSelectedState] = useState()
  const [isSelectedPrimarySchool, setIsSelectedPrimarySchool] = useState(
    'Wähle deine Schule'
  )
  const [
    isSelectedPrimarySchoolName,
    setIsSelectedPrimarySchoolName,
  ] = useState('')
  const [
    isSelectedPrimarySchoolAddress,
    setIsSelectedPrimarySchoolAddress,
  ] = useState('')
  const [schoolLatLon, setSchoolLatLon] = useState([])

  useEffect(() => {
    setSelectedState(isSelectedState)
    filterSchoolsByPrimaryState()
  }, [isSelectedState, filterSchoolsByPrimaryState, setSelectedState])

  useEffect(() => {
    getAddressOfSelectedSchool()
    getNameOfSelectedSchool()
    setLatLonOfSelectedSchool()
  }, [isSelectedPrimarySchool])

  useEffect(() => {
    setCardSchoolObject({
      name: isSelectedPrimarySchoolName,
      address: isSelectedPrimarySchoolAddress,
      lat: schoolLatLon.lat,
      lng: schoolLatLon.lng,
    })
  }, [
    isSelectedPrimarySchoolName,
    isSelectedPrimarySchoolAddress,
    schoolLatLon,
  ])

  function filterSchoolsByPrimaryState() {
    return isPrimarySchools
      .filter(school => school.state === isSelectedState)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }

  function renderMarker() {
    return isPrimarySchools
      .filter(school => school.state === isSelectedState)
      .map(sortedSchool => (
        <Marker
          key={sortedSchool.name}
          position={{
            lat: +sortedSchool.lat,
            lng: +sortedSchool.lon,
          }}
        />
      ))
  }

  function setStateSelector() {
    return schoolStates.map(state => (
      <option key={state.name}>{state.name}</option>
    ))
  }

  function getNameOfSelectedSchool() {
    const schoolValues = isSelectedPrimarySchool.split(',')
    const selectedValueName = schoolValues[0]
    setIsSelectedPrimarySchoolName(selectedValueName)
  }

  function getAddressOfSelectedSchool() {
    const schoolAddress = isSelectedPrimarySchool.split(',')
    const selectedSchoolAddress =
      schoolAddress[schoolAddress.length - 2] +
      ',' +
      schoolAddress[schoolAddress.length - 1]
    setIsSelectedPrimarySchoolAddress(selectedSchoolAddress)
  }

  function setLatLonOfSelectedSchool() {
    const schools = isPrimarySchools.filter(
      school => school.name === isSelectedPrimarySchoolName
    )
    if (schools.length > 0) {
      setSchoolLatLon({ lat: schools[0].lat, lng: schools[0].lon })
    }
  }

  function handleStateChange(event) {
    setIsSelectedState(event.target.value)
    renderMarker()
  }
  function handleSchoolChange(event) {
    setIsSelectedPrimarySchool(event.target.value)
  }

  return (
    <>
      <SelectSection key="Filter">
        <Select key="State-Filter" onChange={handleStateChange}>
          <Option key={isSelectedState}>Wähle dein Bundesland</Option>
          {setStateSelector()}
        </Select>

        <Select key="School-Filter" onChange={handleSchoolChange}>
          <Option key={selectedPrimarySchool}>Wähle deine Schule</Option>
          {isSelectedState &&
            isSelectedState !== 'Wähle dein Bundesland' &&
            filterSchoolsByPrimaryState()}
        </Select>
        <NavLink onClick={console.log('CLICK')} to="/meetpoint">
          <AddPointButton aria-label="check">&#10003;</AddPointButton>
        </NavLink>
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
const AddPointButton = styled.button`
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 45px;
  width: 45px;
  border: none;
  margin: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
`
