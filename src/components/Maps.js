import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import schoolsImg from '../img/solid-sm/school-all.svg'
import schoolsSelectedImg from '../img/solid-sm/school-selected.svg'
import mapStyles from './utils/mapStyles'

export default function Map({
  cardSchoolObject,
  primeSchools,
  selectedState,
  selectedSchoolCoordinates,
}) {
  const schoolName = cardSchoolObject.name
  const schoolAddress = cardSchoolObject.schoolAddress
  const [schoolCoordinates, setSchoolCoordinates] = useState({})
  console.log('Der Name der Schule in maps - - - ', schoolName)
  console.log('Das ganze schulobject', cardSchoolObject)
  console.log('Das ausgewählte Bundesland', selectedState)

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
  console.log(filterSchoolsByPrimaryState())

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

  console.log(schoolCoordinates)
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
    </GoogleMap>
  )
}
