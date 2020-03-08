import React, { useEffect } from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import mapStyles from './utils/mapStyles'
import schoolsImg from '../img/solid-sm/school-all.svg'
import selectedSchoolImg from '../img/solid-sm/school-selected.svg'

export default function Map({
  primeSchools,
  selectedState,
  selectedSchoolCoordinates,
}) {
  console.log('1. HIER KOMMEN DIE SCHULKOORDINATEN', selectedSchoolCoordinates)
  useEffect(() => {
    console.log(
      '2. HIER KOMMEN DIE SCHULKOORDINATEN',
      selectedSchoolCoordinates
    )
    selectedSchoolCoordinates.lengst > 0 && renderSingleSchool()
  }, [selectedSchoolCoordinates, renderSingleSchool])

  function renderSingleSchool() {
    return (
      <Marker
        key={selectedSchoolCoordinates}
        position={selectedSchoolCoordinates}
        icon={selectedSchoolImg}
      />
    )
  }
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
      (
    </GoogleMap>
  )
}
