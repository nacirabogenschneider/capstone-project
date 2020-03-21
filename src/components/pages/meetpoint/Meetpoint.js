import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AddPointButton, ButtonWrapper } from './Meetpoint.styles'
import MeetpointSelect from './MeetpointSelect'
import { saveToLocal } from '../utils/localStorage'
import MeetpointPlacesAutocomplete from './MeetpointPlacesAutocomplete'

export default function Meetpoint({
  meetpoint,
  setMeetpoint,
  selectedMeetpoint,
  setSelectedMeetpoint,
}) {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState(
    () =>
      JSON.parse(localStorage.getItem('coordinates')) || {
        lat: null,
        lgn: null,
      }
  )

  const [meetpointSelection, setMeetpointSelection] = useState(
    () =>
      JSON.parse(localStorage.getItem('meetpointSelection')) || [
        { meetpoint: 'Erstelle den ersten Treffpunkt' },
      ]
  )

  function handleClick() {
    setMeetpoint({
      meetpoint: address,
      meetpointLat: coordinates.lat,
      meetpointLng: coordinates.lng,
    })
    saveToLocal('meetpoint', meetpoint)
  }

  useEffect(() => {
    meetpoint.meetpoint !== 'Neuen Treffpunkt erstellen' &&
      setMeetpointSelection([...meetpointSelection, meetpoint])
    saveToLocal('meetpointSelection', meetpointSelection)
  }, [meetpoint])

  return (
    <>
      <MeetpointSelect
        selectedMeetpoint={selectedMeetpoint}
        setSelectedMeetpoint={setSelectedMeetpoint}
        meetpointSelection={meetpointSelection}
        setMeetpoint={setMeetpoint}
      />

      <MeetpointPlacesAutocomplete
        address={address}
        setAddress={setAddress}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />

      <ButtonWrapper>
        <NavLink to="/meetpoint">
          <AddPointButton aria-label="check" onClick={handleClick}>
            erstellen
          </AddPointButton>
        </NavLink>
      </ButtonWrapper>
    </>
  )
}
