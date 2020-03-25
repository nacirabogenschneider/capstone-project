import React from 'react'
import uuid from 'react-uuid'

export default function MeetpointSelectOptions({ selectedMeetpoints }) {
  return (
    <>
      <option value="DEFAULT"> Wähle einen Treffpunkt</option>
      {selectedMeetpoints.map(point => (
        <option key={uuid()} value={point.meetpoint}>
          {point.meetpoint}
        </option>
      ))}
    </>
  )
}
