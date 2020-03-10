import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Cards from './components/Card'
import Filter from './components/Filter'
import Map from './components/Maps'
import * as schoolsData from './data/schools.json'
import currentSchoolImg from './img/solid-sm/school-selected.svg'
import { schoolRef } from './firebase'
const MapWrapped = withScriptjs(withGoogleMap(Map))

MapWrapped.propTypes = {
  defaultZoom: PropTypes.number,
  defaultCenter: PropTypes.object,
  efaultOptions: PropTypes.object,
  selectedPrimary: PropTypes.string,
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
  const [selectedState, setSelectedState] = useState('')
  const [primarySchools, setPrimaryschools] = useState(primeSchools)
  const [selectedSchoolCoordinates, setSelectedSchoolCoordinates] = useState({
    lat: 0,
    lon: 0,
  })
  const [cardSchoolObject, setCardSchoolObject] = useState({
    name: 'Du hast noch keine Schule ausgewählt',
  })

  return (
    <Router>
      <AppGrid>
        <Header />
        <MapContainer key="mapcontainer">
          <MapWrapped
            cardSchoolObject={cardSchoolObject}
            selectedState={selectedState}
            selectedSchoolCoordinates={selectedSchoolCoordinates}
            primeSchools={primarySchools}
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
                setCardSchoolObject={setCardSchoolObject}
                cardSchoolObject={cardSchoolObject}
                primarySchools={primarySchools}
                setPrimaryschools={setPrimaryschools}
                setSelectedState={setSelectedState}
                setSelectedSchoolCoordinates={setSelectedSchoolCoordinates}
              />
            </Route>
          </Switch>
          <Switch>
            <Route path="/meetpoint">
              <Cards
                cardSchoolObject={cardSchoolObject}
                currentSchoolImg={currentSchoolImg}
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
