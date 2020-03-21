import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AddPointButton, ButtonWrapper } from './Meetpoint.styles'
import MeetpointSelect from './MeetpointSelect'
import { saveToLocal } from '../utils/localStorage'
import MeetpointPlacesAutocomplete from './MeetpointPlacesAutocomplete'
import uuid from 'react-uuid'

export default function Meetpoint({
  createdMeetpoint,
  setCreatedMeetpoint,
  selectedMeetpoints,
  setSelectedMeetpoints,
  setCreatedMeetpoints,
  createdMeetpoints,
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
    setCreatedMeetpoints([
      ...createdMeetpoints,
      {
        meetpoint: address,
        id: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    ])
    saveToLocal('createdMeetpoints', createdMeetpoints)
  }

  useEffect(() => {
    setMeetpointSelection([...meetpointSelection, createdMeetpoints])
    saveToLocal('meetpointSelection', meetpointSelection)
  }, [createdMeetpoint])

  return (
    <>
      <MeetpointSelect
        selectedMeetpoints={selectedMeetpoints}
        setSelectedMeetpoint={setSelectedMeetpoints}
        meetpointSelection={meetpointSelection}
        setCreatedMeetpoint={setCreatedMeetpoint}
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
        <NavLink to="/runninglist">
          <AddPointButton aria-label="check" onClick={handleClick}>
            weiter
          </AddPointButton>
        </NavLink>
      </ButtonWrapper>
    </>
  )
}
