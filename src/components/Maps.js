import React, { useState } from 'react'
import styled from 'styled-components'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'
import mapStyles from './utils/mapStyles'
import * as schoolsData from '../data/schools.json'
import Filter from './Filter'

export default function Maps() {
  const schoolsDataAll = schoolsData.schools
  return (
    <>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
        defaultOptions={{ styles: mapStyles }}
      ></GoogleMap>
      <Filter key={schoolsDataAll.id} schoolsDataAll={schoolsDataAll} />
    </>
  )
}
