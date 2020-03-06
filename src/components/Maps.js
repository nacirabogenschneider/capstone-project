import React, { useState } from 'react'
import { GoogleMap } from 'react-google-maps'
import mapStyles from './utils/mapStyles'
import PropTypes from 'prop-types'
import * as schoolsData from '../data/schools.json'

const states = schoolsData.states
console.log('Maps-states')
console.log(states)

// Map.propTypes = {
//   selectedState: PropTypes.string.isRequired,
//   schoolLatLon: PropTypes.object.isRequired,
//   defaultZoom: PropTypes.number.isRequired,
//   defaultCenter: PropTypes.object.isRequired,
//   defaultOptions: PropTypes.object,
// }
export default function Map({
  schoolLatLon,
  selectedState,
  selectedPrimarySchool,
}) {
  const [variablePosition, setVariablePosition] = useState({
    lat: 53.551086,
    lon: 9.993682,
  })
  console.log('MAPS STATE')
  console.log(selectedState)

  // selectedPrimarySchool
  //   ? setVariablePosition({ lat: schoolLatLon.lat, lon: schoolLatLon.lon })
  //   : setVariablePosition({ lat: stateFound.lat, lon: stateFound.lon })

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: variablePosition.lat, lng: variablePosition.lon }}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>
  )
}
