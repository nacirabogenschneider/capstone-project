import React, { useState, useEffect } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'

import schoolBuilding from '../img/solid-sm/school-all.svg'
import meetpointImg from '../img/solid-sm/shoe-prints.svg'

import * as Meetpoints from '../data/meetpoints.json'
import PropTypes, { string, number } from 'prop-types'

// Filter.propTypes = {
//   schoolsDataAll: PropTypes.array.isRequired,
//   schoolsData: PropTypes.array.isRequired,
//   schoolStates: PropTypes.array.isRequired,
//   selectedState: PropTypes.string.isRequired,
// }

export default function Filter({
  schoolsDataAll,
  schoolsData,
  schoolStates,
  currentSchoolImg,
  setSelectedState,
  selectedState,
  selectedPrimarySchoolName,
  setSelectedPrimarySchoolName,
  selectedPrimarySchoolAddress,
  setSelectedPrimarySchoolAddress,
  selectedPrimarySchool,
  setSelectedPrimarySchool,
}) {
  const primarySchools = filterSchoolsByPrimarySchool()

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
  const [schoolLatLon, setSchoolLatLon] = useState({ lat: 0, lon: 0 })
  const [isSelectedMeetpoint, setIsSelectedMeetpoint] = useState('')
  const [isMeetpoints, setIsMeetpoints] = useState([])
  const [meetPointCard, setMeetPointCard] = useState({})

  //Name Of School
  useEffect(() => {
    getNameOfSelectedSchool()
  }, [selectedPrimarySchool])
  //Address Of School
  useEffect(() => {
    getAddressOfSelectedSchool()
  }, [selectedPrimarySchool])

  // useEffect(() => {
  //   setPrimarySchoolSelectorByState()
  // }, [filterPrimarySchoolByState()])
  //Selected Primary School
  // useEffect(() => {
  //   setSelectedPrimarySchoolName(isSelectedPrimarySchoolName)
  // }, [isSelectedPrimarySchool])

  useEffect(() => {
    isSelectedPrimarySchool && setSelectedState(isSelectedState)
  }, [isSelectedState])

  console.log(isSelectedState)
  // useEffect(() => {
  //   setLatLonOfSelectedSchool()
  // }, [selectedPrimarySchool])

  // useEffect(() => {
  //     }, [isSelectedState])

  useEffect(() => {
    setMeetPointCard({
      school: selectedPrimarySchool,
      coordinates: schoolLatLon,
      meetpoint: isSelectedMeetpoint,
      runninglist: [],
    })
  }, [isSelectedMeetpoint])

  function filterSchoolsByPrimarySchool() {
    return schoolsDataAll
      .filter(school => school.school_type === 'Grundschule')
      .sort()
  }

  // function filterPrimarySchoolByState() {
  //   return primarySchools.filter(school => school.state === isSelectedState)
  // }
  // function setPrimarySchoolSelectorByState() {
  //   return filterPrimarySchoolByState()
  //     .map(school => school.name + ', ' + school.address)
  //     .sort()
  //     .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  // }

  function filterSchoolsByPrimaryState() {
    return primarySchools
      .filter(school => school.state === isSelectedState)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }

  function setMeetpointsSelectorBySchool() {
    return isMeetpoints
      .filter(isMeetpoints => isMeetpoints.school === getNameOfSelectedSchool())
      .sort()
      .map(sortetMeetpoint => (
        <Option key={sortetMeetpoint.name}>{sortetMeetpoint.name}</Option>
      ))
  }

  function getNameOfSelectedSchool() {
    const schoolValues = isSelectedPrimarySchool.split(',')
    const selectedValueName = schoolValues[0]
    setSelectedPrimarySchoolName(selectedValueName)
  }

  function getAddressOfSelectedSchool() {
    const schoolAddress = selectedPrimarySchool.split(',')
    const selectedSchoolAddress =
      schoolAddress[schoolAddress.length - 2] +
      ',' +
      schoolAddress[schoolAddress.length - 1]
    setSelectedPrimarySchoolAddress(selectedSchoolAddress)
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
      .filter(school => school.state === isSelectedState)
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

  function renderMeetpointMarker() {
    return isMeetpoints
      .filter(meetpoint => meetpoint.school === getNameOfSelectedSchool())
      .map(sortedMeetpoints => (
        <Marker
          key={sortedMeetpoints.name}
          position={{
            lat: sortedMeetpoints.lat,
            lng: sortedMeetpoints.lon,
          }}
          icon={{
            url: meetpointImg,
          }}
        />
      ))
  }

  return (
    <>
      <SelectSection key={selectedPrimarySchool}>
        <Select
          key={isSelectedState.name}
          onClick={isSelectedState =>
            setIsSelectedState(isSelectedState.target.value)
          }
        >
          <Option key={isSelectedState}>Wähle dein Bundesland</Option>
          {schoolStates.map(state => (
            <Option key={state.name}>{state.name}</Option>
          ))}
          {isSelectedState !== 'Wähle dein Bundesland' && renderMarker()}
        </Select>

        <Select
          key={selectedPrimarySchool}
          onClick={isSelectedSchool =>
            setIsSelectedPrimarySchool(isSelectedSchool.target.value)
          }
        >
          <Option key={selectedPrimarySchool}>Wähle deine Schule</Option>
          {isSelectedState !== 'Wähle dein Bundesland' &&
            filterSchoolsByPrimaryState()}
        </Select>

        {isSelectedPrimarySchool &&
          isSelectedPrimarySchool !== 'Wähle deine Schule' && (
            <Select
              onClick={isSelectedMeetpoint =>
                setIsSelectedMeetpoint(isSelectedMeetpoint.target.value)
              }
            >
              <Option key={'meetpoints'}>Wähle deinen Treffpunkt</Option>
              {setMeetpointsSelectorBySchool()}
              {isSelectedPrimarySchool !== 'Wähle deine Schule' &&
                renderMeetpointMarker()}
            </Select>
          )}

        {isSelectedPrimarySchool &&
          isSelectedPrimarySchool !== 'Wähle deine Schule' && (
            <Marker
              key={schoolLatLon}
              position={{
                lat: schoolLatLon.lat,
                lng: schoolLatLon.lon,
              }}
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
