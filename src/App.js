import React, { useState } from 'react'
import styled from 'styled-components'
import Map from './Components/Maps'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Filter from './Components/Filter'
import * as schoolsData from './data/schools.json'
import PropTypes from 'prop-types'
import Cards from './Components/Card'
import currentSchoolImg from './img/solid-sm/school-selected.svg'

const MapWrapped = withScriptjs(withGoogleMap(Map))

MapWrapped.propTypes = {
  defaultZoom: PropTypes.number.isRequired,
  defaultCenter: PropTypes.object.isRequired,
  efaultOptions: PropTypes.object,

  selectedPrimary: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  selectedSchoolMeetpoint: PropTypes.string.isRequired,
  schoolLatLon: PropTypes.object.isRequired,

  mapElement: PropTypes.object.isRequired,
  googleMapURL: PropTypes.string.isRequired,
  loadingElement: PropTypes.object.isRequired,
  containerElemen: PropTypes.object.isRequired,
}

function App() {
  const schoolsDataAll = schoolsData.schools
  const schoolStates = schoolsData.states
  const [selectedState, setSelectedState] = useState('')
  const [schoolLatLon, setSchoolLatLon] = useState({ lat: 0, lon: 0 })
  const [meetpoints, setMeetpoints] = useState([])
  const [selectedMeetpoint, setSelectedMeetpoint] = useState('')
  const [selectedPrimarySchoolName, setSelectedPrimarySchoolName] = useState('')
  const [
    selectedPrimarySchoolAddress,
    setSelectedPrimarySchoolAddress,
  ] = useState('')
  const [
    selectedPrimarySchoolAdress,
    setSelectedPrimarySchoolAdress,
  ] = useState('')

  return (
    <AppGrid>
      <Header />
      <MapContainer key={Math.random()}>
        <MapWrapped
          schoolLatLon={schoolLatLon}
          selectedState={selectedState}
          key={Math.random()}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3RFneQMozLqGhE3z5I1UOBARqYw8xZbE`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Filter
          key={Math.random()}
          schoolStates={schoolStates}
          schoolsData={schoolsData}
          schoolsDataAll={schoolsDataAll}
          currentSchoolImg={currentSchoolImg}
          selectedPrimarySchoolName={selectedPrimarySchoolName}
          setSelectedPrimarySchoolName={setSelectedPrimarySchoolName}
          selectedPrimarySchoolAddress={selectedPrimarySchoolAddress}
          setSelectedPrimarySchoolAddress={setSelectedPrimarySchoolAddress}
        />

        <Footer>
          <AddPointButton>&#10003;</AddPointButton>
        </Footer>
      </MapContainer>

      <Cards
        currentSchoolImg={currentSchoolImg}
        schoolName={setSelectedPrimarySchoolName}
        schoolAdress={setSelectedPrimarySchoolAddress}
        selectedMeetpoint={selectedMeetpoint}
      />
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
const Footer = styled.header`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: #fbfbfb;
  border-bottom: 0.8px solid lightgray;
  z-index: 100;
  box-shadow: 0 0 10px 3px grey;
`

const AddPointButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 35px;
  width: 35px;
  border: none;
  margin: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
`
const MapContainer = styled.section`
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - 96px);
`
