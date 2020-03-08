import React, { useState, useEffect } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import RenderMarker from './RenderMarker'

import PropTypes from 'prop-types'
import schoolBuildingImg from '../img/solid-sm/school-all.svg'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

Filter.propTypes = {
  schoolsDataAll: PropTypes.object,
  schoolsData: PropTypes.object,
  schoolStates: PropTypes.object,
  selectedState: PropTypes.string,
}

export default function Filter({
  schoolStates,
  currentSchoolImg,
  setSelectedState,
  selectedState,
  selectedPrimarySchoolAddress,
  selectedPrimarySchool,
  selectedMeetpoint,
  setSelectedMeetpoint,
  meetpoints,
  primarySchools,
  setCardSchoolObject,
  cardSchoolObject,
}) {
  const [isPrimarySchools, setIsPrimaryschools] = useState(primarySchools)
  const [isSelectedState, setIsSelectedState] = useState(selectedState)
  const [isSelectedPrimarySchool, setIsSelectedPrimarySchool] = useState(
    selectedPrimarySchool
  )
  const [
    isSelectedPrimarySchoolName,
    setIsSelectedPrimarySchoolName,
  ] = useState('')
  const [
    isSelectedPrimarySchoolAddress,
    setIsSelectedPrimarySchoolAddress,
  ] = useState(selectedPrimarySchoolAddress)
  const [schoolLatLon, setSchoolLatLon] = useState([])
  const [isSelectedMeetpoint, setIsSelectedMeetpoint] = useState('')
  const [isMeetpoints, setIsMeetpoints] = useState(meetpoints)
  const [isCardSchoolObject, setIsCardSchoolObject] = useState(cardSchoolObject)

  useEffect(() => {
    filterSchoolsByPrimaryState()
  }, [isSelectedState])

  useEffect(() => {
    getNameOfSelectedSchool()
    getAddressOfSelectedSchool()
    setMeetpointsSelectorBySchool()
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
      .filter(school => school.state === selectedState)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }

  function setMeetpointsSelectorBySchool() {
    return isMeetpoints
      .filter(
        isMeetpoints => isMeetpoints.school === isSelectedPrimarySchoolName
      )
      .sort()
      .map(sortetMeetpoint => (
        <Option key={sortetMeetpoint.name}>{sortetMeetpoint.name}</Option>
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
    setSelectedState(event.target.value)
  }
  function handleSchoolChange(event) {
    setIsSelectedPrimarySchool(event.target.value)
  }
  function handleMeetpointClick(event) {
    selectedPrimarySchool !== 'Wähle deine Schule' &&
      setIsSelectedMeetpoint(event.target.value)
    console.log(
      'TARGET VALUE aus dem Select feld Meetpoint',
      isSelectedMeetpoint
    )
  }

  return (
    <>
      <SelectSection key="Filter">
        <Select key="State-Filter" onChange={handleStateChange}>
          <Option key={isSelectedState}>Wähle dein Bundesland</Option>
          {schoolStates.map(state => (
            <Option key={state.name}>{state.name}</Option>
          ))}
        </Select>

        <Select key="School-Filter" onChange={handleSchoolChange}>
          <Option key={selectedPrimarySchool}>Wähle deine Schule</Option>
          {selectedState &&
            selectedState !== 'Wähle dein Bundesland' &&
            filterSchoolsByPrimaryState()}
        </Select>

        <Select key="Meetpoints" onChange={handleMeetpointClick}>
          <Option key={selectedMeetpoint}>Wähle deinen Treffpunkt</Option>
          {setMeetpointsSelectorBySchool()}
        </Select>
        <NavLink onClick={console.log('CLICK')} to="/meetpoint">
          <AddPointButton>&#10003;</AddPointButton>
        </NavLink>

        <RenderMarker
          primarySchoolsByState={isPrimarySchools.filter(
            school => school.state === selectedState
          )}
          primarySchools={primarySchools}
          selectedState={selectedState}
          selectedPrimarySchool={selectedPrimarySchool}
          schoolBuilding={schoolBuildingImg}
          currentSchool={currentSchoolImg}
        />

        {isSelectedPrimarySchool && (
          <Marker
            key={schoolLatLon}
            position={schoolLatLon}
            icon={{
              url: currentSchoolImg,
            }}
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
