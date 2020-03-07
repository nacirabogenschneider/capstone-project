import React, { useState, useEffect } from 'react'
import { Marker } from 'react-google-maps'
import styled from 'styled-components'
import RenderMarker from '../Components/RenderMarker'
import meetpointImg from '../img/solid-sm/shoe-prints.svg'
import PropTypes, { string, number, func } from 'prop-types'
import schoolBuildingImg from '../img/solid-sm/school-all.svg'
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
  selectedMeetpoint,
  setSelectedMeetpoint,
  meetpoints,
  primarySchools,
  setPrimaryschools,
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
  const [schoolLatLon, setSchoolLatLon] = useState({ lat: 0, lng: 0 })
  const [isSelectedMeetpoint, setIsSelectedMeetpoint] = useState('')
  const [isMeetpoints, setIsMeetpoints] = useState(meetpoints)
  const [meetPointCard, setMeetPointCard] = useState({})

  useEffect(() => {
    filterSchoolsByPrimaryState()
  }, [isSelectedState])

  useEffect(() => {
    getNameOfSelectedSchool()
  }, [isSelectedPrimarySchool])

  useEffect(() => {
    getAddressOfSelectedSchool()
  }, [isSelectedPrimarySchool])

  useEffect(() => {
    setMeetpointsSelectorBySchool()
  }, [isSelectedPrimarySchool])

  useEffect(() => {
    setLatLonOfSelectedSchool()
  }, [isSelectedPrimarySchool])

  function filterSchoolsByPrimaryState() {
    return isPrimarySchools
      .filter(school => school.state === selectedState)
      .map(school => school.name + ', ' + school.address)
      .sort()
      .map(sortedSchool => <Option key={sortedSchool}>{sortedSchool}</Option>)
  }

  function setMeetpointsSelectorBySchool() {
    return isMeetpoints
      .filter(isMeetpoints => isMeetpoints.school === selectedPrimarySchoolName)
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
      setSchoolLatLon({ lat: schools[0].lat, lng: schools[0].lon })
    }
  }

  function handleStateChange(event) {
    setSelectedState(event.target.value)
    console.log('In der Handle Funktion - DAS BUNDESLAND ' + selectedState)
  }
  function handleSchoolChange(event) {
    setIsSelectedPrimarySchool(event.target.value)
  }
  function handleMeetpointClick(event) {
    setIsSelectedMeetpoint(event.target.value)
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

        {console.log('1. Filter Nach Selection- ', selectedPrimarySchool)}
        <Select key="Meetpoints" onSelect={handleMeetpointClick}>
          <Option key={selectedMeetpoint} onClick={console.log('Clicked')}>
            Wähle deinen Treffpunkt
          </Option>
        </Select>

        <RenderMarker
          //primarySchoolsByState={primSchoolByState}
          primarySchools={isPrimarySchools}
          selectedState={selectedState}
          selectedPrimarySchool={selectedPrimarySchool}
          schoolBuilding={schoolBuildingImg}
          currentSchool={currentSchoolImg}
        />

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
