import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import {
  StyledInput,
  StyledSuggestion,
  StyledSuggestionWrapper,
} from './Meetpoint.styles'
import { saveToLocal } from '../utils/localStorage'

export default function MeetpointPlacesAutocomplete({
  address,
  setAddress,
  coordinates,
  setCoordinates,
}) {
  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
    saveToLocal('coordinates', coordinates)
  }
  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <StyledInput
            style={{ height: 45, width: '94vw', padding: 3, margin: 4 }}
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
                display: 'flex',
                alignItems: 'center',
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
  )
}
