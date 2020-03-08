import React, { useState, useEffect } from 'react'
import { GoogleMap } from 'react-google-maps'

import mapStyles from './utils/mapStyles'

import * as schoolsData from '../data/schools.json'

const states = schoolsData.states

// Map.propTypes = {
//   selectedState: PropTypes.string.isRequired,
//   schoolLatLon: PropTypes.object.isRequired,
//   defaultZoom: PropTypes.number.isRequired,
//   defaultCenter: PropTypes.object.isRequired,
//   defaultOptions: PropTypes.object,
// }
export default function Map({ selectedState }) {
  const [variableStatePosition, setVariableStatePosition] = useState({})

  const [googlePosition, setGooglePosition] = useState({
    lat: 53.551086,
    lng: 9.993682,
  })

  const coordinates = states.filter(state => state.name === selectedState)

  useEffect(() => {
    if (coordinates.length > 0) {
      const cooObject = coordinates[0]
      setVariableStatePosition(cooObject)
    }
  }, [coordinates])
  useEffect(() => {
    const googleObject = {
      lat: +variableStatePosition.lat,
      lng: +variableStatePosition.lng,
    }
    setGooglePosition(googleObject)
  }, [variableStatePosition])

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: 53.551086,
        lng: 9.993682,
      }}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>
  )
}
