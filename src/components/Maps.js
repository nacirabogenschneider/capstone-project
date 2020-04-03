import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import schoolsImg from '../img/svg/school-all.svg'
import schoolsSelectedImg from '../img/svg/school-selected.svg'
import mapStyles from './mapStyles'
import uuid from 'react-uuid'
import * as statesAll from '../data/states.json'
export default function Map({ chosenSchool, stateOfChoice, primeSchools }) {
  const states = statesAll.states

  const [selectedStates, setSelectedStates] = useState({
    lat: 51.165691,
    lng: 10.451526,
  })

  useEffect(() => {
    const selectedStatesCoord = states.find(
      state => state.name === stateOfChoice
    ) || {
      name: 'Deutschland',
      lat: 51.165691,
      lng: 10.451526,
    }
    setSelectedStates({
      lat: selectedStatesCoord.lat,
      lng: selectedStatesCoord.lng,
    })
  }, [stateOfChoice])

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 51.165691, lng: 10.451526 }}
      defaultOptions={{ styles: mapStyles }}
      center={selectedStates}
    >
      {stateOfChoice &&
        primeSchools
          .filter(school => school.state === stateOfChoice)
          .map(sortedSchool => (
            <Marker
              key={uuid()}
              position={{
                lat: +sortedSchool.lat,
                lng: +sortedSchool.lon,
              }}
              icon={schoolsImg}
            />
          ))}

      <Marker
        key={uuid()}
        position={{
          lat: +chosenSchool.lat,
          lng: +chosenSchool.lon,
        }}
        icon={schoolsSelectedImg}
      />
    </GoogleMap>
  )
}
