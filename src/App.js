import React, { useState } from 'react'
import styled from 'styled-components'
import Map from './Components/Maps'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Filter from './Components/Filter'
import * as schoolsData from './data/schools.json'
import PropTypes from 'prop-types'
import Cards from './Components/Card'
import currentSchoolImg from './img/solid-sm/school-selected.svg'
import meetpointsData from './data/meetpoints.json'

const MapWrapped = withScriptjs(withGoogleMap(Map))

MapWrapped.propTypes = {
  defaultZoom: PropTypes.number,
  defaultCenter: PropTypes.object,
  efaultOptions: PropTypes.object,

  selectedPrimary: PropTypes.string,
  selectedState: PropTypes.string,
  selectedSchoolMeetpoint: PropTypes.string,
  schoolLatLon: PropTypes.object,

  mapElement: PropTypes.object,
  googleMapURL: PropTypes.string,
  loadingElement: PropTypes.object,
  containerElemen: PropTypes.object,
}

function App() {
  const schoolsDataAll = schoolsData.schools
  const primeSchools = schoolsDataAll
    .filter(school => school.school_type === 'Grundschule')
    .sort()
  const schoolStates = schoolsData.states
  const [primarySchools, setPrimaryschools] = useState(primeSchools)
  const [selectedState, setSelectedState] = useState()
  const [schoolLatLon, setSchoolLatLon] = useState({ lat: 0, lon: 0 })
  const [meetpoints, setMeetpoints] = useState(meetpointsData.allMeetpoints)
  const [selectedMeetpoint, setSelectedMeetpoint] = useState(
    'Wähle deinen Treffpunkt'
  )
  const [selectedPrimarySchoolName, setSelectedPrimarySchoolName] = useState(
    'Wähle deine Schule'
  )
  const [
    selectedPrimarySchoolAddress,
    setSelectedPrimarySchoolAddress,
  ] = useState('')
  const [selectedPrimarySchool, setSelectedPrimarySchool] = useState('')

  console.log('App - selected State:')
  console.log(selectedState)

  return (
    <AppGrid>
      <Header />
      <MapContainer key={Math.random()}>
        <MapWrapped
          schoolLatLon={schoolLatLon}
          selectedState={selectedState}
          key={Math.random()}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

        <Filter
          key="Filter-Component"
          schoolStates={schoolStates}
          schoolsData={schoolsData}
          schoolsDataAll={schoolsDataAll}
          currentSchoolImg={currentSchoolImg}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedPrimarySchoolName={selectedPrimarySchoolName}
          setSelectedPrimarySchoolName={setSelectedPrimarySchoolName}
          selectedPrimarySchoolAddress={selectedPrimarySchoolAddress}
          setSelectedPrimarySchoolAddress={setSelectedPrimarySchoolAddress}
          selectedPrimarySchool={selectedPrimarySchool}
          meetpoints={meetpoints}
          setMeetpoints={setMeetpoints}
          primarySchools={primarySchools}
          setPrimaryschools={setPrimaryschools}
        />
      </MapContainer>

      {selectedMeetpoint !== 'Wähle deinen Treffpunkt' && (
        <Cards
          currentSchoolImg={currentSchoolImg}
          schoolName={setSelectedPrimarySchoolName}
          schoolAdress={setSelectedPrimarySchoolAddress}
          selectedMeetpoint={selectedMeetpoint}
        />
      )}
    </AppGrid>
  )
}

export default App

const AppGrid = styled.section`
  width: auto;
  height: auto;
  display: grid;
  grid-template-rows: 48px 1fr 48px;
  margin: 0;
  padding: 0;
`
const Header = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #fbfbfb;
  border-bottom: 0.8px solid lightgray;
  z-index: 100;
  box-shadow: 0 0 10px 3px grey;
`
const MapContainer = styled.section`
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - 96px);
`
