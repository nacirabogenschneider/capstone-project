import React from 'react'
// import { GoogleMap, Marker } from 'react-google-maps'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import schoolsImg from '../img/svg/school-all.svg'
import schoolsSelectedImg from '../img/svg/school-selected.svg'
import mapStyles from './mapStyles'
import uuid from 'react-uuid'

export default function Map({
  style,
  chosenSchool,
  stateOfChoice,
  primeSchools,
}) {
  return (
    <LoadScript
      style={style}
      id="script-loader"
      googleMapsApiKey="AIzaSyA2fRPt-VLqSstzSqHcMPuKUNClfVR-BBU"
    >
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        id="schools-map"
      >
        <Marker
          key={uuid()}
          position={{
            lat: +chosenSchool.lat,
            lng: +chosenSchool.lon,
          }}
          icon={schoolsSelectedImg}
        />
      </GoogleMap>
    </LoadScript>

    // <GoogleMap
    //   defaultZoom={11}
    //   defaultCenter={{
    //     lat: 53.551086,
    //     lng: 9.993682,
    //   }}
    //   defaultOptions={{ styles: mapStyles }}
    // >
    /* {stateOfChoice &&
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
      /> */
    // </GoogleMap>
  )
}
