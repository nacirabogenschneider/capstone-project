import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import mapStyles from './utils/mapStyles'
import schoolsImg from '../img/solid-sm/school-all.svg'

export default function Map({ primeSchools, selectedState }) {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: 53.551086,
        lng: 9.993682,
      }}
      defaultOptions={{ styles: mapStyles }}
    >
      {selectedState &&
        primeSchools
          .filter(school => school.state === selectedState)
          .map(sortedSchool => (
            <Marker
              key={sortedSchool.name}
              position={{
                lat: +sortedSchool.lat,
                lng: +sortedSchool.lon,
              }}
              icon={schoolsImg}
            />
          ))}
    </GoogleMap>
  )
}
