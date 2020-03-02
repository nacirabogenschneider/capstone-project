import React from 'react'
import styled from 'styled-components'
import Map from './components/Maps'

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'
import * as schoolsData from './data/schools.json'
import Content from './components/Content'
const MapWrapped = withScriptjs(withGoogleMap(Map))
function App() {
  return (
    <AppGrid>
      <Header />
      <MapContainer>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBU3q3eaMPCjRMHD-2E6Z7-qWhSyHFe3-E`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapContainer>
      <Content />
      {/* <Navigation /> */}
    </AppGrid>
  )
}

export default App

//import logo from './logo.svg';

/* <img src={logo} className="App-logo" alt="logo" /> */

const AppGrid = styled.div`
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
