import React from 'react'
import { StyledMeetpoint } from './Meetpoint.styles'
import { saveToLocal } from '../utils/localStorage'
import MeetpointSelectOptions from './MeetpointSelectOptions'

export default function MeetpointSelect({
  setSelectedMeetpoint,
  setMeetpointSelection,
  selectedMeetpoint,
  meetpointSelection,
}) {
  function handelMeetPointChange(event) {
    setSelectedMeetpoint(event.target.value)
    saveToLocal('selectedMeetpoint', selectedMeetpoint)
  }

  return (
    <StyledMeetpoint value={selectedMeetpoint} onChange={handelMeetPointChange}>
      <MeetpointSelectOptions
        setMeetpointSelection={setMeetpointSelection}
        meetpointSelection={meetpointSelection}
      />
    </StyledMeetpoint>
  )
}
