import React, { useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import check from '../img/solid-sm/sm-check.svg'

export default function Meetpoint() {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({ lat: null, lgn: null })
  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
  }

  return (
    <>
      <Heading>Neuen Treffpunkt erstellen.</Heading>
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
                {...getInputProps({ placeholder: 'Suche eine Adresse' })}
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
      <NavLink to="/meetpoint">
        <AddPointButton aria-label="check">
          <img src={check} alt="check button"></img>
        </AddPointButton>
      </NavLink>
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
const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  flex-direction: column;
  font-family: 'Raleway';
  font-weight: 600;
  border-radius: 12px;
  border: none;
  padding: 10px;
  margin: 5px 0;
  color: white;
  font-size: 1.4rem;
  background: #ee7600;
  opacity: 0.92;
  box-shadow: 0 0 10px 4px #a4b0af;
`
const AddPointButton = styled.button`
  display: flex;
  left: 45vw;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 45px;
  width: 45px;
  border: none;
  margin: 4px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px #a4b0af;
  background: white;
  z-index: 200;
`
