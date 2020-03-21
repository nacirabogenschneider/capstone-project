import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MeetpointCard from './components/pages/meetpoint/MeetpointCard'
import Filter from './components/pages/filter/Filter'
import Map from './components/Maps'
import * as schoolsData from './data/schools.json'
import currentSchoolImg from './img/svg/_school.svg'
import plus from './img/solid-sm/sm-plus.svg'
import minus from './img/svg/_minus.svg'
import back from './img/solid-sm/sm-arrow-left.svg'
import check from './img/solid-sm/sm-check.svg'
import circle from './img/svg/_circle.svg'
import meetpointFlag from './img/svg/_flag.svg'
import phone from './img/svg/_phone.svg'
import mail from './img/svg/_mail.svg'
import Runninglist from './components/pages/runninglist/Runninglist'
import Navigation from './components/Navigation'
import School from './components/pages/school/School'
import Header from './components/Header'
import { SchoolSection } from './components/pages/school/School.styles'
import uuid from 'react-uuid'

const MapWrapped = withScriptjs(withGoogleMap(Map))

MapWrapped.propTypes = {
  defaultZoom: PropTypes.number,
  defaultCenter: PropTypes.object,
  defaultOptions: PropTypes.object,
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
  const [selectedSchoolCoordinates] = useState({
    lat: 0,
    lon: 0,
  })
  const [cardSchoolObject, setCardSchoolObject] = useState({
    name: 'Noch keine Schule ausgewählt',
  })

  const [meetpoint, setMeetpoint] = useState(
    () =>
      JSON.parse(localStorage.getItem('meetpoint')) || {
        meetpoint: 'Wähle einen Treffpunkt',
      }
  )

  return (
    <Router>
      <AppGrid>
        <Header />
        <MapContainer key="mapcontainer">
          <MapWrapped
            meetpoint={meetpoint}
            cardSchoolObject={cardSchoolObject}
            selectedState={selectedState}
            selectedSchoolCoordinates={selectedSchoolCoordinates}
            primeSchools={primeSchools}
            key={Math.random()}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3RFneQMozLqGhE3z5I1UOBARqYw8xZbE`}
            loadingElement={<div style={{ height: `100%` }}></div>}
            containerElement={<div style={{ height: `100%` }}></div>}
            mapElement={<div style={{ height: `100%` }}></div>}
          />
          <Switch>
            <Route exact path="/">
              <Filter
                key="Filter-Component"
                setSelectedState={setSelectedState}
                schoolStates={schoolStates}
                primarySchools={primeSchools}
                setCardSchoolObject={setCardSchoolObject}
              />
            </Route>
          </Switch>

          <Switch>
            <Route path="/school">
              <SchoolSection key={uuid()}>
                <School
                  currentSchoolImg={currentSchoolImg}
                  phone={phone}
                  mail={mail}
                  primeSchools={primeSchools}
                />
              </SchoolSection>
            </Route>
          </Switch>

          <Switch>
            <Route path="/meetpoint">
              <MeetpointCard
                meetpoint={meetpoint}
                setMeetpoint={setMeetpoint}
                cardSchoolObject={cardSchoolObject}
                currentSchoolImg={currentSchoolImg}
                meetpointFlag={meetpointFlag}
              />
            </Route>
          </Switch>

          <Switch>
            <Route path="/runninglist">
              <Runninglist
                meetpoint={meetpoint}
                plus={plus}
                back={back}
                check={check}
                minus={minus}
                circle={circle}
              />
            </Route>
          </Switch>
        </MapContainer>
        <Navigation></Navigation>
      </AppGrid>
    </Router>
  )
}

export default App

const AppGrid = styled.section`
  display: grid;
  height: 100vh;
  grid-template-rows: 52px auto 52px;
  margin: 0;
  padding: 0;
  background: #bce1e3;
`
const MapContainer = styled.section`
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`
