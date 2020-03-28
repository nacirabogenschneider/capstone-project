import React from 'react'
import { action } from '@storybook/addon-actions'
import { MeetpointSelect } from '../MeetpointSelect'
import { AddPointButton, ButtonWrapper } from './Meetpoint.styles'

export default {
  title: 'Meetpoint/MeetpointSelect',
  component: MeetpointSelect,
}


const selectedSingleMeetpoint = 'Heidacker, Hamburg'
const selectedMeetpoints = [
  { meetpoint: 'Astweg' },
  { meetpoint: 'Baumacker' },
  { meetpoint: 'Heidacker' },
]
export const meetpointSelectSection = () => (
  <MeetpointSelect
        selectedMeetpoints={selectedMeetpoints}
        setSelectedMeetpoints={setSelectedMeetpoints}
        selectedSingleMeetpoint={selectedSingleMeetpoint}
        setSelectedSingleMeetpoint={setSelectedSingleMeetpoint}
      />
