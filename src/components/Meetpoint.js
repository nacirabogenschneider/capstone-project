import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import React, { useState } from 'react'
import styled from 'styled-components'

const meetpoints = []
export default function Meetpoint() {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({ lat: null, lgn: null })
  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
    console.log('Gesamtergebnis', results[0])
    console.log('Ausgewählte Adresse', address, 'Koordinaten', coordinates)
  }
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <StyledInput
              {...getInputProps({ placeholder: 'Suche eine Adresse' })}
            ></StyledInput>
            <div>
              {loading ? <div>...leading</div> : null}
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? '#EE7600' : '#fff',
                }
                return (
                  <StyledSuggestion
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    {suggestion.description}
                  </StyledSuggestion>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}

const StyledInput = styled.input`
  display: flex;
  width: 92vw;
  height: 40px;
  flex-direction: column;
  font-family: 'Arial';
  border-radius: 12px;
  border: none;
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1rem;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #a4b0af;
`

const StyledSuggestion = styled.div`
  background: white;
  opacity: 0.94;
  font-size: 18px;
  padding: 10px;
`
