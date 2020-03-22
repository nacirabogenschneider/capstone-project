import React from 'react'
import { action } from '@storybook/addon-actions'
import { RunninglistDetails } from '../RunninglistDetails'

export default {
  title: 'Runninglist/RunninglistDetails',
  component: RunninglistDetails,
}
export const detailsOfRunninglist = () => (
  <RunninglistDetails></RunninglistDetails>
)
