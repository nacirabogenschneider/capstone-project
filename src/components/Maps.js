import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import schoolsImg from '../img/solid-sm/school-all.svg'
import schoolsSelectedImg from '../img/solid-sm/school-selected.svg'
import meetpointFlag from '../img/solid-sm/meetpoints-flag.svg'
import mapStyles from './utils/mapStyles'

export default function Map({
  meetpoints,
  cardSchoolObject,
  primeSchools,
  selectedState,
  selectedSchoolCoordinates,
}) {
  const schoolName = cardSchoolObject.name
  const [schoolCoordinates, setSchoolCoordinates] = useState({})

  function filterSchoolsByPrimaryState() {
    return primeSchools
      .filter(school => school.state === selectedState)
      .map(school => ({
        name: school.name,
        adress: school.address,
        lat: school.lat,
        lng: school.lon,
      }))
  }

  function setLatLonOfSelectedSchool() {
    const schools = filterSchoolsByPrimaryState().filter(
      school => school.name === schoolName
    )
    if (schools.length > 0) {
      setSchoolCoordinates({
        lat: schools[0].lat,
        lng: schools[0].lng,
      })
    }
  }
  useEffect(() => {
    setLatLonOfSelectedSchool()
  }, [])

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

      <Marker
        key={selectedSchoolCoordinates}
        position={{
          lat: +schoolCoordinates.lat,
          lng: +schoolCoordinates.lng,
        }}
        icon={schoolsSelectedImg}
      />

      {/* {meetpoints.length > 0 &&
        meetpoints
          .filter(meetpoint => meetpoint.schoolname === cardSchoolObject.name)
          .map(meetpoint => (
            <Marker
              key={meetpoint.meetpoint}
              position={{
                lat: +meetpoint.meetpointLat,
                lng: +meetpoint.meetpointLat,
              }}
              icon={meetpointFlag}
            />
          ))} */}
    </GoogleMap>
  )
}
