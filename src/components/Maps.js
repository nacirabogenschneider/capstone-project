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
        mapContainerStyle={{
          height: '100%',
          width: '100%',
        }}
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
  )
}
