import React from 'react'
import { GoogleMap } from 'react-google-maps'
import mapStyles from './utils/mapStyles'
import PropTypes from 'prop-types'

// Map.propTypes = {
//   selectedState: PropTypes.string.isRequired,
//   schoolLatLon: PropTypes.object.isRequired,
//   defaultZoom: PropTypes.number.isRequired,
//   defaultCenter: PropTypes.object.isRequired,
//   defaultOptions: PropTypes.object,
// }
export default function Map({ schoolLatLon, selectedState }) {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
      defaultOptions={{ styles: mapStyles }}
    ></GoogleMap>
  )
}
