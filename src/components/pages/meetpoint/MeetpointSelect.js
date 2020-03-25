import React from 'react'
import { StyledMeetpoint } from './Meetpoint.styles'
import { saveToLocal } from '../utils/localStorage'
import MeetpointSelectOptions from './MeetpointSelectOptions'

export default function MeetpointSelect({
  setSelectedSingleMeetpoint,
  selectedSingleMeetpoint,
  selectedMeetpoints,
}) {
  function handelMeetPointChange(event) {
    setSelectedSingleMeetpoint(event.target.value)
    saveToLocal('selectedSingleMeetpoint', selectedSingleMeetpoint)
  }

  return (
    <StyledMeetpoint
      value={selectedSingleMeetpoint}
      defaulvalue={'DEFAULT'}
      onChange={handelMeetPointChange}
    >
      <MeetpointSelectOptions selectedMeetpoints={selectedMeetpoints} />
    </StyledMeetpoint>
  )
}
