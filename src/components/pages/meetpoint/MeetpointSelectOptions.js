import React from 'react'
import uuid from 'react-uuid'

export default function MeetpointSelectOptions({ meetpointSelection }) {
  function adjustedMeetpointSelection() {
    return meetpointSelection.filter(
      point =>
        point.meetpoint !== '' &&
        point.meetpoint !== 'Erstelle den ersten Treffpunkt'
    )
  }

  return meetpointSelection.map(point => (
    <option key={uuid()}>{point.meetpoint}</option>
  ))
}
