import React from 'react'
import { action } from '@storybook/addon-actions'
import { Filter } from './Filter'
import uuid from 'react-uuid'

export default {
  title: 'Filter/Select',
  component: Filter,
}

const selectStyle = {
  fontFamily: 'Raleway',
  height: 48,
  width: 350,
  borderRadius: 12,
  border: 'none',
  marginTop: 5,
  marginBottom: 5,
  paddingLeft: 8,
  fontSize: '1.1rem',
  background: 'white',
  opacity: 0.94,
  boxShadow: '0 0 10px 2px #2b7380',
}
const optionsStates = [
  { value: 'Hamburg', placeholder: 'Hamburg' },
  { value: 'Berlin', placeholder: 'Berlin' },
  { value: 'Hessen', placeholder: 'Hessen' },
]

const optionsSchool = [
  { value: 'Schule Heidacker', placeholder: 'HamSchule Heidackerburg' },
  { value: 'Schule Brehmweg', placeholder: 'Schule Brehmweg' },
  {
    value: 'Wolfgang-Borchert-Schule',
    placeholder: 'Wolfgang-Borchert-Schule',
  },
]
function renderselection(options) {
  return options.map(opt => <option key={uuid()}>{opt.value}</option>)
}

export const stateFilter = () => (
  <select
    style={selectStyle}
    value={'stateOfChoice'}
    onChange={action('filter primary schools by selected state')}
    options={optionsStates}
  >
    <option key={uuid()}>{'Wähle dein Bundesland'}</option>
    {renderselection(optionsStates)}
  </select>
)
export const schoolFilter = () => (
  <select
    style={selectStyle}
    value={'schoolOfChoice'}
    onChange={action('set selected school as selected')}
    options={optionsSchool}
  >
    <option key={uuid()}>{'Wähle deine Schule'}</option>
    {renderselection(optionsSchool)}
  </select>
)
