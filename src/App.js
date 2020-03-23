import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { withGoogleMap, withScriptjs } from 'react-google-maps'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MeetpointCard from './components/pages/meetpoint/MeetpointCard'
import Filter from './components/pages/filter/Filter'
import Maps from './components/Maps'
import * as schoolsData from './data/schools.json'
import currentSchoolImg from './img/svg/school.svg'
import plus from './img/svg/plus.svg'
import minus from './img/svg/minus.svg'
import check from './img/svg/check.svg'
import circle from './img/svg/circle.svg'
import meetpointFlag from './img/svg/flag.svg'
import phone from './img/svg/phone.svg'
import mail from './img/svg/mail.svg'
import Runninglist from './components/pages/runninglist/Runninglist'
import Navigation from './components/Navigation'
import School from './components/pages/school/School'
import Header from './components/Header'
import { SchoolSection } from './components/pages/school/School.styles'
import uuid from 'react-uuid'
import saveToLocal, {
  loadFromLocal,
} from './components/pages/utils/localStorage'

// const MapWrapped = withScriptjs(withGoogleMap(Map))

// MapWrapped.propTypes = {
//   defaultZoom: PropTypes.number,
//   defaultCenter: PropTypes.object,
//   defaultOptions: PropTypes.object,
//   selectedPrimary: PropTypes.string,
//   selectedSchoolMeetpoint: PropTypes.string,
//   schoolLatLon: PropTypes.object,
//   mapElement: PropTypes.object,
//   googleMapURL: PropTypes.string,
//   loadingElement: PropTypes.object,
//   containerElemen: PropTypes.object,
// }

function App() {
  const schoolsDataAll = schoolsData.schools
  const primeSchools = schoolsDataAll
    .filter(school => school.school_type === 'Grundschule')
    .sort()
  const schoolStates = schoolsData.states

  const [createdMeetpoints, setCreatedMeetpoints] = useState(
    () => loadFromLocal('createdMeetpoints') || []
  )
  const [chosenSchool, setChosenSchool] = useState(
    () => loadFromLocal('chosenSchool') || 'Wähle deine Schule'
  )

  const [stateOfChoice, setStateOfChoice] = useState(
    () => loadFromLocal('stateOfChoice') || 'Wähle dein Bundesland'
  )
  const [selectedSchool, setSelectedSchool] = useState(
    () => loadFromLocal('selectedSchool') || 'Wähle deine Schule'
  )

  const [selectedMeetpoints, setSelectedMeetpoints] = useState(
    () => loadFromLocal('selectedMeetpoints') || []
  )

  const [selectedSingleMeetpoint, setSelectedSingleMeetpoint] = useState(
    () => loadFromLocal('selectedSingleMeetpoin') || 'Erstelle einen Treffpunkt'
  )

  const [displayedMeetpoint, setDisplayedMeetpoint] = useState(
    () => loadFromLocal('displayedMeetpoint') || 'Wähle einen Treffpunkt'
  )
  useEffect(() => {
    saveToLocal('selectedSchool', selectedSchool)
  }, [selectedSchool])

  return (
    <Router>
      <AppGrid>
        <Header />
        <MapContainer key="mapcontainer">
          <Maps
            style={{ width: '100%', heigth: '100%' }}
            // createdMeetpoints={createdMeetpoints}
            stateOfChoice={stateOfChoice}
            // setStateOfChoice={setStateOfChoice}
            primeSchools={primeSchools}
            chosenSchool={chosenSchool}
            // key={Math.random()}
            // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            // loadingElement={<div style={{ height: `100%` }}></div>}
            // containerElement={<div style={{ height: `100%` }}></div>}
            // mapElement={<div style={{ height: `100%` }}></div>}
          />
          <Switch>
            <Route exact path="/">
              <Filter
                key="Filter-Component"
                schoolStates={schoolStates}
                primarySchools={primeSchools}
                stateOfChoice={stateOfChoice}
                setStateOfChoice={setStateOfChoice}
                setSelectedSchool={setSelectedSchool}
                chosenSchool={chosenSchool}
              />
            </Route>
          </Switch>

          <Switch>
            <Route path="/school">
              <SchoolSection key={uuid()}>
                <School
                  selectedSchool={selectedSchool}
                  currentSchoolImg={currentSchoolImg}
                  phone={phone}
                  mail={mail}
                  primeSchools={primeSchools}
                  chosenSchool={chosenSchool}
                  setChosenSchool={setChosenSchool}
                />
              </SchoolSection>
            </Route>
          </Switch>

          <Switch>
            <Route path="/meetpoint">
              <MeetpointCard
                createdMeetpoints={createdMeetpoints}
                setCreatedMeetpoints={setCreatedMeetpoints}
                selectedMeetpoints={selectedMeetpoints}
                setSelectedMeetpoints={setSelectedMeetpoints}
                selectedSingleMeetpoint={selectedSingleMeetpoint}
                setSelectedSingleMeetpoint={setSelectedSingleMeetpoint}
                selectedSchool={selectedSchool}
                currentSchoolImg={currentSchoolImg}
                meetpointFlag={meetpointFlag}
                chosenSchool={chosenSchool}
                displayedMeetpoint={displayedMeetpoint}
                setDisplayedMeetpoint={setDisplayedMeetpoint}
              />
            </Route>
          </Switch>

          <Switch>
            <Route path="/runninglist">
              <Runninglist
                createdMeetpoints={createdMeetpoints}
                displayedMeetpoint={displayedMeetpoint}
                plus={plus}
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
  width: 100vw;
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
