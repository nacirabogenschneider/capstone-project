import React, { useState } from 'react'
import styled from 'styled-components'
import Map from './components/Maps'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Filter from './components/Filter'
import * as schoolsData from './data/schools.json'
import PropTypes from 'prop-types'
import Cards from './components/Card'
import currentSchoolImg from './img/solid-sm/school-selected.svg'
import meetpointsData from './data/meetpoints.json'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
  const [schoolLatLon] = useState({ lat: 0, lon: 0 })
  const [meetpoints, setMeetpoints] = useState(meetpointsData.allMeetpoints)
  const [selectedMeetpoint] = useState('Wähle deinen Treffpunkt')
  const [selectedPrimarySchoolName, setSelectedPrimarySchoolName] = useState(
    'Wähle deine Schule'
  )
  const [
    selectedPrimarySchoolAddress,
    setSelectedPrimarySchoolAddress,
  ] = useState('')
  const [selectedPrimarySchool] = useState('')
  const [cardSchoolObject, setCardSchoolObject] = useState({
    name: 'Du hast noch keine Schule ausgewählt',
  })

  return (
    <Router>
      <AppGrid>
        <Header />
        <MapContainer key="mapcontainer">
          <MapWrapped
            schoolLatLon={schoolLatLon}
            selectedState={selectedState}
            key={Math.random()}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3RFneQMozLqGhE3z5I1UOBARqYw8xZbE`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <Switch>
            <Route exact path="/">
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
                setSelectedPrimarySchoolAddress={
                  setSelectedPrimarySchoolAddress
                }
                setCardSchoolObject={setCardSchoolObject}
                cardSchoolObject={cardSchoolObject}
                selectedPrimarySchool={selectedPrimarySchool}
                meetpoints={meetpoints}
                setMeetpoints={setMeetpoints}
                primarySchools={primarySchools}
                setPrimaryschools={setPrimaryschools}
                setSelectedMeetpoint
                selectedMeetpoint
              />
            </Route>
          </Switch>
          <Switch>
            <Route path="/meetpoint">
              <Cards
                cardSchoolObject={cardSchoolObject}
                currentSchoolImg={currentSchoolImg}
                schoolName={setSelectedPrimarySchoolName}
                schoolAdress={setSelectedPrimarySchoolAddress}
                selectedMeetpoint={selectedMeetpoint}
              />
            </Route>
          </Switch>
        </MapContainer>
        <Footer></Footer>
      </AppGrid>
    </Router>
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

const Footer = styled.header`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: transparent;
  border-bottom: 0.8px solid lightgray;
  z-index: 100;
`
