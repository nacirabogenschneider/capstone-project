import React from 'react'
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import styled from 'styled-components'
import Map from './components/Maps'

const MapWrapped = withScriptjs(withGoogleMap(Map))
function App() {
  return (
    <AppGrid>
      <Header />
      <MapContainer key={Math.random()}>
        <MapWrapped
          key={Math.random()}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3RFneQMozLqGhE3z5I1UOBARqYw8xZbE`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapContainer>
      <Footer>
        <AddPointButton>&#10003;</AddPointButton>
      </Footer>
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
const MapContainer = styled.section`
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - 96px);
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
