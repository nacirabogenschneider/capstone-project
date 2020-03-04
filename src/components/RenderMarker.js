import React from 'react'
import { Marker } from 'react-google-maps'

export default function RenderMarker({
  primarySchools,
  selectedState,
  selectedPrimarySchool,
  schoolBuilding,
  currentSchool,
}) {
  return primarySchools
    .filter(school => school.state === selectedState)
    .map(
      sortedSchool =>
        (
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
        ) &&
        selectedPrimarySchool &&
        selectedPrimarySchool !== 'Wähle deine Schule' && (
          <Marker
            key={Math.random()}
            position={{
              lat: 53.551086,
              lng: 9.993682,
            }}
            icon={{
              url: currentSchool,
            }}
          />
        )
    )
}

// function renderMeetointsBySchool(){
//   return
// }

// function renderSelectedMeetoints(){
//   return
// }
