import React, { useState, useEffect } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'

import schoolBuilding from '../img/solid-sm/school-all.svg'
import meetpointImg from '../img/solid-sm/shoe-prints.svg'

import * as Meetpoints from '../data/meetpoints.json'
import PropTypes, { string, number } from 'prop-types'

Filter.propTypes = {
  schoolsDataAll: PropTypes.array.isRequired,
  schoolsData: PropTypes.array.isRequired,
  schoolStates: PropTypes.array.isRequired,
  selectedState: PropTypes.string.isRequired,
}

export default function Filter({
  schoolsDataAll,
  schoolsData,
  schoolStates,
  selectedState,
  currentSchoolImg,
  selectedPrimarySchoolName,
  setSelectedPrimarySchoolName,
  selectedPrimarySchoolAddress,
  setSelectedPrimarySchoolAddress,
}) {
  const primarySchools = filterSchoolsByPrimarySchool(selectedState)
  const [meetpoints, setMeetpoints] = useState([])
  const [isSelectedState, setIsSelectedState] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')
  const [
    isSelectedPrimarySchoolName,
    setIsSelectedPrimarySchoolName,
  ] = useState(selectedPrimarySchoolName)
  const [
    isSelectedPrimarySchoolAddress,
    setIsSelectedPrimarySchoolAddress,
  ] = useState(selectedPrimarySchoolAddress)
  const [schoolLatLon, setSchoolLatLon] = useState({ lat: 0, lon: 0 })
  const [selectedMeetpoint, setSelectedMeetpoint] = useState('')
  const [meetPointCard, setMeetPointCard] = useState({})

  // useEffect(() => {
  //   setTestPropFilter(neuerProp)
  // }, [neuerProp, selectedMeetpoint])
  useEffect(() => {
    getNameOfSelectedSchool()
  }, [selectedPrimarySchool])
  useEffect(() => {
    setIsSelectedPrimarySchoolName(selectedPrimarySchoolName)
  }, [])

  // useEffect(() => {
  //   setMeetpoints(Meetpoints.allMeetpoints)
  // }, [])

  useEffect(() => {
    renderMarker() && setPrimarySchoolSelectorByState()
  }, [isSelectedState])

  useEffect(() => {
    setLatLonOfSelectedSchool()
  }, [selectedPrimarySchool])
  console.log(schoolLatLon)

  useEffect(() => {
    setMeetPointCard({
      school: selectedPrimarySchool,
      coordinates: schoolLatLon,
      meetpoint: selectedMeetpoint,
      runninglist: [],
    })
  }, [selectedMeetpoint])
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
  function setMeetpointsSelectorBySchool() {
    return meetpoints
      .filter(meetpoint => meetpoint.school === getNameOfSelectedSchool())
      .sort()
      .map(sortetMeetpoint => (
        <Option key={sortetMeetpoint.name}>{sortetMeetpoint.name}</Option>
      ))
  }
  console.log('Name der Schule ' + getNameOfSelectedSchool())

  function getNameOfSelectedSchool() {
    const schoolValues = selectedPrimarySchool.split(',')
    const selectedValueName = schoolValues[0]
    setSelectedPrimarySchoolName(selectedValueName)
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
    return meetpoints
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
          onClick={selectedState =>
            setIsSelectedState(selectedState.target.value)
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
          onClick={selectedPrimarySchool =>
            setSelectedPrimarySchool(selectedPrimarySchool.target.value)
          }
        >
          <Option key={selectedPrimarySchool}>Wähle deine Schule</Option>
          {isSelectedState !== 'Wähle dein Bundesland' &&
            setPrimarySchoolSelectorByState()}
        </Select>
        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
            <Select
              onClick={selectedMeetpoint =>
                setSelectedMeetpoint(selectedMeetpoint.target.value)
              }
            >
              {console.log(selectedMeetpoint)}
              <Option key={'meetpoints'}>Wähle deinen Treffpunkt</Option>
              {setMeetpointsSelectorBySchool()}
              {selectedPrimarySchool !== 'Wähle deine Schule' &&
                renderMeetpointMarker()}
            </Select>
          )}

        {selectedPrimarySchool &&
          selectedPrimarySchool !== 'Wähle deine Schule' && (
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
