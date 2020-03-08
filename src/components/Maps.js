import React, { useState, useEffect } from 'react'
import { GoogleMap } from 'react-google-maps'

import mapStyles from './utils/mapStyles'

import * as schoolsData from '../data/schools.json'

const states = schoolsData.states

export default function Map({ selectedState }) {
  const [variableStatePosition, setVariableStatePosition] = useState()

  const coordinates = states.filter(state => state.name === selectedState)

  useEffect(() => {
    if (coordinates.length > 0) {
      const cooObject = coordinates[0]
      setVariableStatePosition(cooObject)
    }
  }, [coordinates])
  console.log(
    'HIER KOMMEN DIE KOORDIANTEN NACH AUSGEWÄHLTEM BUNDESLAND',
    variableStatePosition
  )
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 53.551086,
        lng: 9.993682,
      }}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>
  )
}
