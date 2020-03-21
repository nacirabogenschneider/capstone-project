import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import schoolsImg from '../img/solid-sm/school-all.svg'
import schoolsSelectedImg from '../img/solid-sm/school-selected.svg'
import mapStyles from './mapStyles'
import uuid from 'react-uuid'

export default function Map({ chosenSchool, stateOfChoice, primeSchools }) {
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{
        lat: 53.551086,
        lng: 9.993682,
      }}
      defaultOptions={{ styles: mapStyles }}
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
