import React from 'react'
import uuid from 'react-uuid'

export default function MeetpointSelectOptions({ meetpointSelection }) {
  return meetpointSelection
    .reverse()
    .map(point => <option key={uuid()}>{point.meetpoint}</option>)
}
