import React, { useEffect } from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import schoolsImg from '../img/solid-sm/school-all.svg'
import schoolsSelectedImg from '../img/solid-sm/school-selected.svg'
import mapStyles from './utils/mapStyles'

export default function Map({
  primeSchools,
  selectedState,
  selectedSchoolCoordinates,
}) {
  return (
    <GoogleMap
      defaultZoom={11}
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

      {selectedSchoolCoordinates.lengst > 0 && (
        <Marker
          key={selectedSchoolCoordinates}
          position={selectedSchoolCoordinates}
          icon={schoolsSelectedImg}
        />
      )}
    </GoogleMap>
  )
}
