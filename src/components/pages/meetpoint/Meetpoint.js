import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AddPointButton, ButtonWrapper } from './Meetpoint.styles'
import MeetpointSelect from './MeetpointSelect'
import { saveToLocal } from '../utils/localStorage'
import MeetpointPlacesAutocomplete from './MeetpointPlacesAutocomplete'

export default function Meetpoint({
  createdMeetpoints,
  selectedMeetpoints,
  selectedSingleMeetpoint,
  setSelectedSingleMeetpoint,
  setSelectedMeetpoints,
  setCreatedMeetpoints,
  setDisplayedMeetpoint,
}) {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState(
    () =>
      JSON.parse(localStorage.getItem('coordinates')) || {
        lat: null,
        lgn: null,
      }
  )

  useEffect(() => {
    const shownMeetpoint = displayedPoint()
    setDisplayedMeetpoint(shownMeetpoint)
    saveToLocal('displayedMeetpoint', shownMeetpoint)
  }, [createdMeetpoints, selectedSingleMeetpoint])

  function displayedPoint() {
    return (
      (createdMeetpoints.length > 0 &&
        createdMeetpoints[createdMeetpoints.length - 1].meetpoint) ||
      (selectedSingleMeetpoint !== 'DEFAULT' && selectedSingleMeetpoint)
    )
  }

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
    setSelectedMeetpoints([
      {
        meetpoint: address,
        id: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
      ...selectedMeetpoints,
    ])
  }

  useEffect(() => {
    saveToLocal('selectedMeetpoints', selectedMeetpoints)
    saveToLocal('createdMeetpoints', createdMeetpoints)
  }, [createdMeetpoints, selectedMeetpoints])

  return (
    <>
      <MeetpointSelect
        selectedMeetpoints={selectedMeetpoints}
        setSelectedMeetpoints={setSelectedMeetpoints}
        selectedSingleMeetpoint={selectedSingleMeetpoint}
        setSelectedSingleMeetpoint={setSelectedSingleMeetpoint}
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
            auswählen
          </AddPointButton>
        </NavLink>
        <NavLink to="/runninglist">
          <AddPointButton aria-label="check" onClick={handleClick}>
            Lauflisten
          </AddPointButton>
        </NavLink>
      </ButtonWrapper>
    </>
  )
}
