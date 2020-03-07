import React from 'react'
import { Marker } from 'react-google-maps'

export default function RenderMarker({
  primarySchools,
  selectedState,
  schoolBuilding,
}) {
  console.log('RENDER ', selectedState)
  console.log('RENDER PRIMARYSCHOOLS', primarySchools)

  const primByState = primarySchools.filter(
    school => school.state === selectedState
  )
  return primByState.map(sortedSchool => (
    <Marker
      key={sortedSchool.id}
      position={{
        lat: sortedSchool.lat,
        lng: sortedSchool.lon,
      }}
      icon={{
        url: schoolBuilding,
      }}
    />
  ))
}
