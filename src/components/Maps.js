import React from 'react'
import { GoogleMap } from 'react-google-maps'
import mapStyles from './utils/mapStyles'

import Filter from './Filter'

export default function Maps() {
  return (
    <>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
        defaultOptions={{ styles: mapStyles }}
      ></GoogleMap>
      <Filter key={Math.random()} />
    </>
  )
}
