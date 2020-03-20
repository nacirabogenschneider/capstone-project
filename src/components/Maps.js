import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, Marker } from 'react-google-maps'
import schoolsImg from '../img/solid-sm/school-all.svg'
import schoolsSelectedImg from '../img/solid-sm/school-selected.svg'
import mapStyles from './mapStyles'
import uuid from 'react-uuid'
import {
  saveToLocal,
  loadFromLocal,
} from '../components/pages/utils/localStorage'

export default function Map({ cardSchoolObject, primeSchools, selectedState }) {
  const schoolName = cardSchoolObject.name
  const [schoolCoordinates, setSchoolCoordinates] = useState(
    loadFromLocal('schoolCoordinates') === undefined
      ? {}
      : loadFromLocal('schoolCoordinates')
  )

  const filterSchoolsByPrimaryState = useCallback(() => {
    return primeSchools
      .filter(school => school.state === selectedState)
      .map(school => ({
        name: school.name,
        adress: school.address,
        lat: school.lat,
        lng: school.lon,
      }))
  }, [selectedState, primeSchools])

  useEffect(() => {
    const schools = filterSchoolsByPrimaryState().filter(
      school => school.name === schoolName
    )
    if (schools.length > 0) {
      setSchoolCoordinates({
        lat: schools[0].lat,
        lng: schools[0].lng,
      })
    }
  }, [filterSchoolsByPrimaryState, schoolName])

  saveToLocal('schoolCoordinates', schoolCoordinates)
  saveToLocal('primeSchools', primeSchools)
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
          lat: +schoolCoordinates.lat,
          lng: +schoolCoordinates.lng,
        }}
        icon={schoolsSelectedImg}
      />
    </GoogleMap>
  )
}
