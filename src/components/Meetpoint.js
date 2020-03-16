import React, { useState, useEffect } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'react-uuid'

export default function Meetpoint({
  cardSchoolObject,
  meetpoint,
  setMeetpoint,
}) {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({ lat: null, lgn: null })
  const [meetpointSelection, setMeetpointSelection] = useState([])
  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
  }

  useEffect(() => {
    setMeetpointSelection([...meetpointSelection, meetpoint])
  }, [meetpoint])

  function renderMeetpointSelection() {
    return meetpointSelection.map(point => (
      <option key={uuid()}>{point.meetpoint}</option>
    ))
  }

  function handleClick() {
    setMeetpoint({
      schoolname: cardSchoolObject.name,
      meetpoint: address,
      meetpointLat: coordinates.lat,
      meetpointLng: coordinates.lng,
    })
  }

  return (
    <>
      <StyledMeetpoint>
        <option key={uuid()}>Wähle einen Treffpunkt</option>
        {renderMeetpointSelection()}
      </StyledMeetpoint>
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <StyledInput
                {...getInputProps({
                  placeholder: 'Neuen Treffpunkt erstellen',
                })}
              ></StyledInput>

              <StyledSuggestionWrapper>
                {loading ? <div>...loading</div> : null}
                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? '#EE7600' : '#fff',
                    borderRadius: 12,
                    margin: 4,
                  }
                  return (
                    <StyledSuggestion
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </StyledSuggestion>
                  )
                })}
              </StyledSuggestionWrapper>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <ButtonWrapper>
        <NavLink to="/meetpoint">
          <AddPointButton aria-label="check" onClick={handleClick}>
            erstellen
          </AddPointButton>
        </NavLink>
        <NavLink to="/runninglist">
          <AddPointButton aria-label="check">zu den Lauflisten</AddPointButton>
        </NavLink>
      </ButtonWrapper>
    </>
  )
}

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92vw;
  height: 40px;
  flex-direction: column;
  font-family: 'Raleway';
  border-radius: 12px;
  border: none;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
  z-index: 100;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`

const StyledSuggestion = styled.div`
  display: flex;
  justify-content: left;
  background: white;
  opacity: 0.94;
  font-size: 18px;
  padding: 10px;
`
const StyledSuggestionWrapper = styled.div`
  border-radius: 12px;
  margin: 6px;
`

const AddPointButton = styled.button`
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  height: 45px;
  width: auto;
  border: none;
  margin: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
  z-index: 200;
  &:active,
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
`
const StyledMeetpoint = styled.select`
  font-family: 'Raleway';
  border-radius: 12px;
  border: none;
  font-size: 1.1rem;
  height: 45px;
  width: 95vw;
  padding: 4px;
  margin: 8px;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
