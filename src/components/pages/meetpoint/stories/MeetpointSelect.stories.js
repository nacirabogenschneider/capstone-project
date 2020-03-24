import React from 'react'
import { action } from '@storybook/addon-actions'
import { MeetpointSelect } from '../MeetpointSelect'
import styled from 'styled-components/macro'

export default {
  title: 'Meetpoint/MeetpointSelect',
  component: MeetpointSelect,
}

const StyledMeetpoint = styled.select`
  font-family: 'Raleway';
  border-radius: 12px;
  border: none;
  font-size: 1.1rem;
  height: 49px;
  width: 96vw;
  padding: 4px;
  margin: 8px 0;
  background: white;
  opacity: 0.94;
  box-shadow: 0 0 10px 2px #2b7380;
  &:focus {
    box-shadow: 0 0 10px 2px #ee7600;
  }
`
const selectedSingleMeetpoint = 'Heidacker, Hamburg'
const selectedMeetpoints = [
  { meetpoint: 'Astweg' },
  { meetpoint: 'Baumacker' },
  { meetpoint: 'Heidacker' },
]
export const meetpointSelectSection = () => (
  <StyledMeetpoint
    value={selectedSingleMeetpoint}
    defaulvalue={'DEFAULT'}
    onChange={action('handelMeetPointChange')}
  >
    <>
      <option value="DEFAULT"> Wähle einen Treffpunkt</option>
      {selectedMeetpoints.map(point => (
        <option key="key" value={point.meetpoint}>
          {point.meetpoint}
        </option>
      ))}
    </>{' '}
  </StyledMeetpoint>
)
