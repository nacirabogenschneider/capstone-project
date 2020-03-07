import React, { useState, useEffect } from 'react'
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
  const [variablePosition, setVariablePosition] = useState({})

  const [googlePosition, setGooglePosition] = useState({
    lat: 53.551086,
    lng: 9.993682,
  })

  const coordinates = states.filter(state => state.name === selectedState)

  useEffect(() => {
    if (coordinates.length > 0) {
      const cooObject = coordinates[0]
      setVariablePosition(cooObject)
    }
  }, [coordinates])
  useEffect(() => {
    const googleObject = {
      lat: +variablePosition.lat,
      lng: +variablePosition.lng,
    }
    setGooglePosition(googleObject)
  }, [variablePosition])

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={googlePosition}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>
  )
}
